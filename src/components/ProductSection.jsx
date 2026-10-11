import React from "react";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";

function ProductSection({
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  onAddToCart,
}) {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Featured products</span>
            <h2>Find your next upgrade</h2>
          </div>

          <p>
            Search products or filter them by category. Each card is created
            from reusable React data.
          </p>
        </div>

        <div className="product-toolbar">
          <div className="search-box">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category ? "category-active" : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No products found</h3>
            <p>Try another product name or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductSection;
