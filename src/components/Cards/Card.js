import React from "react";
import styles from "./Cards.module.scss";

const Card = ({ item: { recipe } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={recipe.image}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          alt="thumbnail"
        />
      </div>
      <div className={styles.content}>
        <p> {recipe.label} </p>
      </div>
    </div>
  );
};

export default Card;
