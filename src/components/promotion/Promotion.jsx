import React from "react";
import "./promo.css";

function Promotion() {
  return (
    <div className="promo_container">
      <div className="current_discount">
        <div className="promo_details">
          <div className=" promo_details_text1">MERRY</div>
          <span className="promo_details_text2">Christmas</span>
          <div className="promo_discount">
            <div className="discount_value">40</div>
            <div className="percentage">
              <span>%</span>
              <span>Off</span>
            </div>
          </div>
        </div>
        <div className="promo_image">
          <img src="/home-dress.jpg" alt="promo image" />
        </div>
      </div>
      <div className="next_discount">Promotion2</div>
    </div>
  );
}

export default Promotion;
