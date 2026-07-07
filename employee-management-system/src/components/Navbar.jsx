import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <h2>EMS</h2>

      <ul>
        <li>
          <Link to="/register">Admin Register</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/add-employee">Add Employee</Link>
        </li>

        <li>
          <Link to="/employee-list">Employee List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;