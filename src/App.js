import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../src/components/nav";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
