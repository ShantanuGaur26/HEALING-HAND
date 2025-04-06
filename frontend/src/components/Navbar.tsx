import React from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
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
            <a href="#">Find Doctors</a>
          </li>
          <li>
            <a href="#">Video Consult</a>
          </li>
          <li>
            <a href="#">Surgeries</a>
          </li>
        </ul>
      </div>

      {/* Right side: Dropdowns + Login/Signup */}
      <div className="navbar-right">
        <ul className="nav-actions">
          <li className="dropdown">
            <a href="#">For Corporates</a>
            <span className="arrow">▼</span>
          </li>
          <li className="dropdown">
            <a href="#">For Providers</a>
            <span className="arrow">▼</span>
          </li>
          <li className="dropdown">
            <a href="#">Security & help</a>
            <span className="arrow">▼</span>
          </li>
        </ul>
        <button className="login-btn">Login / Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
