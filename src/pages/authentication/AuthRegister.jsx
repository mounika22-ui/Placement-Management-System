import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./AuthRegister.css";

function AuthRegister() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function registerUser(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const userData = {
        name,
        email,
        password,
        role,
      };

      const response = await api.post("/auth/register", userData);

      alert(response.data.message);

      setName("");
      setEmail("");
      setPassword("");
      setRole("student");

      navigate("/login");
    } catch (error) {
      console.log(error);

      const message =
        error.response?.data?.message || "Registration Failed";

      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default AuthRegister;