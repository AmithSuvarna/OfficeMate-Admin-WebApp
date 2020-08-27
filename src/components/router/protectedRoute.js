import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../login/auth";
import { AppContext } from "../appContext/appContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isLoggdIn, setIsLoggedIn] = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggdIn) {
          return <Component {...props}></Component>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
