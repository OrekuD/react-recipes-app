import React from "react";
import styles from "./Home.module.scss";
import { Banner, Searchbar, Recipes } from "../../components";

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Searchbar />
      <Recipes />
    </div>
  );
};

export default Home;
