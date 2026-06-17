function Students() {
    return (
        <div className="page-container">
            <h1>Students</h1>

            <button>Add Student</button>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Matric No</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Enoch Ajayi</td>
                        <td>01024111532</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Students;