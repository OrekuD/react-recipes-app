import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const APP_ID = "fae93ab3";
const API_KEY = "21c5352a64325d1364a19a9bfd149102";

function App() {
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
