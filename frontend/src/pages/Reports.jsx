import { useEffect, useState } from "react";
import axios from "axios";

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/attendance-analytics")
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="page-container">
      <h1>Attendance Analytics Report</h1>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Present</th>
            <th>Total Classes</th>
            <th>Attendance %</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.student}</td>
              <td>{report.present}</td>
              <td>{report.total}</td>
              <td style={{
                color: report.percentage < 75 ? "red" : "green",
                fontWeight: "bold",
              }}>{report.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;