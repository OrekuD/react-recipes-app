import React, { useContext } from "react";
import styles from "./Recipes.module.scss";
import Card from "../Cards/Card";
import { Context } from "../../context/context";

const Recipes = () => {
  const { data } = useContext(Context);

  if (data.length === 0) {
    return (
      <div className={styles.container}>
        <h3> No available receipes </h3>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {data.map((card) => (
        <Card key={Math.random().toString()} item={card} />
      ))}
    </div>
  );
};

export default Recipes;
