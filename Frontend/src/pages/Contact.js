import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate form submission
      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="contact-page">
      {/* Breadcrumb Area */}
      <section
        className="breadcumb-area bg-img"
        style={{ backgroundImage: "url(/img/bg-img/hero1.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
      
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        {/* Content Sidebar */}
        <div className="row">
          {/* Image Section */}
          <div className="col-md-6 mb-4">
            <img
              src="C:\Users\ranim\OneDrive\Bureau\RSProject\Frontend\src\pages\images\Signin.png" // Replace with your image URL
              alt="Contact"
              className="img-fluid rounded shadow-lg"
            />
          </div>

          {/* Form Section */}
          <div className="col-md-6">
            <h6 className="section-title mb-4">CONTACT INFO</h6>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                {/* Name and Phone */}
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Votre Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-muted">
                      Please enter your full name.
                    </small>
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="phone">Votre Téléphone</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaPhone />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Votre téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        aria-describedby="phoneHelp"
                      />
                    </div>
                    <small id="phoneHelp" className="form-text text-muted">
                      Enter your contact number.
                    </small>
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Votre Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaEnvelope />
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Votre Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-describedby="messageHelp"
                  ></textarea>
                  <small id="messageHelp" className="form-text text-muted">
                    Enter your message here.
                  </small>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary btn-block mt-4">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-area mb-5">
          <div className="row">
            <div className="col-12">
              <div id="googleMap" className="googleMap">
                {/* Embed Google Map */}
                <iframe
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed/v1/place?q=Los%20Angeles%2C%20CA&key=YOUR_API_KEY"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
</div>

  );
}

export default Contact;
