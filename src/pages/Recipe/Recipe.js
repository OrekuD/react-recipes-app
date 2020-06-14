import React, { useState, useEffect, useContext } from "react";
import styles from "./Recipe.module.scss";
import queryString from "query-string";
import { Context } from "../../context/context";

const Recipe = ({ location }) => {
  const [item, setItem] = useState({});
  const { data } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const item = queryString.parse(location.search);
    setItem(data.find((temp) => item.id === temp.recipe.label));
    setLoading(false);
  }, [location.search, data]);

  if (loading) {
    return <div> Loading </div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1> {item.recipe.label} </h1>
        {item.recipe.ingredientLines.map((ingredient) => (
          <p key={Math.random().toString()}> {ingredient} </p>
        ))}
        <ul className={styles.health}>
          {item.recipe.healthLabels.map((label) => (
            <li key={Math.random().toString()}> {label} </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <img
          src={item.recipe.image}
          alt="thumbnail"
          style={{ height: "80%", width: "80%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Recipe;
