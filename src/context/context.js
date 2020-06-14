import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("banana");

  return (
    <Context.Provider value={{ data, setData, search, setSearch }}>
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;

export { Provider, Context, Consumer };
