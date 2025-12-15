import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import login from "../api/Api";
import { storeLoginData } from "../utils/utils";


const Login = () => {

  const Navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!formData.email) {
  //     newErrors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Please enter a valid email address";
  //   }

  //   if (!formData.password) {
  //     newErrors.password = "Password is required";
  //   } else if (formData.password.length < 6) {
  //     newErrors.password = "Password must be at least 6 characters";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await login(formData)

    if (response.status === "success") {
      console.log(response)
      storeLoginData(response)

      Navigate("/account////////////////////io")

    }


    // // if (!validateForm()) {
    //   return;
    // }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      alert("Login functionality will be connected to backend API!");
      setIsLoading(false);
      setFormData({ email: "", password: "" });
    }, 1500);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <span className="logo-icon">🌰</span>
              <h1>Magadh Makhana</h1>
            </div>
            <h2>Welcome Back</h2>
            <p>Sign in to your account to continue shopping</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="Enter your email address"
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "error" : ""}
                placeholder="Enter your password"
                required
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading">
                  <span className="spinner"></span>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="social-login google">
              <span className="social-icon">🔍</span>
              Continue with Google
            </button>

            <button type="button" className="social-login facebook">
              <span className="social-icon">📘</span>
              Continue with Facebook
            </button>
          </form>

          <div className="login-footer">
            <p>
              Don't have an account?
              <Link to="/signup" className="signup-link"> Sign up here</Link>
            </p>
          </div>
        </div>

        <div className="login-sidebar">
          <div className="sidebar-content">
            <h3>Why Choose Magadh Makhana?</h3>
            <div className="benefits">
              <div className="benefit">
                <span className="benefit-icon">🌾</span>
                <div>
                  <h4>Premium Quality</h4>
                  <p>100% organic makhana from Bihar farms</p>
                </div>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🚚</span>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>Quick and secure delivery across India</p>
                </div>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🤝</span>
                <div>
                  <h4>Farmer Support</h4>
                  <p>Direct partnership with local farmers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

