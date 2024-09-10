"use client";

import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [ProviderOne, setProviderOne] = useState();
  const [ProviderTwo, setProviderTwo] = useState();
  
  return (
    <GlobalContext.Provider
      value={{
        ProviderOne, setProviderOne,
        ProviderTwo, setProviderTwo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};