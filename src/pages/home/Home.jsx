import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import CartCard from "../../components/card/CartCard";
import StockCard from "../../components/card/StockCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home_container">
        <section className="hero">
          <div className="hero_text">
            Elegant Lace
            <br />
            Collection
          </div>
          <div>
            <img src="/home-dress.jpg" alt="hero image" />
          </div>
        </section>
        <section className="stock_items">
          <StockCard
            cardImage="/home-dress.jpg"
            title="sdfghjkl"
            itemCount="20"
          />
        </section>
        <section className="best_selling_items_container">
          <div className="best_selling_items">
            <div className="best_selling_text">Best selling items</div>
            <CartCard
              cartImage="/home-dress.jpg"
              cartDescription="sdfghj"
              price="123"
              icon="**"
              handleCartImage={() => navigate(`/itemDetail/123`)}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
