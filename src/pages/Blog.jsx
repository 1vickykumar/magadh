import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ancient Art of Makhana Farming in Bihar",
      excerpt: "Discover the traditional farming techniques that have been passed down through generations in Bihar, creating the finest quality makhana.",
      content: "For over 2000 years, the farmers of Bihar have perfected the art of growing makhana...",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      category: "Farming",
      readTime: "5 min read",
      image: "🌾",
      featured: true
    },
    {
      id: 2,
      title: "Health Benefits of Makhana: A Nutritional Powerhouse",
      excerpt: "Learn about the incredible health benefits of makhana, from weight management to heart health.",
      content: "Makhana, also known as fox nuts, are packed with essential nutrients...",
      author: "Dr. Priya Sharma",
      date: "2024-01-10",
      category: "Health",
      readTime: "7 min read",
      image: "💚",
      featured: false
    },
    {
      id: 3,
      title: "Traditional Makhana Recipes from Bihar",
      excerpt: "Explore authentic recipes using makhana that have been cherished in Bihar households for centuries.",
      content: "From savory snacks to sweet delicacies, makhana can be used in countless ways...",
      author: "Sneha Patel",
      date: "2024-01-05",
      category: "Recipes",
      readTime: "6 min read",
      image: "🍽️",
      featured: true
    },
    {
      id: 4,
      title: "Supporting Local Farmers: Our Mission",
      excerpt: "Learn how Magadh Makhana is making a difference in the lives of local farmers and their communities.",
      content: "At Magadh Makhana, we believe in creating a sustainable ecosystem...",
      author: "Amit Singh",
      date: "2023-12-28",
      category: "Community",
      readTime: "4 min read",
      image: "🤝",
      featured: false
    },
    {
      id: 5,
      title: "Organic Farming: The Future of Agriculture",
      excerpt: "Discover why organic farming practices are crucial for sustainable agriculture and better health.",
      content: "Organic farming is not just a trend, it's a necessity for our planet's future...",
      author: "Dr. Vikram Yadav",
      date: "2023-12-20",
      category: "Sustainability",
      readTime: "8 min read",
      image: "🌱",
      featured: false
    },
    {
      id: 6,
      title: "Makhana vs Other Healthy Snacks: A Comparison",
      excerpt: "Compare makhana with other popular healthy snacks and discover why it's the best choice.",
      content: "In today's health-conscious world, choosing the right snacks is crucial...",
      author: "Dr. Priya Sharma",
      date: "2023-12-15",
      category: "Health",
      readTime: "6 min read",
      image: "⚖️",
      featured: false
    }
  ];

  const categories = ["All", "Farming", "Health", "Recipes", "Community", "Sustainability"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <h1>Magadh Makhana Blog</h1>
          <p>Stories, recipes, and insights from the world of premium makhana</p>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          {/* Featured Posts */}
          <section className="featured-posts">
            <h2>Featured Articles</h2>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="featured-card">
                  <div className="featured-image">
                    <span className="post-emoji">{post.image}</span>
                    <div className="post-badge">Featured</div>
                  </div>
                  <div className="featured-content">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-author">
                      <span className="author-name">By {post.author}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Category Filter */}
          <section className="blog-filter">
            <h2>All Articles</h2>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="blog-posts">
            <div className="posts-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="post-card">
                  <div className="post-image">
                    <span className="post-emoji">{post.image}</span>
                    {post.featured && <div className="post-badge">Featured</div>}
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-footer">
                      <div className="post-author">
                        <span className="author-name">By {post.author}</span>
                        <span className="post-read-time">{post.readTime}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="btn btn-outline">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="blog-newsletter">
            <div className="newsletter-card">
              <div className="newsletter-content">
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter for the latest articles, recipes, and farming insights</p>
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
      </div>
    </div>
  );
};

export default Blog;

