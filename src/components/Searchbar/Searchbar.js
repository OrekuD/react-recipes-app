import React from "react";
import styles from "./Searchbar.module.scss";
import { Search } from "../../svg/Svgs";

const Searchbar = () => {
  return (
    <div className={styles.container}>
      <Search color="#8b8585" size="15px" />
      <input placeholder="Search for recipes..." />
    </div>
  );
};

export default Searchbar;
