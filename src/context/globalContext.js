"use client";

import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [comparesList, setCompareList] = useState([]);
  
  return (
    <GlobalContext.Provider
      value={{
        comparesList, setCompareList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};