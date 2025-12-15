import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { clearStorage, getName } from "../utils/utils";

const Navbar = () => {
  const name = getName()
  const navigate = useNavigate();

  const logout = () => {
    clearStorage();
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="brand">
          <span className="brand-text">Magadh Makhana</span>
          <span className="brand-subtitle">Premium Fox Nuts from Bihar</span>
        </Link>

        <div className="nav-menu">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {name ? (
            <div className="nav-actions">
              <Link to="/account" className="auth-link account-link">
                Account
              </Link>
              <span className="user-name">{name}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
              <Link to="/cart" className="cart-icon">
                🛒 <span className="cart-count">0</span>
              </Link>
            </div>
          ) : (
            <div className="nav-actions">
              <Link to="/login" className="auth-link">Login</Link>
              <Link to="/signup" className="auth-link signup-link">Sign Up</Link>
              <Link to="/cart" className="cart-icon">
                🛒 <span className="cart-count">0</span>
              </Link>
            </div>
          )}
        </div>

        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
