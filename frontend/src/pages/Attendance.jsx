import Courses from "./Courses";

function Attendance() {
    return (
        <div>
            <h2>Attendance</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Enoch Ajayi</td>
                        <td>
                            <select>
                                <option>Present</option>
                                <option>Absent</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button>Submit Attendance</button>
        </div>
    );
}

export default Attendance;