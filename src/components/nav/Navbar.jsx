import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./nav.module.css";
import { useSelector } from "react-redux";
import { totalCartItems } from "../../appStore/slice/cart";

function Navbar() {
  const navigate = useNavigate();
  // const cartProducts = useSelector((state) => state.cart.products);
  const count = useSelector(totalCartItems);
  return (
    <div className={styles.nav_container}>
      <div className={styles.curency}>GHC</div>
      <div className={styles.left_list}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/shop">Shop</Link>
        </div>
        <div>Product</div>
      </div>
      <div className={styles.logo}>logo</div>
      <div className={styles.right_list}>
        <span>Pages</span>
        <span>Elements</span>
        <span>Blog</span>
      </div>
      <div className={styles.icons}>
        <span>
          <img src="/search-icon.png" alt="search-icon" />
        </span>
        <span>
          <img src="/avatar.png" alt="avatar-icon" />
        </span>
        <span>
          <img src="/heart-icon.png" alt="wish-icon" />
        </span>
        <div
          className={styles.cart_icon_container}
          onClick={() => navigate(`/cart`)}
        >
          <div className={styles.cart_count}>{count}</div>
          <img src="/cart-icon.png" alt="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
