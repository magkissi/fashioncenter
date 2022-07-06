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
          <img src="../../utilities/icons8-search-50.png" />
        </span>
        <span>
          <img src="../../utilities/icons8-search-50.png" />
        </span>
        <span>
          <img src="../../utilities/icons8-search-50.png" />
        </span>
        <span>
          <img src="../../utilities/icons8-search-50.png" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
