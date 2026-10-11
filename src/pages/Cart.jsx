import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, Minus, Plus } from "lucide-react";

function Cart({ cartItems = [], onRemoveFromCart, onUpdateQuantity }) {
  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <main className="container page-content cart-page">
      <h1>Your Shopping Cart</h1>
      <p>Review your selected products before you continue shopping.</p>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <ShoppingBag size={48} />
          <h2>Your cart is empty</h2>
          <p>Add some products and they will appear here.</p>
          <Link to="/products" className="cart-continue-button">
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${Number(item.price).toLocaleString()} each</p>

                  <div className="cart-quantity">
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <Minus size={16} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="cart-item-actions">
                  <strong>
                    ${(Number(item.price) * item.quantity).toLocaleString()}
                  </strong>

                  <button
                    type="button"
                    className="cart-remove-button"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="cart-summary-row">
              <span>Items</span>
              <span>
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <div className="cart-summary-row cart-total">
              <span>Total</span>
              <strong>${total.toLocaleString()}</strong>
            </div>

            <p className="cart-demo-note">
              This is a shopping cart demo. No payment or order is submitted.
            </p>

            <Link to="/products" className="cart-continue-button">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;
