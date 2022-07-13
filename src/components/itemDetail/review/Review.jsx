import React from "react";
import styles from "./review.module.css";

function Review() {
  const starCount = [1, 2, 3, 4, 5];
  return (
    <div className={styles.item_detail_review}>
      <span>
        {starCount.map((count) => (
          <img key={count} src="/star-icon.png" alt="start-icon" />
        ))}
      </span>
      <span className={styles.review}>No reviews</span>
    </div>
  );
}

export default Review;
