import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../src/components/nav";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Cart from "./components/cart/Cart";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Payment from "./components/payment/Payment";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
