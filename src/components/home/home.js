import React, { Component } from "react";
import Header from "../header/header";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Header></Header>
        </div>
        <div className="background"></div>
      </div>
    );
  }
}
