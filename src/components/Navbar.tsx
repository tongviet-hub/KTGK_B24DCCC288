import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="navbar-logo" onClick={() => navigate("/posts")}>
          <img
            src="images.png"
            alt="Oh My Blog Logo"
            className="navbar-logo-img"
          />
          <span className="navbar-title">Blog Manager</span>
        </div>
        <div className="navbar-links">
          <NavLink to="/posts" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Trang chủ</NavLink>
          <button className="navbar-btn" onClick={() => navigate("/create")}>Viết bài</button>
        </div>
      </div>
    </nav>
  );
}
