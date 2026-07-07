import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h2 className="dashboard-title">Employee Dashboard</h2>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Total Employees</h3>
          <p>3</p>
        </div>

        <div className="dashboard-card">
          <h3>Active Employees</h3>
          <p>3</p>
        </div>

        <div className="dashboard-card">
          <h3>Departments</h3>
          <p>2</p>
        </div>

        <div className="dashboard-card">
          <h3>New Joinees</h3>
          <p>0</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;