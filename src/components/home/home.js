import React, { useContext } from "react";
import "./home.css";
import { AppContext } from "../appContext/appContext";

export default function Home() {
  const [isLoggdIn, setIsLoggedIn] = useContext(AppContext);
  setIsLoggedIn(false);

  return (
    <div>
      <div className="background"></div>
    </div>
  );
}
