import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove login data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to Login page
    navigate("/login", { replace: true });
  }, [navigate]);

  return <h2>Logging out...</h2>;
}

export default Logout;