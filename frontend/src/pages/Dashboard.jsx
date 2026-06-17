import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>Attendance System</h2>

        <Link to="/students">Students</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/attendance">Attendance</Link>
      </div>

      <div className="content">

        <h1>Attendance Management Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h3>Total Students</h3>
            <p>6</p>
          </div>

          <div className="card">
            <h3>Total Courses</h3>
            <p>5</p>
          </div>

          <div className="card">
            <h3>Total Attendance</h3>
            <p>25</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;