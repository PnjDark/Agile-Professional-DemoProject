import { useState } from 'react'
import { useRouter } from 'next/router'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('Team Member')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role })
      })
      const body = await res.json()
      if (!res.ok) throw new Error(body.detail || 'Registration failed')
      router.push('/login')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 520, margin: '40px auto', padding: 24 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full name
          <input value={name} onChange={e => setName(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 6 }} />
        </label>
        <label style={{ display: 'block', marginTop: 12 }}>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 6 }} />
        </label>
        <label style={{ display: 'block', marginTop: 12 }}>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 6 }} />
        </label>
        <label style={{ display: 'block', marginTop: 12 }}>
          Role
          <select value={role} onChange={e => setRole(e.target.value)} style={{ width: '100%', padding: 8, marginTop: 6 }}>
            <option>Administrator</option>
            <option>Project Manager</option>
            <option>Team Member</option>
          </select>
        </label>
        {error && <div style={{ color: 'crimson', marginTop: 12 }}>{error}</div>}
        <div style={{ marginTop: 16 }}>
          <button type="submit" style={{ padding: '10px 16px' }} disabled={loading}>{loading ? 'Registering…' : 'Register'}</button>
        </div>
      </form>
    </div>
  )
}
