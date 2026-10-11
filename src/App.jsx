import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount((currentCount) => currentCount + 1);
  }

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={handleAddToCart} />}
        />

        <Route
          path="/products"
          element={<Products onAddToCart={handleAddToCart} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;