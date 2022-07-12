import React from "react";
import styles from "./stockCard.module.css";

function StockCard({ cardImage, title, itemCount }) {
  return (
    <div className={styles.card_container}>
      <img src={cardImage} alt={title} />
      <div className={styles.card_details}>
        <div className={styles.card_title}>{title}</div>
        <div className={styles.card_item_count}>{itemCount} items</div>
      </div>
    </div>
  );
}

export default StockCard;
