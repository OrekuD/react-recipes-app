import React, { useEffect, useContext } from "react";
import { Route } from "react-router-dom";

import "./App.scss";
import { Home, Recipe } from "./pages";
import { Header } from "./components";
import { Context } from "./context/context";

const APP_ID = "fae93ab3";
const API_KEY = "21c5352a64325d1364a19a9bfd149102";

function App() {
  const { setData } = useContext(Context);
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.hits);
        console.log(data.hits);
      });
  }, [setData]);

  return (
    <>
      <Header />
      <>
        <Route path="/" exact component={Home} />
        <Route path="/recipe" exact component={Recipe} />
      </>
    </>
  );
}

export default App;
