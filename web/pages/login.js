import { useState } from 'react'
import { useRouter } from 'next/router'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const body = await res.json()
      if (!res.ok) throw new Error(body.detail || 'Login failed')
      // store token
      localStorage.setItem('access_token', body.access_token)
      router.push('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: '60px auto', padding: 24 }}>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 6 }} />
        </label>
        <label style={{ display: 'block', marginTop: 12 }}>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 6 }} />
        </label>
        {error && <div style={{ color: 'crimson', marginTop: 12 }}>{error}</div>}
        <div style={{ marginTop: 16 }}>
          <button type="submit" style={{ padding: '10px 16px' }} disabled={loading}>{loading ? 'Logging in…' : 'Log in'}</button>
        </div>
      </form>
    </div>
  )
}
