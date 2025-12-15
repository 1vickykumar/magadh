import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";
import { getUserProfile, updateUserProfile } from "../api/Api";
import { getToken, getName } from "../utils/utils";

const Account = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    // Check if user is logged in
    const token = getToken();
    // if (!token) {
    //   navigate("/login");
    //   return;a
    // }

    fetchUserProfile();
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await getUserProfile();
      
      if (response.status === "success" && response.data) {
        const userData = response.data;
        setProfileData({
          name: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
          address: userData.address || ""
        });
        setFormData({
          name: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
          address: userData.address || ""
        });
      } else {
        setError("Failed to load profile. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      setError("Failed to load profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear errors when user starts typing
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleEdit = () => {
    setIsEditing(true);
    setError("");
    setSuccess("");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(profileData); // Reset to original data
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setError("Name is required");
      return;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setIsSaving(true);
      setError("");
      setSuccess("");

      const response = await updateUserProfile(formData);
      
      if (response.status === "success") {
        setProfileData(formData);
        setIsEditing(false);
        setSuccess("Profile updated successfully!");
        // Update localStorage if name changed
        const currentName = getName();
        if (currentName !== formData.name) {
          const loginInfo = JSON.parse(localStorage.getItem("login_info"));
          if (loginInfo && loginInfo.data) {
            loginInfo.data.name = formData.name;
            localStorage.setItem("login_info", JSON.stringify(loginInfo));
            window.location.reload(); // Reload to update navbar
          }
        }
      } else {
        setError(response.message || "Failed to update profile. Please try again.");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="account-page">
        <div className="container">
          <div className="account-loading">
            <div className="loading-spinner"></div>
            <p>Loading your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-page">
      <div className="container">
        <div className="account-header">
          <h1>My Account</h1>
          <p>Manage your profile information</p>
        </div>

        <div className="account-content">
          <div className="account-card">
            <div className="account-card-header">
              <h2>Profile Information</h2>
              {!isEditing && (
                <button className="btn btn-primary" onClick={handleEdit}>
                  Edit Profile
                </button>
              )}
            </div>

            {error && (
              <div className="alert alert-error">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="alert alert-success">
                <span>✓</span>
                <span>{success}</span>
              </div>
            )}

            {isEditing ? (
              <form onSubmit={handleSubmit} className="account-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    rows="4"
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleCancel}
                    disabled={isSaving}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <span className="loading">
                        <span className="spinner"></span>
                        Saving...
                      </span>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="profile-details">
                <div className="profile-detail-item">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">{profileData.name || "Not provided"}</span>
                </div>

                <div className="profile-detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{profileData.email || "Not provided"}</span>
                </div>

                <div className="profile-detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{profileData.phone || "Not provided"}</span>
                </div>

                <div className="profile-detail-item">
                  <span className="detail-label">Address:</span>
                  <span className="detail-value">{profileData.address || "Not provided"}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

