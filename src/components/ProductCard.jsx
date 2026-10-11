import React from "react";
import { ShoppingBag, Star } from "lucide-react";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <span className="product-category">{product.category}</span>

        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-content">
        <div className="rating">
          <Star size={16} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-footer">
          <strong>${product.price.toLocaleString()}</strong>

          <button onClick={onAddToCart}>
            <ShoppingBag size={17} />
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
