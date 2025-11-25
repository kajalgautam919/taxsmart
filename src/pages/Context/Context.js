import { createContext, useState } from "react";

export const Context = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const value = { children };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
