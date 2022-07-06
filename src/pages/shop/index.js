import React from "react";
import "./shop.css";
import { useGetPokemonByNameQuery } from "../../api/apiSlice/starterApi";

function Shop() {
  const { data, error, isLoading } = useGetPokemonByNameQuery();
  console.log("data---", data);
  return (
    <div className="api-container">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((item) => {
            return (
              <div key={item.id} className="api-image">
                <h4>{item.style}</h4>
                <img src={item.image} alt={item.style} />
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
}

export default Shop;
