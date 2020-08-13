import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../home/home";
import Login from "../login/login";
import Signup from "../signup/signup";

export default function Routing() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
    </BrowserRouter>
  );
}
