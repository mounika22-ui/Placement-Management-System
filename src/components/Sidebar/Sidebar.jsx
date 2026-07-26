import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/students"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Students
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/companies"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Companies
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/placements"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Placements
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Reports
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Settings
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;