import React, { useContext } from "react";
import styles from "./Recipes.module.scss";
import Card from "../Cards/Card";
import { Context } from "../../context/context";

// const cards = [
//   { id: Math.random().toString() },
//   { id: Math.random().toString() },
//   { id: Math.random().toString() },
//   { id: Math.random().toString() },
//   { id: Math.random().toString() },
//   { id: Math.random().toString() },
//   { id: Math.random().toString() },
// ];

const Recipes = () => {
  const { data } = useContext(Context);

  return (
    <div className={styles.container}>
      {data.map((card) => (
        <Card key={Math.random().toString()} item={card} />
      ))}
    </div>
  );
};

export default Recipes;
