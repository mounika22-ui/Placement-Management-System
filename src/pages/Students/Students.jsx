import { Link } from "react-router-dom";
import StudentTable from "../../components/studenttable";
import { useEffect, useState } from "react";
import react from "../../assets/react.svg";
import { AiFillAudio, AiFillCamera } from "react-icons/ai";
import api from "../../api/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [sortField, setSortField] = useState("studentName");
  const [order, setOrder] = useState("asc");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const token=localStorage.getItem("token");

  const limit = 5;

  // Fetch Students
  async function fetchStudent(pageNumber = page) {
    try {
      setLoading(true);

      const response = await api.get(
        `/students?page=${pageNumber}&limit=${limit}&sort=${sortField}&order=${order}`,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
      );

      setStudents(response.data.students);
      setTotalPages(response.data.totalPages);
      setPage(response.data.currentPage);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Load students initially and whenever page/sort/order changes
  useEffect(() => {
    fetchStudent(page);
  }, [page, sortField, order]);

  // Delete Student
  async function deleteStudent(id) {
    try {
      await api.delete(`/students/${id}`, {
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
      fetchStudent(page);
    } catch (error) {
      console.log(error);
    }
  }

  // Search Students
  async function searchStudents(value) {
    setSearch(value);

    if (value.trim() === "") {
      fetchStudent(page);
      return;
    }

    try {
      const response = await api.get(`/students/search?q=${value}`, {
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
      setStudents(response.data.students);
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Student Management</h1>

      <p>Manage all registered students here.</p>

      <Link to="/register">
        <button>Add New Student</button>
      </Link>

      <br />
      <br />

      <AiFillAudio size={25} />
      <AiFillCamera size={25} />

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => searchStudents(e.target.value)}
      />

      <br />
      <br />

      <button
        disabled={page === 1}
        onClick={() => fetchStudent(page - 1)}
      >
        Previous
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => fetchStudent(page + 1)}
      >
        Next
      </button>

      <br />
      <br />

      <label>Sort By: </label>

      <select
        value={sortField}
        onChange={(e) => {
          setSortField(e.target.value);
          setPage(1);
        }}
      >
        <option value="studentName">Student Name</option>
        <option value="cgpa">CGPA</option>
        <option value="branch">Branch</option>
      </select>

      <label style={{ marginLeft: "20px" }}>Order: </label>

      <select
        value={order}
        onChange={(e) => {
          setOrder(e.target.value);
          setPage(1);
        }}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <br />
      <br />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
      />

      <br />

      <img src={react} alt="React Logo" />
    </>
  );
}

export default Students;