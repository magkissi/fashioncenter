import React from "react";
import Button from "../common/button/Button";
import "./cartItem.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartItem({
  handleContinueShopping,

  cartItemImage,
  cartItemTitle,

  handleItemSummary,
}) {
  const itemQty = useSelector((state) => state.counter.count);
  const navigate = useNavigate();
  return (
    <div className="cart_item_container">
      <div className="cart_item_header">
        <span>{itemQty} item(s) added to your cart</span>
        <span onClick={handleItemSummary} className="cart_item_close">
          x
        </span>
      </div>
      <div className="cart_item">
        <div>
          <img src={cartItemImage} alt={cartItemTitle} />
        </div>
        <div className="cart_item_details">
          <p>{cartItemTitle}</p>
          <span>Quantity: {itemQty}</span>
          <span>Cart Subtotal: GHC 1000.00--unit price from api *qty</span>
        </div>
      </div>
      <div className="cart_item_buttons">
        <div>
          <Button
            buttonType=""
            text="Continue shopping"
            handleClick={handleContinueShopping}
          />
        </div>

        <div className="cart_item_btn2">
          <Button
            buttonType="filled"
            text="Proceed to cart"
            handleClick={() => navigate(`/cart`)}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
