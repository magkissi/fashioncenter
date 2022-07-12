import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Navbar() {
  return (
    <div className="nav_container">
      <div className="curency">GHC</div>
      <div className="left_list">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/shop">Shop</Link>
        </div>
        <div>Product</div>
      </div>
      <div className="logo">logo</div>
      <div className="right_list">
        <span>Pages</span>
        <span>Elements</span>
        <span>Blog</span>
      </div>
      <div className="icons">
        <span>
          <img src="/search-icon.png" alt="search-icon" />
        </span>
        <span>
          <img src="/avatar.png" alt="avatar-icon" />
        </span>
        <span>
          <img src="/heart-icon.png" alt="wish-icon" />
        </span>
        <div className="cart_icon_container">
          <div className="cart_count">1</div>
          <img src="/cart-icon.png" alt="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
