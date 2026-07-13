function StudentTable({ students }) {
  return (
    <>
      {students.length === 0 ? 
        <h3>No Student Registered</h3>
       : 
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>S.No</th>
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
                <td>{index + 1}</td>
                <td>{student.StudentName}</td>
                <td>{student.Email}</td>
                <td>{student.Phone}</td>
                <td>{student.Branch}</td>
                <td>{student.Cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}

export default StudentTable;