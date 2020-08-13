import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function AppNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="/">
          Office Mate
        </a>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/login" className="link">
                Category
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/login" className="link">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-link">
              <i className="fas fa-user" />
              <Link to="/login" className="link">
                Sign Up
              </Link>
            </li>
            <li className="nav-link">
              <i className="fas fa-sign-in-alt" />
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
