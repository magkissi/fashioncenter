import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../src/components/nav";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Cart from "./components/cart/Cart";
import ItemDetail from "./components/itemDetail/ItemDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;
