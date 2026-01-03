function Dashboard() {
  return (
    <div>
      {/* Header */}
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p>Quick insights into your LMS activity</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card stat-blue">
          <span className="stat-icon">📘</span>
          <h3>Total Courses</h3>
          <p>3</p>
        </div>

        <div className="stat-card stat-green">
          <span className="stat-icon">🎓</span>
          <h3>Total Students</h3>
          <p>5</p>
        </div>

        <div className="stat-card stat-purple">
          <span className="stat-icon">🧾</span>
          <h3>Enrollments</h3>
          <p>8</p>
        </div>

        <div className="stat-card stat-orange">
          <span className="stat-icon">⚡</span>
          <h3>Active Users</h3>
          <p>4</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-activity">
        <h3>Recent Activity</h3>

        <ul className="activity-list">
          <li>
            <span className="activity-dot blue"></span>
            Arun enrolled in <strong>Intro to HTML</strong>
          </li>
          <li>
            <span className="activity-dot green"></span>
            Priya completed <strong>CSS Basics</strong>
          </li>
          <li>
            <span className="activity-dot purple"></span>
            New student <strong>Jaya</strong> added
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
