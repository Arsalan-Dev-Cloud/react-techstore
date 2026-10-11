import React, { useMemo, useState } from "react";

import ProductSection from "../components/ProductSection";
import products from "../data/products";

function Products({ onAddToCart }) {
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
  <main className="products-page">
    <section className="products-page-header">
      <div className="container">
        <p className="page-label">SHOP OUR COLLECTION</p>

        <h1>All Products</h1>

        <p className="page-description">
          Explore all products available in our TechStore.
        </p>
      </div>
    </section>

    <ProductSection
      products={filteredProducts}
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      onAddToCart={onAddToCart}
    />
  </main>
);
}

export default Products;