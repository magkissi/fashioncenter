import React from "react";
import styles from "./promoDetails.module.css";
import Button from "../../common/button/Button";

function PromoDetails({ btnText, onBtnClick, text1, text2, discount }) {
  return (
    <div className={styles.promo_details}>
      <div className={styles.promo_details_text1}>{text1}</div>
      <span className={styles.promo_details_text2}>{text2}</span>
      <div className={styles.promo_discount}>
        <div className={styles.discount_value}>{discount}</div>
        <div className={styles.percentage}>
          <span>%</span>
          <span>Off</span>
        </div>
      </div>
      <div className={styles.promo_btn}>
        <Button text={btnText} handleClick={onBtnClick} />
      </div>
    </div>
  );
}

export default PromoDetails;
