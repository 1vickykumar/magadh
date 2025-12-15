import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  localStorage.clear()
  // Mock data - will be replaced with API calls later
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Roasted Makhana",
      price: 299,
      image: "🥜",
      rating: 4.8,
      description: "Crispy and delicious roasted fox nuts"
    },
    {
      id: 2,
      name: "Organic Raw Makhana",
      price: 249,
      image: "🌰",
      rating: 4.9,
      description: "Pure organic fox nuts from Bihar farms"
    },
    {
      id: 3,
      name: "Spiced Makhana Mix",
      price: 349,
      image: "🌶️",
      rating: 4.7,
      description: "Flavorful mix with traditional spices"
    },
    {
      id: 4,
      name: "Makhana Flour",
      price: 199,
      image: "🌾",
      rating: 4.6,
      description: "Fine ground makhana for healthy cooking"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "The quality is exceptional! These makhana are so fresh and crispy. My family loves them."
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Great taste and excellent packaging. The organic variety is worth every penny."
    },
    {
      name: "Sneha Patel",
      location: "Bangalore",
      rating: 4,
      text: "Fast delivery and authentic Bihar taste. Will definitely order again!"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Premium Makhana from the Heart of Bihar
            </h1>
            <p className="hero-subtitle">
              Experience the authentic taste of Magadh Makhana - supporting local farmers
              while bringing you the finest quality fox nuts
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Our Story
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Farmer Partners</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Organic</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-img-placeholder">
              🌰 Premium Makhana
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Our most popular and premium quality makhana varieties</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                  <div className="product-badge">Premium</div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-rating">
                    <span className="stars">{"⭐".repeat(Math.floor(product.rating))}</span>
                    <span className="rating-text">({product.rating})</span>
                  </div>
                  <div className="product-price">
                    <span className="price">₹{product.price}</span>
                    <span className="price-unit">per 250g</span>
                  </div>
                  <div className="product-actions">
                    <Link to={`/product/${product.id}`} className="btn btn-outline">
                      View Details
                    </Link>
                    <button className="btn btn-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/products" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="brand-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p className="story-intro">
                Magadh Makhana represents more than just premium fox nuts - it's a story
                of tradition, quality, and community.
              </p>
              <div className="story-points">
                <div className="story-point">
                  <div className="point-icon">🌾</div>
                  <div className="point-content">
                    <h4>Traditional Farming</h4>
                    <p>Grown using age-old techniques passed down through generations</p>
                  </div>
                </div>
                <div className="story-point">
                  <div className="point-icon">🤝</div>
                  <div className="point-content">
                    <h4>Farmer Support</h4>
                    <p>Direct partnership with local farmers ensuring fair prices</p>
                  </div>
                </div>
                <div className="story-point">
                  <div className="point-icon">🌿</div>
                  <div className="point-content">
                    <h4>100% Organic</h4>
                    <p>No pesticides or chemicals, just pure natural goodness</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="story-image">
              <div className="story-img-placeholder">
                🏞️ Bihar Fields
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Real feedback from satisfied customers across India</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {"⭐".repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter for exclusive offers, new product launches, and farming stories</p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;