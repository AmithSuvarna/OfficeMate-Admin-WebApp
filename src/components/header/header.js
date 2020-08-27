import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import auth from "../login/auth";
import { AppContext } from "../appContext/appContext";
import { withRouter } from "react-router-dom";

function Header({ history }) {
  const [isLoggdIn, setIsLoggedIn] = useContext(AppContext);

  const onClickBrand = () => {
    if (isLoggdIn) {
      history.push("/login");
    } else {
      history.push("/");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" onClick={onClickBrand}>
          Office Mate
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <Link to="/order" className="link">
                Orders
              </Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="/products" className="link">
                Products
              </Link>
            </li>
            {/* <li class="nav-item dropdown">
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
            </li> */}
            <li className="nav-item nav-link">
              <Link to="/offers" className="link">
                Offers
              </Link>
            </li>
          </ul>
          {!isLoggdIn ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-link">
                <i className="fa fa-user" />
                <Link to="/signup" className="link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-link">
                <i className="fa fa-sign-in" />
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-link">
                <i className="fa fa-sign-out" />
                <Link to="/" className="link">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Header);
