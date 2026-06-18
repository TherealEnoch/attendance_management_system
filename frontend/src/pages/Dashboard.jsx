import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Dashboard() {
  const [stats, setStats] = useState({
    total_students: 0,
    total_courses: 0,
    total_attendance: 0,
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/dashboard-stats")
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>Attendance System</h2>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/">Logout</Link>
      </div>

      <div className="content">

        <h1>Attendance Management Dashboard</h1>

        <p>
          Manage students, courses, attendance records and reports.
        </p>

        <div className="cards">

          <div className="card">
            <h3>Total Students</h3>
            <p>{stats.total_students}</p>
          </div>

          <div className="card">
            <h3>Total Courses</h3>
            <p>{stats.total_courses}</p>
          </div>

          <div className="card">
            <h3>Total Attendance</h3>
            <p>{stats.total_attendance}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;