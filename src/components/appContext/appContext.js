import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </AppContext.Provider>
  );
};
