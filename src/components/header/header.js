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
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                Category
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Office Supplies
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    School Supplies{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-link">
              <Link to="/" className="link">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-link">
              <i className="fas fa-user" />
              <Link to="/signup" className="link">
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
