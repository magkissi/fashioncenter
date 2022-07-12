import React from "react";
import styles from "./cartDetail.module.css";

function CartDetails({
  cartImage,
  itemDescription,
  review,
  unitPrice,
  itemQty,
  totalAmount,
}) {
  return (
    <div className={styles.cart_details_container}>
      <div className={styles.cart_description}>
        <div className={styles.dress}>
          <img src={cartImage} />
        </div>
        <div className="cart_review">
          <div className="">{itemDescription}</div>
          <div className="">{review}</div>
        </div>
      </div>
      <div className="cart_unit_price">{unitPrice}</div>
      <div className={styles.cart_qty}>
        <span>-</span>
        <span>{itemQty}</span>
        <span>+</span>
      </div>
      <div className="">{totalAmount}</div>
      <div className="">X</div>
    </div>
  );
}

export default CartDetails;
