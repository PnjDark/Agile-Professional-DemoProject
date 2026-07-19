export default function Dashboard({ tasks }) {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Project Dashboard</h1>
      <h2>Assigned Tasks</h2>
      {tasks && tasks.length ? (
        <ul>
          {tasks.map(task => (
            <li key={task.id} style={{ marginBottom: 12 }}>
              <strong>{task.title}</strong> — {task.status} — Priority: {task.priority}
              <div style={{ fontSize: 12, color: '#555' }}>{task.description}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No tasks found.</div>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch('http://postgrest:3001/tasks?select=*')
    const tasks = await res.json()
    return { props: { tasks } }
  } catch (err) {
    return { props: { tasks: [] } }
  }
}
