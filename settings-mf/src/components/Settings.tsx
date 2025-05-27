import React, { useState } from 'react'

function Settings() {
  const [username, setUsername] = useState('Alessandra')
  const [email, setEmail] = useState('alessandra@email.com')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Settings saved!')
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{ width: '100%', padding: 6, marginTop: 4 }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', padding: 6, marginTop: 4 }}
            />
          </label>
        </div>
        <button type="submit" style={{ width: '100%', padding: 8 }}>Save</button>
      </form>
    </div>
  )
}

export default Settings