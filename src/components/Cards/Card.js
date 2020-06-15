import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

const Card = ({ item: { recipe } }) => {
  return (
    <Link
      to={`/recipe?id=${recipe.label.split(" ").join("+")}`}
      className={styles.container}
    >
      <div>
        <div className={styles.image}>
          <img
            src={recipe.image}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt="thumbnail"
          />
        </div>
        <div className={styles.content}>
          <p> {recipe.label} </p>
          <p className={styles.source}> by {recipe.source} </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
