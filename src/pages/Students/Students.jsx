import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Students.css";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  return (
    <div className="students">
      <h1>Students</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>CGPA</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <Link to={`/students/${index + 1}`}>
                  {student.StudentName}
                </Link>
              </td>
              <td>{student.Email}</td>
              <td>{student.Phone}</td>
              <td>{student.Branch}</td>
              <td>{student.Cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;