import React, { useState } from "react";
import "./cart.css";
import CartDetails from "./cartDetail";
import Button from "../common/button/Button";
import Shipment from "./shipment";
import Checkout from "./checkout";

function Cart() {
  const [orderNotes, setOrderNotes] = useState("");
  const handleClearCart = () => {};
  const handleAddNote = (e) => {
    setOrderNotes(e.target.value);
    console.log("---notes", orderNotes);
  };
  const handleCheckoutButton = (payload) => {
    console.log("----payload", payload);
  };
  return (
    <div className="cart_container">
      <p className="cart_title">Shopping Cart</p>
      <section>
        <div className="cart_headings">
          <span>PRODUCT DETAILS</span>
          <span className="cart_heading_price">UNIT PRICE</span>
          <span>QUANTITY</span>
          <span>AMOUNT</span>
          <span></span>
        </div>
        <div className="">
          <CartDetails
            cartImage="/home-dress.jpg"
            itemDescription="description2334"
            review="review"
            unitPrice="GHC 200"
            itemQty="5"
            totalAmount="GHC 1000"
          />
        </div>
      </section>
      <section className="cart_btn_container">
        <div className="clear_cart_btn">
          <Button
            text="Clear cart"
            handleClick={handleClearCart}
            buttonType=""
          />
        </div>
        <div className="add_note_container">
          <div>Add notes to your order</div>
          <div className="">
            <input type="text" value={orderNotes} onChange={handleAddNote} />
          </div>
        </div>
      </section>
      <section className="shipment_checkout_container">
        <div className="shipment">
          <Shipment />
        </div>
        <div className="checkout">
          <Checkout
            subTotal="1500"
            total="2000"
            deliveryCost="500"
            handleCheckout={handleCheckoutButton}
          />
        </div>
      </section>
    </div>
  );
}

export default Cart;
