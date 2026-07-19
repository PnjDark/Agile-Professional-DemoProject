import Card from '../components/Card'

const sampleProjects = [
  {
    title: 'Neural Network Optimization',
    status: 'In Progress',
    description: 'Research and implementation of efficient gradient descent algorithms.',
    progress: 65,
    team: ['AL', 'JR']
  },
  {
    title: 'Sustainable Urban Design',
    status: 'Planning',
    description: 'Architectural proposal for eco-friendly student housing modules.',
    progress: 12,
    team: ['MS']
  }
]

const recentActivity = [
  { label: 'You uploaded project_spec_v2.pdf', time: '15 minutes ago' },
  { label: 'Sarah Chen commented on your task', time: '2 hours ago' },
  { label: 'Markus J. marked Data Cleaning as complete', time: 'Yesterday at 4:30 PM' }
]

export default function Dashboard({ tasks }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">SM</div>
          <div>
            <h1>StudentManager</h1>
            <p>Academic Projects</p>
          </div>
        </div>

        <button className="primary-btn">+ New Project</button>

        <nav className="nav-menu">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Projects</button>
          <button className="nav-item">Tasks</button>
          <button className="nav-item">Team</button>
        </nav>

        <div className="sidebar-footer">
          <button className="footer-item">Settings</button>
          <button className="footer-item">Support</button>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="search-box">
            <span>🔍</span>
            <input placeholder="Search projects, tasks, or team members..." />
          </div>
          <div className="top-actions">
            <button className="icon-btn">🔔</button>
            <button className="icon-btn">👤</button>
          </div>
        </header>

        <section className="overview">
          <div>
            <h2>Academic Overview</h2>
            <p>Welcome back, Alex. You have 4 project deadlines this week.</p>
          </div>
          <div className="overview-actions">
            <button className="secondary-btn">View Schedule</button>
            <button className="primary-btn">Create Task</button>
          </div>
        </section>

        <section className="grid-layout">
          <div className="projects-panel">
            <div className="panel-header">
              <h3>My Projects</h3>
              <button className="link-btn">View All →</button>
            </div>

            <div className="project-cards">
              {sampleProjects.map(project => (
                <Card key={project.title}>
                  <div className="project-card-header">
                    <div className="project-icon">📘</div>
                    <span className={`status-pill ${project.status.replace(' ', '-').toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-progress">
                    <div className="progress-bar"><div style={{ width: `${project.progress}%` }} /></div>
                    <span>{project.progress}% Done</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="sidebar-cards">
            <Card className="summary-card">
              <h4>Total Hours</h4>
              <p>124.5</p>
            </Card>
            <Card className="summary-card muted">
              <h4>Productivity</h4>
              <p>+12%</p>
            </Card>
            <Card className="activity-card">
              <div className="panel-header">
                <h3>Recent Activity</h3>
              </div>
              <div className="activity-list">
                {recentActivity.map(item => (
                  <div key={item.label} className="activity-item">
                    <div className="activity-dot" />
                    <div>
                      <p>{item.label}</p>
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="upcoming-card">
              <p className="tag">UPCOMING</p>
              <h4>Presentation Day</h4>
              <p>Final review for Neural Network project with Prof. Huan.</p>
              <div className="project-progress">
                <div className="progress-bar"><div style={{ width: '45%' }} /></div>
                <span>4 Days Left</span>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  return { props: { tasks: [] } }
}
