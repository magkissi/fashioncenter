import React from "react";
import "./home.css";
import Card from "../../components/card/ItemCountCard";
import CartCard from "../../components/card/CartCard";
import ItemDetail from "../../components/itemDetail/ItemDetail";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="left">
          <Card
            title="lace collection"
            itemCount="20"
            cardImage="/home-dress.jpg"
          />
        </div>
        <div>
          <ItemDetail />
        </div>
        <div className="right">
          <CartCard cartImage="/home-dress.jpg" cartDescription="" />
        </div>
      </div>
    </>
  );
};

export default Home;
