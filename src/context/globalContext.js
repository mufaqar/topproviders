"use client";

import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [ProviderOne, setProviderOne] = useState();
  console.log("🚀 ~ GlobalProvider ~ ProviderOne:", ProviderOne)
  const [ProviderTwo, setProviderTwo] = useState();
  console.log("🚀 ~ GlobalProvider ~ ProviderTwo:", ProviderTwo)
  
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