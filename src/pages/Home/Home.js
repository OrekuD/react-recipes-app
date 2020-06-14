import React from "react";
import styles from "./Home.module.scss";
import { Searchbar, Recipes } from "../../components";

const Home = () => {
  return (
    <div className={styles.container}>
      <Searchbar />
      <Recipes />
    </div>
  );
};

export default Home;
