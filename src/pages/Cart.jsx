import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import { getCartItems, updateCartItem, removeCartItem } from "../api/Api";
import { getToken } from "../utils/utils";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingItem, setUpdatingItem] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const token = getToken();
    if (!token) {
      // Allow viewing cart even if not logged in (optional - you can redirect to login if needed)
      setIsLoading(false);
      return;
    }

    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await getCartItems();
      
      if (response.status === "success" && response.data) {
        // Transform API response to match component structure
        const items = Array.isArray(response.data) ? response.data : response.data.items || [];
        setCartItems(items.map(item => ({
          id: item.productId || item.id,
          name: item.productName || item.name,
          price: item.price || item.productPrice,
          quantity: item.quantity,
          image: item.image || "🥜",
          weight: item.weight || "250g",
          inStock: item.inStock !== false
        })));
      } else {
        setCartItems([]);
      }
    } catch (err) {
      console.error("Error fetching cart items:", err);
      setError("Failed to load cart items. Please try again.");
      // Fallback to empty cart on error
      setCartItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }

    const token = getToken();
    if (!token) {
      // If not logged in, update locally
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
      return;
    }

    try {
      setUpdatingItem(id);
      setError("");
      const response = await updateCartItem(id, newQuantity);
      
      if (response.status === "success") {
        setCartItems(items =>
          items.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        );
      } else {
        setError(response.message || "Failed to update quantity. Please try again.");
        // Revert on error
        fetchCartItems();
      }
    } catch (err) {
      console.error("Error updating quantity:", err);
      setError("Failed to update quantity. Please try again.");
      // Revert on error
      fetchCartItems();
    } finally {
      setUpdatingItem(null);
    }
  };

  const removeItem = async (id) => {
    const token = getToken();
    if (!token) {
      // If not logged in, remove locally
      setCartItems(items => items.filter(item => item.id !== id));
      return;
    }

    try {
      setUpdatingItem(id);
      setError("");
      const response = await removeCartItem(id);
      
      if (response.status === "success") {
        setCartItems(items => items.filter(item => item.id !== id));
      } else {
        setError(response.message || "Failed to remove item. Please try again.");
        // Revert on error
        fetchCartItems();
      }
    } catch (err) {
      console.error("Error removing item:", err);
      setError("Failed to remove item. Please try again.");
      // Revert on error
      fetchCartItems();
    } finally {
      setUpdatingItem(null);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 500 ? 0 : 50;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleCheckout = () => {
    const token = getToken();
    if (!token) {
      navigate("/login");
      return;
    }
    // Checkout functionality - can be extended later
    alert("Proceeding to checkout...");
  };

  if (isLoading) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-loading">
            <div className="loading-spinner"></div>
            <p>Loading your cart...</p>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (

    <>
  
    
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{cartItems.length} item(s) in your cart</p>
        </div>

        {error && (
          <div className="cart-error">
            <span>⚠️</span>
            <span>{error}</span>
            <button onClick={() => setError("")} className="error-close">×</button>
          </div>
        )}

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <span className="item-emoji">{item.image}</span>
                </div>

                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-weight">{item.weight}</p>
                  {!item.inStock && (
                    <p className="out-of-stock">Currently out of stock</p>
                  )}
                </div>

                <div className="item-quantity">
                  <label htmlFor={`quantity-${item.id}`}>Qty:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1 || updatingItem === item.id}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      min="1"
                      max="10"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      disabled={updatingItem === item.id}
                    />
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= 10 || updatingItem === item.id}
                    >
                      +
                    </button>
                  </div>
                  {updatingItem === item.id && (
                    <span className="updating-indicator">Updating...</span>
                  )}
                </div>

                <div className="item-price">
                  <div className="price-per-item">₹{item.price}</div>
                  <div className="total-price">₹{item.price * item.quantity}</div>
                </div>

                <div className="item-actions">
                  <button 
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                    title="Remove item"
                    disabled={updatingItem === item.id}
                  >
                    {updatingItem === item.id ? "⏳" : "🗑️"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{calculateSubtotal()}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping:</span>
                <span>
                  {calculateShipping() === 0 ? (
                    <span className="free-shipping">FREE</span>
                  ) : (
                    `₹${calculateShipping()}`
                  )}
                </span>
              </div>
              
              {calculateSubtotal() < 500 && (
                <div className="shipping-note">
                  Add ₹{500 - calculateSubtotal()} more for free shipping!
                </div>
              )}
              
              <div className="summary-row total-row">
                <span>Total:</span>
                <span>₹{calculateTotal()}</span>
              </div>

              <div className="checkout-actions">
                <button 
                  className="btn btn-primary btn-large"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
                <Link to="/products" className="btn btn-outline">
                  Continue Shopping
                </Link>
              </div>

              <div className="payment-methods">
                <p>We Accept:</p>
                <div className="payment-icons">
                  <span>💳</span>
                  <span>🏦</span>
                  <span>💰</span>
                  <span>📱</span>
                </div>
              </div>
            </div>

            <div className="security-badges">
              <div className="badge">
                <span className="badge-icon">🔒</span>
                <span className="badge-text">Secure Checkout</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🚚</span>
                <span className="badge-text">Fast Delivery</span>
              </div>
              <div className="badge">
                <span className="badge-icon">↩️</span>
                <span className="badge-text">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default Cart;

