import React, { useState } from "react";
import styles from "./footer.module.css";

function Footer() {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className={styles.footer_container}>
        <div className="">
          <p className={styles.title}>Company</p>
          <p className={styles.sub_title}>About Us</p>
          <p className={styles.sub_title}>Contact</p>
          <p className={styles.sub_title}>Store Location</p>
          <p className={styles.sub_title}>Careers</p>
        </div>
        <div className="">
          <p className={styles.title}>Help</p>
          <p className={styles.sub_title}>Order Tracking</p>
          <p className={styles.sub_title}>FAQ's</p>
          <p className={styles.sub_title}>Privacy Policy</p>
          <p className={styles.sub_title}>Terms & Conditions</p>
        </div>
        <div className={styles.media_handles}>
          <p className={styles.title}>Follow Us</p>
          <p>And get Free Shipping on all your orders!</p>
          <span>
            <img src="/facebook.png" />
          </span>
          <span className={styles.insta_icon}>
            <img src="/instagram.png" />
          </span>
          <span>
            <img src="/twitter.png" />
          </span>
        </div>
        <div className={styles.sign_up}>
          <p className={styles.title}>Sign up now & get 10% off</p>
          <p>
            Be the first to know about our new arrivals and exclusive offers
          </p>
          <input
            placeholder="Your email address"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.copy_right}>
        <em>copy right @krisannarette 2022</em>
      </div>
    </>
  );
}

export default Footer;
