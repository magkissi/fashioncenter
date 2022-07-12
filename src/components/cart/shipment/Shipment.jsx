import React, { useState } from "react";
import styles from "./shipment.module.css";

function Shipment() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [shipmentAddress, setShipmentAddress] = useState("");

  return (
    <div className={styles.shipment_container}>
      <div className={styles.title}>Add shipment details</div>
      <div className={styles.shipment_details}>
        <div className="">
          <div className={styles.shipment_origin}>
            <input
              type="text"
              placeholder="enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="enter your region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
        </div>

        <input
          className={styles.shipment_address}
          type="text"
          placeholder="enter your shipment address"
          value={shipmentAddress}
          onChange={(e) => setShipmentAddress(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Shipment;
