import React from "react";
import "./login.css";

export default function Login() {
  return (
    <form className="login">
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign In
      </button>
      {/* <p className="forgot-password text-right">
          Forgot <a>password?</a>
        </p> */}
    </form>
  );
}
