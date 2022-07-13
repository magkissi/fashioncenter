import React from "react";
import styles from "./itemSpecs.module.css";

function ItemSpecs({ value }) {
  return (
    <div className={styles.item_specs_container}>
      <div> .</div>
      <div className={styles.specs}>specifix: </div>
      <div className={styles.specs_value}>{value}</div>
    </div>
  );
}

export default ItemSpecs;
