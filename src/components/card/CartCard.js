import React from "react";
import "./card.css";

function CartCard({ cartImage, cartDescription }) {
  return (
    <>
      <div className="cart_card_container">
        <img src={cartImage} alt={cartDescription} />
        <div className="cart_card_details_container">
          <div className="cart_card_details">
            <div className="cart_description">description of the dress</div>
            <div className="cart_price">GHC 200.00</div>
          </div>
          <div>icon</div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
