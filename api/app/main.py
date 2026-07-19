import os
import asyncio
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncpg
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta

DATABASE_URL = os.getenv('DATABASE_URL', 'postgres://postgres:password@db:5432/postgres')
JWT_SECRET = os.getenv('JWT_SECRET', 'supersecretkey')
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")

app = FastAPI()

# CORS for local development (adjust origins for production)
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RegisterIn(BaseModel):
    name: str
    email: str
    password: str
    role: str = "Team Member"

class LoginIn(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

async def get_db_pool():
    if not hasattr(app.state, 'db_pool'):
        # Retry loop to wait for Postgres to become ready
        last_exc = None
        for attempt in range(10):
            try:
                app.state.db_pool = await asyncpg.create_pool(DATABASE_URL)
                last_exc = None
                break
            except Exception as exc:
                last_exc = exc
                await asyncio.sleep(1)
        if last_exc:
            raise RuntimeError(f"Could not connect to the database: {last_exc}")
    return app.state.db_pool

@app.on_event('startup')
async def startup():
    await get_db_pool()

@app.on_event('shutdown')
async def shutdown():
    if hasattr(app.state, 'db_pool'):
        await app.state.db_pool.close()

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET, algorithm=ALGORITHM)
    return encoded_jwt

@app.post('/register', status_code=201)
async def register(payload: RegisterIn):
    pool = await get_db_pool()
    async with pool.acquire() as conn:
        existing = await conn.fetchrow('SELECT id FROM app.users WHERE email = $1', payload.email)
        if existing:
            raise HTTPException(status_code=400, detail='Email already registered')
        hashed = get_password_hash(payload.password)
        row = await conn.fetchrow('INSERT INTO app.users (name, email, password_hash, role) VALUES ($1,$2,$3,$4) RETURNING id, name, email, role', payload.name, payload.email, hashed, payload.role)
        return {"id": row['id'], "name": row['name'], "email": row['email'], "role": row['role']}

@app.post('/login', response_model=Token)
async def login(payload: LoginIn):
    pool = await get_db_pool()
    async with pool.acquire() as conn:
        user = await conn.fetchrow('SELECT id, email, password_hash, role FROM app.users WHERE email = $1', payload.email)
        if not user:
            raise HTTPException(status_code=400, detail='Invalid credentials')
        if not verify_password(payload.password, user['password_hash']):
            raise HTTPException(status_code=400, detail='Invalid credentials')
        token = create_access_token({"sub": str(user['id']), "role": user['role'], "email": user['email']})
        return {"access_token": token, "token_type": "bearer"}
