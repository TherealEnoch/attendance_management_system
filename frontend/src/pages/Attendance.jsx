import { useEffect, useState } from "react";
import axios from "axios";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const [formData, setFormData] = useState({
    student_id: "",
    course_id: "",
    status: "present",
    attendance_date: "",
  });

  const fetchData = () => {
    axios
      .get("http://127.0.0.1:8000/api/students")
      .then((response) => setStudents(response.data));

    axios
      .get("http://127.0.0.1:8000/api/courses")
      .then((response) => setCourses(response.data));

    axios
      .get("http://127.0.0.1:8000/api/attendance")
      .then((response) => setAttendance(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitAttendance = () => {
    axios
      .post("http://127.0.0.1:8000/api/attendance", formData)
      .then(() => {
        fetchData();

        setFormData({
          student_id: "",
          course_id: "",
          status: "present",
          attendance_date: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="page-container">
      <h1>Attendance</h1>

      <div className="form-container">

        <select
          name="student_id"
          value={formData.student_id}
          onChange={handleChange}
        >
          <option value="">Select Student</option>

          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.full_name}
            </option>
          ))}
        </select>

        <select
          name="course_id"
          value={formData.course_id}
          onChange={handleChange}
        >
          <option value="">Select Course</option>

          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.course_code}
            </option>
          ))}
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>

        <input
          type="date"
          name="attendance_date"
          value={formData.attendance_date}
          onChange={handleChange}
        />

        <button onClick={submitAttendance}>
          Save Attendance
        </button>

      </div>

      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Course ID</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((record) => (
            <tr key={record.id}>
              <td>{record.student_id}</td>
              <td>{record.course_id}</td>
              <td>{record.status}</td>
              <td>{record.attendance_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;