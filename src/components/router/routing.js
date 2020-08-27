import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../header/header";
import Home from "../home/home";
import Login from "../login/login";
import Signup from "../signup/signup";
import OrdersTable from "../ordersTable/ordersTable";
import { AppContext } from "../appContext/appContext";
import { ProtectedRoute } from "./protectedRoute";
import Offers from "../offers/offers";
import Products from "../products/products";

export default function Routing() {
  const [isLoggedIn, setIsLoggedIn] = useContext(AppContext);

  console.log("Route: " + isLoggedIn);

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <ProtectedRoute path="/order" component={OrdersTable}></ProtectedRoute>
        <ProtectedRoute path="/offers" component={Offers}></ProtectedRoute>
        {/* <ProtectedRoute path="/products" component={Products}></ProtectedRoute> */}
        <Route path="/products" component={Products}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </Router>
  );
}
