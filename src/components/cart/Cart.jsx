import React, { useState } from "react";
import "./cart.css";
import CartDetails from "./cartDetail";
import Button from "../common/button/Button";
import Shipment from "./shipment";
import Checkout from "./checkout";
import {
  incProductQty,
  decProductQty,
  deleteCartItem,
} from "../../appStore/slice/cart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [orderNotes, setOrderNotes] = useState("");
  const cartProducts = useSelector((state) => state.cart.products);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleClearCart = () => {};
  const handleAddNote = (e) => {
    setOrderNotes(e.target.value);
    console.log("---notes", orderNotes);
  };
  // const handleCheckoutButton = () => {
  //   dispatch(totalCartItems());
  // };
  const handleCartItemIncrease = (itemIdx) => {
    dispatch(incProductQty(itemIdx));
  };
  const handleCartItemDecrease = (itemIdx) => {
    dispatch(decProductQty(itemIdx));
  };
  const handleDeleteItem = (id) => {
    dispatch(deleteCartItem(id));
    console.log("----idd", id);
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
        {cartProducts.map((item, idx) => {
          return (
            <div className="" key={idx}>
              <CartDetails
                cartImage={item.image}
                itemDescription={item.title}
                review={item.review}
                unitPrice={item.unitPrice}
                itemQty={item.quantity}
                totalAmount="GHC 1000"
                deleteItem={() => handleDeleteItem(item.id)}
                handleIncrement={() => handleCartItemIncrease(idx)}
                handleDecrement={() => handleCartItemDecrease(idx)}
              />
            </div>
          );
        })}
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
            handleCheckout={() => navigate(`/payment`)}
          />
        </div>
      </section>
    </div>
  );
}

export default Cart;
