import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../home/home";
import Login from "../login/login";

export default function Routing() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
    </BrowserRouter>
  );
}
