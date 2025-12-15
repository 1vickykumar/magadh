import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  // Mock data - will be replaced with API calls later
  const products = [
    {
      id: 1,
      name: "Premium Roasted Makhana",
      price: 299,
      originalPrice: 399,
      image: "🥜",
      rating: 4.8,
      reviews: 156,
      category: "roasted",
      description: "Crispy and delicious roasted fox nuts with perfect crunch",
      inStock: true,
      discount: "25% OFF"
    },
    {
      id: 2,
      name: "Organic Raw Makhana",
      price: 249,
      originalPrice: 299,
      image: "🌰",
      rating: 4.9,
      reviews: 203,
      category: "raw",
      description: "Pure organic fox nuts from Bihar farms, completely natural",
      inStock: true,
      discount: "17% OFF"
    },
    {
      id: 3,
      name: "Spiced Makhana Mix",
      price: 349,
      originalPrice: 399,
      image: "🌶️",
      rating: 4.7,
      reviews: 89,
      category: "spiced",
      description: "Flavorful mix with traditional spices and herbs",
      inStock: true,
      discount: "13% OFF"
    },
    {
      id: 4,
      name: "Makhana Flour",
      price: 199,
      originalPrice: 249,
      image: "🌾",
      rating: 4.6,
      reviews: 67,
      category: "flour",
      description: "Fine ground makhana for healthy cooking and baking",
      inStock: true,
      discount: "20% OFF"
    },
    {
      id: 5,
      name: "Himalayan Salt Makhana",
      price: 319,
      originalPrice: 369,
      image: "🧂",
      rating: 4.8,
      reviews: 124,
      category: "roasted",
      description: "Premium makhana with authentic Himalayan salt",
      inStock: false,
      discount: "14% OFF"
    },
    {
      id: 6,
      name: "Curry Leaves Makhana",
      price: 279,
      originalPrice: 329,
      image: "🍃",
      rating: 4.5,
      reviews: 91,
      category: "spiced",
      description: "Aromatic makhana with fresh curry leaves",
      inStock: true,
      discount: "15% OFF"
    },
    {
      id: 7,
      name: "Makhana Seeds",
      price: 179,
      originalPrice: 219,
      image: "🌱",
      rating: 4.4,
      reviews: 45,
      category: "raw",
      description: "Raw makhana seeds for sprouting and gardening",
      inStock: true,
      discount: "18% OFF"
    },
    {
      id: 8,
      name: "Premium Gift Pack",
      price: 899,
      originalPrice: 1199,
      image: "🎁",
      rating: 4.9,
      reviews: 78,
      category: "gift",
      description: "Luxury gift pack with 4 premium makhana varieties",
      inStock: true,
      discount: "25% OFF"
    }
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "roasted", label: "Roasted" },
    { value: "raw", label: "Raw/Organic" },
    { value: "spiced", label: "Spiced" },
    { value: "flour", label: "Flour" },
    { value: "gift", label: "Gift Packs" }
  ];

  const filteredProducts = products.filter(product => {
    if (filter === "all") return true;
    return product.category === filter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1>Our Premium Makhana Collection</h1>
          <p>Discover the finest quality fox nuts from the heart of Bihar</p>
        </div>
      </div>

      <div className="products-content">
        <div className="container">
          <div className="products-filters">
            <div className="filter-section">
              <label htmlFor="category-filter">Category:</label>
              <select 
                id="category-filter"
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-section">
              <label htmlFor="sort-filter">Sort by:</label>
              <select 
                id="sort-filter"
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div className="results-count">
              Showing {sortedProducts.length} products
            </div>
          </div>

          <div className="products-grid">
            {sortedProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                  {product.discount && (
                    <div className="product-discount">{product.discount}</div>
                  )}
                  {!product.inStock && (
                    <div className="out-of-stock">Out of Stock</div>
                  )}
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-rating">
                    <span className="stars">{"⭐".repeat(Math.floor(product.rating))}</span>
                    <span className="rating-number">{product.rating}</span>
                    <span className="reviews-count">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="product-pricing">
                    <div className="price-row">
                      <span className="current-price">₹{product.price}</span>
                      <span className="original-price">₹{product.originalPrice}</span>
                    </div>
                    <span className="price-unit">per 250g</span>
                  </div>
                  
                  <div className="product-actions">
                    <Link to={`/product/${product.id}`} className="btn btn-outline">
                      View Details
                    </Link>
                    <button 
                      className={`btn ${product.inStock ? 'btn-primary' : 'btn-disabled'}`}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try adjusting your filters to see more products.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

