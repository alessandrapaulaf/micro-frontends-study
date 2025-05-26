
function Dashboard() {
  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24 }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', gap: 24, marginTop: 24, color: '#333' }}>
        <div style={{ flex: 1, background: '#f5f5f5', padding: 16, borderRadius: 8 }}>
          <h3>Users</h3>
          <p>120</p>
        </div>
        <div style={{ flex: 1, background: '#f5f5f5', padding: 16, borderRadius: 8 }}>
          <h3>Reports</h3>
          <p>34</p>
        </div>
        <div style={{ flex: 1, background: '#f5f5f5', padding: 16, borderRadius: 8 }}>
          <h3>Active</h3>
          <p>Yes</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard