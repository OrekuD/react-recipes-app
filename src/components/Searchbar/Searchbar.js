import React, { useState, useContext } from "react";
import styles from "./Searchbar.module.scss";
import { Search } from "../../svg/Svgs";
import { Context } from "../../context/context";

const Searchbar = () => {
  const [text, setText] = useState("");
  const { setSearch } = useContext(Context);

  const searchRecipe = () => {
    setSearch(text);
    setText("");
  };

  return (
    <div className={styles.container}>
      <div>
        <Search color="#8b8585" size="15px" />
        <input
          placeholder="Search for recipes..."
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? searchRecipe() : null)}
        />
      </div>
      <button onClick={searchRecipe}> Search </button>
    </div>
  );
};

export default Searchbar;
