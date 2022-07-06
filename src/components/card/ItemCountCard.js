import React from "react";
import "./card.css";

function Card({ cardImage, title, itemCount }) {
  return (
    <div className="card_container">
      <img src={cardImage} alt={title} />
      <div className="card_details">
        <div className="card_title">{title}</div>
        <div className="card_item_count">{itemCount} items</div>
      </div>
    </div>
  );
}

export default Card;
