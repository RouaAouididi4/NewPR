import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css"; // Assurez-vous de créer ce fichier CSS

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription à la newsletter
    alert("Merci pour votre inscription à notre newsletter!");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: Logo et Newsletter */}
        <div className="footer-section">
          <h2 className="logo">HOMZ</h2>
          <p className="description">
            At Homz, we are committed to providing exceptional service and
            support.
          </p>

          <form className="newsletter" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              aria-label="Email for newsletter"
            />
            <button type="submit">Discover More</button>
          </form>

          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Section 2: Liens rapides */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
            <li>
              <Link to="/listings">Listings</Link>
            </li>
            <li>
              <Link to="/blog-news">Blog News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Liens légaux */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to="/apartment">Apartment</Link>
            </li>
            <li>
              <Link to="/my-house">My House</Link>
            </li>
            <li>
              <Link to="/interiors">Interiors</Link>
            </li>
            <li>
              <Link to="/square-area">Square Area</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <a
                href="https://maps.google.com/?q=Akouda,Sousse,Tunisia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our location on Google Maps"
              >
                Akouda, Sousse, Tunisia
              </a>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <a href="tel:+21612345678" aria-label="Phone number">
                Téléphone: +216 12 345 678
              </a>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <a
                href="mailto:contact@agenceimmobilier.com"
                aria-label="Email us"
              >
                Email: contact@agenceimmobilier.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Homz. All rights reserved</p>
        <div>
          <Link to="/terms-and-conditions">Terms & Conditions</Link> |{" "}
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
