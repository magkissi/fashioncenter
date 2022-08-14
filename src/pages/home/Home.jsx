import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import CartCard from "../../components/card/CartCard";
import StockCard from "../../components/card/stockCard";
import { useGetStockItemsQuery } from "../../api/apiSlice/stockItems";
import { useGetBestSellingItemsQuery } from "../../api/apiSlice/bestSelling";
import { useGetTrendingItemsQuery } from "../../api/apiSlice/trending";
import Promotion from "../../components/promotion";
import Trending from "../../../src/components/card/trendingCard";

const Home = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetBestSellingItemsQuery();
  const {
    data: stockData,
    isLoading: loadingStock,
    error: stockError,
  } = useGetStockItemsQuery();
  const {
    data: trendingData,
    isLoading: loadingtrendData,
    error: trendDataError,
  } = useGetStockItemsQuery();

  const handleGetItemClick = () => {
    console.log("clicking");
  };

  return (
    <>
      <div className="home_container">
        <section className="hero">
          <div className="hero_text">
            Elegant Lace
            <br />
            Collection
          </div>
          <div className="hero_image">
            <img src="/home-dress.jpg" alt="hero image" />
          </div>
        </section>
        <section className="stock_items">
          <div className="home_stock_container">
            {stockError ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                {stockData.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <StockCard
                        cardImage={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
                        title={item.attributes.title}
                        itemCount={item.attributes.quantity}
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
                          cartImage={`http://localhost:1337${item.attributes.picture.data[0].attributes.url}`}
                          cartDescription={item.attributes.description}
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
        <section className="trending">
          <div className="trending_title">Trending Outfits</div>
          <div className="trending_details">
            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                {data.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <Trending
                        cardImage="/home-dress.jpg"
                        title="sdfghj"
                        handleClick={handleGetItemClick}
                      />
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </section>
        <section className="freestyle">
          <div className="freestyle_images">
            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                {data.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <img src="/home-dress.jpg" />
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
          <div className="freestyle_desc">
            <div>
              <p className="freestyle_title">Free Style</p>
              <p className="freestyle_text">
                sdfghjklui,mfuyiopvbnm,vwertyuiop;lnbvcxcvbjkl;
                <br />
                ';lkjhgfdxcvbnmllmnbvcxcfghjkl.,mnbvcghjkl,mnb
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
