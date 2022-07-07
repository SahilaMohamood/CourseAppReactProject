import React from "react";
import { NavLink } from "react-router-dom";

const HeaderPage = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="/courses" >
                Courses
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="/about" >
                About
              </NavLink>
            
          </li>
        </ul>
        <div className="d-flex align-items-center">
                <NavLink to="/" className="btn  px-3">
                    <span>L U M I N A R</span>
                </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
