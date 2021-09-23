import * as React from "react";

function createContext<T>(name: string): [React.Context<T>, () => T] {
  const Context = React.createContext(null as any);

  const useContext = (): T => {
    const context = React.useContext<T>(Context);

    if (!context) {
      throw new Error(
        `use${name}Context must be used within a ${name}Provider`
      );
    }

    return context;
  };

  return [Context, useContext];
}

export { createContext };
