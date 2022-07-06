import React from "react";
import "./card.css";

function CartCard({ cartImage, cartDescription, price, handleCartImage }) {
  const addToWishList = () => {
    console.log("--adding to wish list");
  };
  return (
    <>
      <div className="cart_card_container">
        <img src={cartImage} alt={cartDescription} onClick={handleCartImage} />
        <div className="cart_card_details_container">
          <div className="cart_card_details">
            <div className="cart_description">{cartDescription}</div>
            <div className="cart_price">{`GHC ${price}`}</div>
          </div>
          <div className="cart_card_icon">
            <img
              src="/heart-icon.png"
              alt="wish-icon"
              onClick={addToWishList}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
