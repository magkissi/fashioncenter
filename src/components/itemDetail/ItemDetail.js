import React, { useState } from "react";
import "./itemDetail.css";
import ItemSpecs from "./ItemSpecs";
import Review from "./Review";
import SocialMedia from "./SocialMedia";
import Button from "../common/button/Button";
import CartItem from "../cartItem/CartItem";
import { increment } from "../../appStore/slides/counterSlide";
import { useSelector, useDispatch } from "react-redux";

function ItemDetail({ itemDetailImage, itemDetailDescription }) {
  const [showItemSummary, setShowItemSummary] = useState(false);
  const itemCount = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setShowItemSummary(true);
  };
  const handleBuyNow = () => {};
  const handleShopping = () => {
    setShowItemSummary(false);
  };
  const handleProceed = () => {};
  const handleDecrement = () => {};
  return (
    <div className="item_detail_container">
      <div className="item_image">
        <img src={itemDetailImage} alt={itemDetailDescription} />
      </div>
      <div className="item_detail">
        <p className="item_detail_path">Home / Shearling jacket</p>
        <span className="item_detail_title">Shearling jacket</span>
        <div>
          <Review />
        </div>
        <p>GHC 500.00--fetch from api</p>
        <div className="item_detail_buttons">
          <div className="item_count">
            <button onClick={handleDecrement}>-</button>
            <div>{itemCount}</div>
            <button onClick={() => dispatch(increment())}>+</button>
          </div>
          <div className="add_item_to_cart">
            <Button
              text="ADD TO CART"
              buttonType="filled"
              handleClick={handleAddToCart}
            />
          </div>
          <div className="add_to_wish">wicon</div>
        </div>
      </div>
      <div className="item_detail_buy">
        <Button
          text="BUY IT NOW"
          buttonType="filled"
          handleClick={handleBuyNow}
        />
      </div>
      <p className="item_detail_description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen.
      </p>
      <div>
        <ItemSpecs />
        <ItemSpecs />
        <ItemSpecs />
        <ItemSpecs />
        <ItemSpecs />
      </div>
      <div className="item_detail_social_media">
        <SocialMedia />
        <SocialMedia />
        <SocialMedia />
        <SocialMedia />
      </div>
      {showItemSummary ? (
        <div>
          <CartItem
            handleContinueShopping={handleShopping}
            handleProceedToCart={handleProceed}
            handleItemSummary={() => setShowItemSummary(false)}
            cartItemImage=""
            cartItemTitle="Long dress"
            itemQty="2"
            itemSubTotal="500.00"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ItemDetail;
