import { useState } from "react";
import axios from "axios";

function Reports() {
    const [studentId, setStudentId] = useState("");
    const [report, setReport] = useState(null);

    const getReport = async () => {
        const response = await axios.get(`http://127.0.0.1.8000/api/reporst/attendance/${studentId}`);

        setReport(response.data);
    };

    return (
        <div className="report-card">
            <h1>Attendance Report</h1>

            <input type="number" placeholder="Student ID" value={student_Id} onChange={(e) => setStudentId(e.target.value)} />

            <button onClick={getReport}>Generate Report</button>

            {report && (
                <div>
                    <h3>Student ID: {report.student_id}</h3>
                    <h3>Attendance Percentage: {report.attendance_percentage}%</h3>
                </div>
            )}
        </div>
    );
}

export default Reports;