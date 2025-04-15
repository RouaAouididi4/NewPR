import { useState } from "react";
import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import SigninImage from "./images/Signin.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    navigate("/home");
  };

  return (
    <div className="signin-container container py-5" style={{ backgroundColor: "transparent" }}>
      <div className="row align-items-center signin-content">
        {/* Form Section */}
        <div className="col-md-6 mb-4 mb-md-0 signin-form">
          <h2 className="mb-4">Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Email Address:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group mb-4">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center signin-image-container">
          <img
            src={SigninImage}
            alt="Sign In"
            className="img-fluid signin-image"
            style={{ maxWidth: "70%", height: "auto", backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
