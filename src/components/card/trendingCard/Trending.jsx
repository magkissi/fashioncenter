import React from "react";
import styles from "./trending.module.css";

function Trending({ cardImage, title, handleClick }) {
  return (
    <div className={styles.container}>
      <img src={cardImage} alt={title} />
      <div className={styles.card_details}>
        <div className={styles.card_title}>{title}</div>
        <div className={styles.get_item} onClick={handleClick}>
          Get item now
        </div>
      </div>
    </div>
  );
}

export default Trending;
