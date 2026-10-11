import React, { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink className="logo" to="/" onClick={closeMenu}>
          Tech<span>Store</span>
        </NavLink>

        <nav className={menuOpen ? "nav-links nav-links-open" : "nav-links"}>
          <NavLink to="/" onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}>
            Products
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <NavLink
            to="/cart"
            className="cart-button"
            aria-label={`Shopping cart with ${cartCount} items`}
            onClick={closeMenu}
          >
            <ShoppingCart size={21} />
            <span>{cartCount}</span>
          </NavLink>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
