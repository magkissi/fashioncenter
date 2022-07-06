import React from "react";
import "./itemDetail.css";

function Review() {
  const starCount = [1, 2, 3, 4, 5];
  return (
    <div className="item_detail_review">
      <span>
        {starCount.map((count) => (
          <img key={count} src="/star-icon.png" alt="start-icon" />
        ))}
      </span>
      <span className="review">No reviews</span>
    </div>
  );
}

export default Review;
