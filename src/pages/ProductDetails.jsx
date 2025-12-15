import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - will be replaced with API calls later
  const product = {
    id: parseInt(id),
    name: "Premium Roasted Makhana",
    price: 299,
    originalPrice: 399,
    images: ["🥜", "🌰", "🌟"],
    rating: 4.8,
    reviews: 156,
    category: "Roasted",
    description: "Our premium roasted makhana is carefully selected and roasted to perfection, delivering the authentic taste of Bihar with every bite. These fox nuts are sourced directly from local farmers and processed using traditional methods.",
    longDescription: "These premium roasted makhana are grown in the fertile lands of Bihar and processed using age-old techniques. Each batch is carefully selected for size and quality, then roasted to achieve the perfect crunch. Our direct partnership with local farmers ensures fair prices and sustainable farming practices.",
    inStock: true,
    discount: "25% OFF",
    weight: "250g",
    shelfLife: "6 months",
    ingredients: ["Makhana (Fox Nuts)", "Rock Salt", "Natural Oils"],
    nutrition: {
      calories: "347 per 100g",
      protein: "9.7g",
      carbs: "76.9g",
      fat: "0.1g",
      fiber: "14.5g"
    },
    benefits: [
      "Rich in protein and fiber",
      "Low in calories and fat",
      "Good source of magnesium and potassium",
      "Helps in weight management",
      "Supports heart health",
      "Gluten-free and vegan"
    ],
    storage: "Store in a cool, dry place. Keep away from direct sunlight.",
    origin: "Bihar, India",
    farmer: "Rajesh Kumar from Darbhanga"
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Organic Raw Makhana",
      price: 249,
      image: "🌰",
      rating: 4.9
    },
    {
      id: 3,
      name: "Spiced Makhana Mix",
      price: 349,
      image: "🌶️",
      rating: 4.7
    },
    {
      id: 5,
      name: "Himalayan Salt Makhana",
      price: 319,
      image: "🧂",
      rating: 4.8
    }
  ];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div className="product-details-page">
      <div className="container">
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href="/products">Products</a> / <span>{product.name}</span>
        </div>

        <div className="product-details">
          <div className="product-images">
            <div className="main-image">
              <span className="product-emoji">{product.images[selectedImage]}</span>
              {product.discount && (
                <div className="product-discount">{product.discount}</div>
              )}
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <span className="thumbnail-emoji">{image}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-header">
              <h1 className="product-name">{product.name}</h1>
              <div className="product-rating">
                <span className="stars">{"⭐".repeat(Math.floor(product.rating))}</span>
                <span className="rating-number">{product.rating}</span>
                <span className="reviews-count">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="product-pricing">
              <div className="price-row">
                <span className="current-price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="savings">You save ₹{product.originalPrice - product.price}</span>
              </div>
              <span className="price-unit">per {product.weight}</span>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(-1)}>-</button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    min="1"
                    max="10"
                    readOnly
                  />
                  <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
              </div>

              <div className="action-buttons">
                <button 
                  className="btn btn-primary btn-large"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button className="btn btn-secondary btn-large">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">Weight:</span>
                <span className="meta-value">{product.weight}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Shelf Life:</span>
                <span className="meta-value">{product.shelfLife}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Origin:</span>
                <span className="meta-value">{product.origin}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Farmer:</span>
                <span className="meta-value">{product.farmer}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tab-content">
            <div className="tab-section">
              <h3>Product Description</h3>
              <p>{product.longDescription}</p>
            </div>

            <div className="tab-section">
              <h3>Nutritional Information</h3>
              <div className="nutrition-grid">
                {Object.entries(product.nutrition).map(([key, value]) => (
                  <div key={key} className="nutrition-item">
                    <span className="nutrition-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span className="nutrition-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tab-section">
              <h3>Health Benefits</h3>
              <ul className="benefits-list">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="tab-section">
              <h3>Ingredients</h3>
              <p>{product.ingredients.join(", ")}</p>
            </div>

            <div className="tab-section">
              <h3>Storage Instructions</h3>
              <p>{product.storage}</p>
            </div>
          </div>
        </div>

        <div className="related-products">
          <h2>Related Products</h2>
          <div className="related-grid">
            {relatedProducts.map(product => (
              <div key={product.id} className="related-card">
                <div className="related-image">
                  <span className="related-emoji">{product.image}</span>
                </div>
                <div className="related-info">
                  <h4>{product.name}</h4>
                  <div className="related-rating">
                    <span className="stars">{"⭐".repeat(Math.floor(product.rating))}</span>
                    <span className="rating">({product.rating})</span>
                  </div>
                  <div className="related-price">₹{product.price}</div>
                  <a href={`/product/${product.id}`} className="btn btn-outline btn-small">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

