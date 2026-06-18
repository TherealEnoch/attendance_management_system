import { useEffect, useState } from "react";
import axios from "axios";

function Students() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    full_name: "",
    matric_no: "",
    email: "",
    department: "",
    level: "",
  });

  const fetchStudents = () => {
    axios
      .get("http://127.0.0.1:8000/api/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = () => {
    axios
      .post("http://127.0.0.1:8000/api/students", formData)
      .then(() => {
        fetchStudents();

        setFormData({
          full_name: "",
          matric_no: "",
          email: "",
          department: "",
          level: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="page-container">
      <h1>Students</h1>

      <div className="form-container">
        <input
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
        />

        <input
          name="matric_no"
          placeholder="Matric Number"
          value={formData.matric_no}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />

        <input
          name="level"
          placeholder="Level"
          value={formData.level}
          onChange={handleChange}
        />

        <button onClick={addStudent}>
          Add Student
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Matric No</th>
            <th>Email</th>
            <th>Department</th>
            <th>Level</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.full_name}</td>
              <td>{student.matric_no}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>{student.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;