import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
};

const Consumer = Context.Consumer;

export { Provider, Context, Consumer };
