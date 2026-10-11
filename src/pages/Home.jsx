import React, { useMemo, useState } from "react";

import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import products from "../data/products";

function Home({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main>
      <Hero />

      <ProductSection
        products={filteredProducts}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onAddToCart={onAddToCart}
      />

      <Features />
      <Newsletter />
    </main>
  );
}

export default Home;