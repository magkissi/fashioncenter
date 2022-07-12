import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import CartCard from "../../components/card/CartCard";
import StockCard from "../../components/card/stockCard";
import { useGetStockItemsQuery } from "../../api/apiSlice/stockItems";
import { useGetBestSellingItemsQuery } from "../../api/apiSlice/bestSelling";
import Promotion from "../../components/promotion";

const Home = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetStockItemsQuery();
  const { sellingData, loadingSelling, sellingError } =
    useGetBestSellingItemsQuery();
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
          <div className="home_stock_container">
            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                {data.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <StockCard
                        cardImage="/home-dress.jpg"
                        title="sdfghjkl"
                        itemCount="20"
                      />
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </section>
        <section className="best_selling_items_container">
          <div className="best_selling_items">
            <div className="best_selling_text">Best selling items</div>
            <div className="home_selling_container">
              {error ? (
                <>Oh no, there was an error</>
              ) : isLoading ? (
                <>Loading...</>
              ) : data ? (
                <>
                  {data.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <CartCard
                          cartImage="/home-dress.jpg"
                          cartDescription="sdfghj"
                          price="123"
                          handleCartImage={() => navigate(`/itemDetail/123`)}
                        />
                      </div>
                    );
                  })}
                </>
              ) : null}
            </div>
          </div>
        </section>
        <section>
          <Promotion />
        </section>
      </div>
    </>
  );
};

export default Home;
