import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Menubar.css";

const MenuBar = () => {
  const style = {
    textDecoration: "none",
    marginRight: "25px",
  };
  return (
    <div className="main-menu mb-4">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Main Logo */}
          <Link style={{textDecoration:'none'}} to='/home'>
          <a className="navbar-brand" href="# ">
            <img src={logo} className="main-logo" alt="" />
            <p>Learn<span>Agri</span></p>
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navigation Area */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavLink style={style} to="/home">
                <li className="nav-item items">Home</li>
              </NavLink>
              <NavLink style={style} to="/courses">
                <li className="nav-item items">Courses</li>
              </NavLink>
              <NavLink style={style} to="aboutus">
                <li className="nav-item items">About Us</li>
              </NavLink>
              <NavLink style={style} to="/contactus">
                <li className="nav-item items">Contact Us</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
