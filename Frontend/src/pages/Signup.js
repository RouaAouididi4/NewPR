import { useState } from "react";
import React from "react";
import "./Signup.css";
import SignupImage from "./images/Signup.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match ❌");
      setFormData({
        ...formData,
        password: "",
        confirmPassword: "",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const textResponse = await response.text();
      console.log("Raw Response:", textResponse);

      const data = JSON.parse(textResponse);
      if (response.ok) {
        setMessage("Account created successfully ✅");
      } else {
        setMessage(`Error: ${data.message || "Failed to create account"} ❌`);
      }
    } catch (error) {
      setMessage("Error creating account ❌");
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="signup-container container-fluid">
      <div className="signup-content row d-flex align-items-center justify-content-center">
        {/* Image Section */}
        <div className="signup-image-container col-md-6 text-center mb-4 mb-md-0">
          <img
            src={SignupImage}
            alt="Signup"
            className="signup-image img-fluid"
          />
        </div>

        {/* Form Section */}
        <div className="signup-form col-md-6">
          <h2 className="mb-4">Create Account</h2>
          {message && <p className="message alert alert-info">{message}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label>Email Address:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="signup-footer mt-5">{/* Footer Content */}</div>
    </div>
  );
};

export default Signup;
