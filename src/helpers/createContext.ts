import * as React from "react";

function createContext<T>(): [React.Context<T>, () => T] {
  const Context = React.createContext(null as any);

  const useContext = (): T => {
    const context = React.useContext<T>(Context);

    if (!context) {
      throw new Error("useContext must be used within a ContextProvider");
    }

    return context;
  };

  return [Context, useContext];
}

export { createContext };
