import React from "react";
import styles from "./cartDetail.module.css";

function CartDetails({
  cartImage,
  itemDescription,
  review,
  unitPrice,
  itemQty,
  totalAmount,
  handleDecrement,
  handleIncrement,
  deleteItem,
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
        <div className={styles.decrease_icon} onClick={handleDecrement}>
          -
        </div>
        <div>{itemQty}</div>
        <div className={styles.increase_icon} onClick={handleIncrement}>
          +
        </div>
      </div>
      <div className="">{totalAmount}</div>
      <div className={styles.delete_icon} onClick={deleteItem}>
        X
      </div>
    </div>
  );
}

export default CartDetails;
