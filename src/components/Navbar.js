import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/user">
          User Form
        </NavLink>
      </nav>
      <NavLink to="/admin">
        <button className="btn">Login</button>
      </NavLink>
    </div>
  );
};

export default Navbar;
