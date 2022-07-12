import React from "react";
import styles from "./checkout.module.css";
import Button from "../../common/button/Button";

function Checkout({ handleCheckout, subTotal, deliveryCost, total }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Grand Total</div>
      <div className={styles.checkout_details}>
        <div className={styles.checkout_subTotal}>
          <div className="">Subtotal:</div>
          <div className="">{subTotal}</div>
        </div>
        <div className={styles.delivery}>
          <div className="">Delivery:</div>
          <div className="">{deliveryCost}</div>
        </div>
        <div className={styles.total}>{total}</div>
        <div className={styles.checkout_btn}>
          <Button
            text="CHECKOUT"
            handleClick={handleCheckout}
            buttonType="filled"
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
