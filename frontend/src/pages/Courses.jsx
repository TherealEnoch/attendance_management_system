import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  const [formData, setFormData] = useState({
    course_code: "",
    course_title: "",
    lecturer_name: "",
  });

  const fetchCourses = () => {
    axios
      .get("http://127.0.0.1:8000/api/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addCourse = () => {
    axios
      .post("http://127.0.0.1:8000/api/courses", formData)
      .then(() => {
        fetchCourses();

        setFormData({
          course_code: "",
          course_title: "",
          lecturer_name: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="page-container">
      <h1>Courses</h1>

      <div className="form-container">
        <input
          name="course_code"
          placeholder="Course Code"
          value={formData.course_code}
          onChange={handleChange}
        />

        <input
          name="course_title"
          placeholder="Course Title"
          value={formData.course_title}
          onChange={handleChange}
        />

        <input
          name="lecturer_name"
          placeholder="Lecturer Name"
          value={formData.lecturer_name}
          onChange={handleChange}
        />

        <button onClick={addCourse}>
          Add Course
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Lecturer</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.course_code}</td>
              <td>{course.course_title}</td>
              <td>{course.lecturer_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;