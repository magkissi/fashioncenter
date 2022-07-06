import React from "react";
import "./cart.css";

function Cart() {
  return (
    <div>
      <p className="cart_title">Shopping Cart</p>

      <div className="cart_headings">
        <span>PRODUCT DETAILS</span>
        <span>UNIT PRICE</span>
        <span>QUANTITY</span>
        <span>AMOUNT</span>
      </div>
      <div className="cart_details">
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <span>UNIT PRICE</span>
        <span>QUANTITY</span>
        <span>AMOUNT</span>
      </div>
    </div>
  );
}

export default Cart;
