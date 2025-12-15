import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"
import { signup } from "../api/Api";


const Signup = () => {


  const nevigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

  // // const validateForm = () => {
  // //   const newErrors = {};

  // //   if (!formData.name.trim()) {
  // //     newErrors.name = "Full name is required";
  // //   } else if (formData.name.trim().length < 2) {
  // //     newErrors.name = "Name must be at least 2 characters";
  // //   }

  // //   if (!formData.email) {
  // //     newErrors.email = "Email is required";
  // //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  // //     newErrors.email = "Please enter a valid email address";
  // //   }

  // //   if (!formData.password) {
  // //     newErrors.password = "Password is required";
  // //   } else if (formData.password.length < 6) {
  // //     newErrors.password = "Password must be at least 6 characters";
  // //   } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
  // //     newErrors.password = "Password must contain uppercase, lowercase, and number";
  // //   }

  // //   if (!formData.confirmPassword) {
  // //     newErrors.confirmPassword = "Please confirm your password";
  // //   } else if (formData.password !== formData.confirmPassword) {
  // //     newErrors.confirmPassword = "Passwords do not match";
  // //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hiii")

    // // if (!validateForm()) {
    // //   return;
    // }

    // setIsLoading(true);

    // // Simulate API call
    // setTimeout(() => {
    //   alert("Signup functionality will be connected to backend API!");
    //   setIsLoading(false);

    // }, 1500);
    // setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    // console.log(formData)
    
      try {
        const response = await signup(formData) 
        console.log(response.status)
        if (response.status === "success") {
          toast.success(response.status)
          nevigate("/")
          // alert(response.status)

        } else {
          console.log("fail")
        }

      } catch (err) {
        console.log("mamla fail hei bhai")
      }
    



  };

  return (
    <>
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-card">
            <div className="signup-header">
              <div className="signup-logo">
                <span className="logo-icon">🌰</span>
                <h1>Magadh Makhana</h1>
              </div>
              <h2>Create Account</h2>
              <p>Join us and discover the finest makhana from Bihar</p>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                  placeholder="Enter your full name"
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

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
                  placeholder="Create a strong password"
                  required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
                <div className="password-hints">
                  <small>Password must contain uppercase, lowercase, and numbers</small>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? "error" : ""}
                  placeholder="Confirm your password"
                  required
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>

              <div className="form-options">
                <label className="terms-checkbox">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  I agree to the <Link to="/terms" className="terms-link">Terms of Service</Link> and <Link to="/privacy" className="terms-link">Privacy Policy</Link>
                </label>
              </div>

              <div className="form-options">
                <label className="newsletter-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Subscribe to our newsletter for updates and offers
                </label>
              </div>

              <button
                type="submit"
                className="signup-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading">
                    <span className="spinner"></span>
                    Creating Account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>

              <div className="divider">
                <span>or</span>
              </div>

              <button type="button" className="social-signup google">
                <span className="social-icon">🔍</span>
                Sign up with Google
              </button>

              <button type="button" className="social-signup facebook">
                <span className="social-icon">📘</span>
                Sign up with Facebook
              </button>
            </form>

            <div className="signup-footer">
              <p>
                Already have an account?
                <Link to="/login" className="login-link"> Sign in here</Link>
              </p>
            </div>
          </div>

          <div className="signup-sidebar">
            <div className="sidebar-content">
              <h3>Join Our Community</h3>
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">🎁</span>
                  <div>
                    <h4>Welcome Bonus</h4>
                    <p>Get 10% off your first order</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">⭐</span>
                  <div>
                    <h4>Exclusive Access</h4>
                    <p>Early access to new products and offers</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">📱</span>
                  <div>
                    <h4>Easy Ordering</h4>
                    <p>Save your preferences for faster checkout</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">🚚</span>
                  <div>
                    <h4>Free Shipping</h4>
                    <p>Free delivery on orders above ₹500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" />
      </div>

    </>
  );
};

export default Signup;

