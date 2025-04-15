import React, { useState, useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAdditionalFilters, setShowAdditionalFilters] = useState(false);
  const [filters, setFilters] = useState({
    keyword: "",
    city: "",
    category: "",
    offerType: "",
    bedrooms: "",
    bathrooms: "",
    minArea: "",
    maxArea: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  const images = [
    "img/bg-img/hero1.jpg",
    "img/bg-img/hero2.jpg",
    "img/bg-img/hero3.jpg",
  ];
  const goToPrevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-4 collapse navbar-collapse justify-content-end">
        <a className="navbar-brand" href="/">
          HOMZ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-link-white" href="/about-us">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-white" href="/properties">
              Properties
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-white" href="/listings">
              Listings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-white" href="/blog-news">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-white" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero-slides owl-carousel">
          <div
            className="single-hero-slide"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100%",
              transition: "background-image 0.5s ease-in-out", // Ajoutez cette ligne

              position: "relative",
            }}
          >
            {/* Overlay sombre */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(48, 38, 2, 0.21)",
                zIndex: 0,
              }}
            ></div>
            <div
              className="hero-content"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                width: "100%",
                textAlign: "center",
                color: "white",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                {/* Flèche gauche */}
                <span
                  onClick={goToPrevSlide}
                  style={{
                    fontSize: "40px",
                    cursor: "pointer",
                    opacity: 0.8,
                    transition: "all 0.3s",
                    userSelect: "none",
                    color: "#947054",
                  }}
                >
                  ‹
                </span>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* Titre principal */}
                  <h2
                    style={{
                      fontSize: "clamp(32px, 6vw, 62px)",
                      fontWeight: "200",
                      letterSpacing: "3px",
                      lineHeight: "1.2",
                      margin: "0 0 10px 0" /* Ajout de marge en bas */,
                      animation: "fadeIn 1.5s ease-out both",
                    }}
                  >
                    FIND YOUR DREAM HOUSE
                  </h2>

                  <div className="search-home-container">
                    <h2 className="search-home-title">SEARCH FOR YOUR HOME</h2>
                  </div>
                </div>

                {/* Flèche droite */}
                <span
                  onClick={goToNextSlide}
                  style={{
                    fontSize: "40px",
                    cursor: "pointer",
                    opacity: 0.8,
                    transition: "all 0.3s",
                    userSelect: "none",
                    color: "#947054",
                  }}
                >
                  ›
                </span>
              </div>
            </div>

            {/* Animation minimaliste */}
            <style jsx global>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            `}</style>
          </div>
        </div>
      </section>
      ///////////////////////////////////////////////////////////////////////////
      <div className="filter-section">
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">Keyword</label>
            <input
              type="text"
              className="filter-input"
              placeholder="Enter keywords..."
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">All Cities</label>
            <select className="filter-select">
              <option>Select city</option>
              <option>New York</option>
              <option>Los Angeles</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">All Categories</label>
            <select className="filter-select">
              <option>All categories</option>
              <option>Apartments</option>
              <option>Houses</option>
            </select>
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">All Offers</label>
            <select className="filter-select">
              <option>All offers</option>
              <option>For rent</option>
              <option>For sale</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Bedrooms</label>
            <select className="filter-select">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Bathrooms</label>
            <select className="filter-select">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">Surface area</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="number"
                className="filter-input"
                placeholder="Min"
                style={{ flex: 1 }}
              />
              <span style={{ lineHeight: "35px" }}>-</span>
              <input
                type="number"
                className="filter-input"
                placeholder="Max"
                style={{ flex: 1 }}
              />
              <span style={{ lineHeight: "35px", marginLeft: "5px" }}>
                sq. ft
              </span>
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Price range</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="number"
                className="filter-input"
                placeholder="Min"
                style={{ flex: 1 }}
              />
              <span style={{ lineHeight: "35px" }}>-</span>
              <input
                type="number"
                className="filter-input"
                placeholder="Max"
                style={{ flex: 1 }}
              />
              <span style={{ lineHeight: "35px", marginLeft: "5px" }}>mil</span>
            </div>
          </div>
        </div>
        {showAdditionalFilters && (
          <>
            <div className="filter-row">
              <div className="filter-group">
                <label className="filter-label">All Types</label>
                <select className="filter-select">
                  <option>All types</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">All Categories</label>
                <select className="filter-select">
                  <option>All categories</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">All Actions</label>
                <select className="filter-select">
                  <option>All actions</option>
                  <option>For Rent</option>
                  <option>For Sale</option>
                </select>
              </div>
            </div>

            <div className="filter-row">
              <div className="filter-group">
                <label className="filter-label">All City</label>
                <select className="filter-select">
                  <option>All cities</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">All Actions</label>
                <select className="filter-select">
                  <option>All actions</option>
                  <option>For Rent</option>
                  <option>For Sale</option>
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">All City</label>
                <select className="filter-select">
                  <option>All cities</option>
                  <option>New York</option>
                  <option>Chicago</option>
                </select>
              </div>
            </div>
          </>
        )}
        {/* Bouton MORE FILTERS */}
        <div className="filters-footer">
          <span
            className="more-filters"
            onClick={() => setShowAdditionalFilters(!showAdditionalFilters)}
          >
            {showAdditionalFilters ? "- LESS FILTERS" : "+ MORE FILTERS"}
          </span>
          <button className="search-btn">SEARCH</button>
        </div>
      </div>
      {/* Featured Properties Section */}
      <section className="featured-properties">
        <div className="section-header">
          <h2>FEATURED PROPERTIES</h2>
          <p></p>
        </div>

        <div className="properties-grid">
          {/* Property Card 1 */}
          <div className="property-card">
            <div
              className="property-image"
              style={{ backgroundImage: "url('img/properties/villa.jpg')" }}
            ></div>
            <div className="property-info">
              <span className="property-type">FOR SALE</span>
              <div className="property-price">1500.000DT</div>
              <h3 className="property-title">studio s3</h3>
              <p className="property-address">25 Rue carthage</p>
              <hr className="property-divider" />
              <p className="property-description"></p>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="property-card">
            <div
              className="property-image"
              style={{ backgroundImage: "url('img/properties/townhouse.jpg')" }}
            ></div>
            <div className="property-info">
              <span className="property-type">FOR RENT</span>
              <div className="property-price">2500.000DT</div>
              <h3 className="property-title">Appartement Luxueux</h3>
              <p className="property-address">kantaoui, sousse</p>
              <hr className="property-divider" />
              <p className="property-description"></p>
            </div>
          </div>

          {/* Property Card 3 - Dupliquez et modifiez pour plus de propriétés */}
          <div className="property-card">
            <div
              className="property-image"
              style={{
                backgroundImage: "url('img/properties/townhouse2.jpg')",
              }}
            ></div>
            <div className="property-info">
              <span className="property-type">FOR RENT</span>
              <div className="property-price">800,000DT</div>
              <h3 className="property-title">Studio Moderne</h3>
              <p className="property-address">Rue orange Mounastir</p>
              <hr className="property-divider" />
              <p className="property-description">
                Intraeae nae hibendum laxist: Suspendisse
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        className="bg-dark text-light sticky pt-5 pb-4"
        style={{ margin: 0 }}
      >
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 mb-4">
              <h2 className="text-white">HOMZ</h2>
              <p>
                At Homz, we are committed to providing exceptional service and
                support.
              </p>
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Enter Your Email"
                />
                <button className="btn btn-outline-light">Discover More</button>
              </div>
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

            {/* Column 2 */}
            <div className="col-md-3 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about-us" className="text-light">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/properties" className="text-light">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="/listings" className="text-light">
                    Listings
                  </a>
                </li>
                <li>
                  <a href="/blog-news" className="text-light">
                    Blog News
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-light">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-md-3 mb-4">
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/apartment" className="text-light">
                    Apartment
                  </a>
                </li>
                <li>
                  <a href="/my-house" className="text-light">
                    My House
                  </a>
                </li>
                <li>
                  <a href="/interiors" className="text-light">
                    Interiors
                  </a>
                </li>
                <li>
                  <a href="/square-area" className="text-light">
                    Square Area
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="text-light">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-md-3 mb-4">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <FaMapMarkerAlt className="me-2" />
                  <a
                    href="https://maps.google.com/?q=Akouda,Sousse,Tunisia"
                    className="text-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Akouda, Sousse, Tunisia
                  </a>
                </li>
                <li>
                  <FaPhone className="me-2" />
                  <a href="tel:+21612345678" className="text-light">
                    +216 12 345 678
                  </a>
                </li>
                <li>
                  <FaEnvelope className="me-2" />
                  <a
                    href="mailto:contact@agenceimmobilier.com"
                    className="text-light"
                  >
                    contact@agenceimmobilier.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
