import React from "react";
import "./App.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routing from "../router/routing";
import { AppProvider } from "../appContext/appContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routing />
      </div>
    </AppProvider>
  );
}

export default App;
