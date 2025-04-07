import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Left side: Logo + Primary Nav */}
      <div className="navbar-left">
        <div className="logo">
          <span className="dot">•</span>
          <span className="brand">docto</span>
          <span className="dot">•</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="Finddoctor">Find Doctors</a>
          </li>
          <li>
            <a href="/VcLanding">Video Consult</a>
          </li>
          <li>
            <a href="/chatlanding">Chat with Doctor</a>
          </li>
        </ul>
      </div>

      {/* Right side: Dropdowns + Login/Signup */}
      <div className="navbar-right">
        <ul className="nav-actions">
          <li className="dropdown">
            <a href="/authdoc">For Doctors</a>
          </li>
          <li className="dropdown">
            <a href="/chat">For Labs</a>
          </li>
          <li className="dropdown">
            <a href="#">Security & help</a>
            <span className="arrow">▼</span>
          </li>
        </ul>
        <button className="login-btn" onClick={() => navigate("/auth")}>
          Login / Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
