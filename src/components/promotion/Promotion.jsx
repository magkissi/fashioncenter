import React from "react";
import "./promo.css";
import { useNavigate } from "react-router-dom";
import PromoDetails from "./promoDetails/PromoDetails";

function Promotion() {
  const navigate = useNavigate();

  return (
    <div className="promo_container">
      <div className="current_discount">
        <div className="">
          <PromoDetails
            btnText="Shop now"
            text1="MERRY"
            text2="Christmas"
            discount="40"
            onBtnClick={() => navigate(`/shop`)}
          />
        </div>
        <div className="promo_image">
          <img src="/home-dress.jpg" alt="promo image" />
        </div>
      </div>
      <div className="next_discount">
        <PromoDetails
          btnText="Shop now"
          text1="YOUR NEXT"
          text2="Purchase"
          discount="10"
          onBtnClick={() => navigate(`/shop`)}
        />
      </div>
    </div>
  );
}

export default Promotion;
