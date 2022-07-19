import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../common/button/Button";
import styles from "./payment.module.css";

function Payment() {
  const [email, setEmail] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseAddress, setHouseAddress] = useState("");
  const [infoCheckboxValue, setInfoCheckboxValue] = useState(false);

  const cartProducts = useSelector((state) => state.cart.products);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log("emaill", email);
  };
  const handleCheckBox = () => {
    setCheckboxValue(!checkboxValue);
    console.log("checkk", checkboxValue);
  };
  const handleShipping = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.contact_container}>
        <div className={styles.intro}>
          <span>Contact information</span>
          <span>Already have an account? Log in</span>
        </div>
        <div className={styles.full_input}>
          <input
            onChange={handleEmail}
            type="text"
            placeholder="Email or mobile phone number"
            value={email}
          />
        </div>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            onChange={handleCheckBox}
            value={checkboxValue}
          />
          <span>Email me with news and offers</span>
        </div>
        <div className={styles.shipment_container}>
          <div className={styles.full_input}>
            <input
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              placeholder="Country & region"
              value={country}
            />
          </div>

          <div className={styles.name}>
            <div className="">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First name"
                value={firstName}
              />
            </div>
            <div className="">
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last name"
                value={lastName}
              />
            </div>
          </div>
          <div className={styles.full_input}>
            <input
              onChange={(e) => setHouseAddress(e.target.value)}
              type="text"
              placeholder="House address"
              value={houseAddress}
            />
          </div>

          <div className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={() => setInfoCheckboxValue(!infoCheckboxValue)}
              value={infoCheckboxValue}
            />
            <span>Save this information for next time</span>
          </div>
          <div className={styles.shipment_btn}>
            <Button
              text="Continue to shipping"
              buttonType="filled"
              handleClick={handleShipping}
            />
          </div>
        </div>
      </div>

      <div className="">
        {cartProducts.map((item, idx) => {
          return (
            <div className={styles.summary_container} key={idx}>
              <div className={styles.image}>
                <img src={item.image} alt={item.description} />
              </div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.amount}>GHC 1000</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Payment;
