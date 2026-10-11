import React from "react";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="logo footer-logo" href="#home">
            Tech<span>Store</span>
          </a>

          <p>
            A complete React landing page example built with reusable
            components, props, state, events, and array mapping.
          </p>
        </div>

        <div>
          <h4>Shop</h4>
          <a href="#products">Laptops</a>
          <a href="#products">Accessories</a>
          <a href="#products">Monitors</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#home">About</a>
          <a href="#features">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#contact">Help center</a>
          <a href="#contact">Shipping</a>
          <a href="#contact">Returns</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 TechStore. Built for React learning.</p>
      </div>
    </footer>
  );
}

export default Footer;
