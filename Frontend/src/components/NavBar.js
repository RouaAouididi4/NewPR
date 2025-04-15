import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImage from "../pages/images/8.png"; // Chemin relatif correct
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <a href="mailto:contact@southernplate.com" className="email">
            CasaTech@gmail.com
          </a>
          <div className="phone">
            <div className="phone-icon"></div>
            <a href="tel:+456775993000223">+216 ** *** ***</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link to="/" className="logo">
            <img
              src={logoImage}
              alt="CASATECH real estate agency"
              className="logo-image"
            />
          </Link>

          {/* Menu Desktop */}
          <div className={`menu ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <a href="/" className="menu-item">
              HOME
            </a>

            <div className="dropdown">
              <button className="menu-item">
                PAGES <span className="arrow">▼</span>
              </button>
              <div className="dropdown-content">
                <a href="/about">About</a>
                <a href="/listings">Listings</a>
                <a href="/contact">Contact</a>
              </div>
            </div>

            <a href="/about" className="menu-item">
              ABOUT US
            </a>
            <a href="/properties" className="menu-item">
              PROPERTIES
            </a>
            <a href="/blog" className="menu-item">
              BLOG
            </a>

            <div className="dropdown">
              <button className="menu-item">
                PROPERTIES<span className="arrow">▼</span>
              </button>
              <div className="dropdown-content">
                <Link to="/Property-Listing">PROPERTIES-LISTING</Link>
                <Link to="/Property-By-Location">PROPERTIES-BY-LOCATION</Link>
                <Link to="/house-for-sale-or-rent">
                  HOUSE-FOR-SALE-OR-RENT
                </Link>{" "}
              </div>
            </div>

            <a href="/contact" className="menu-item">
              CONTACT
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </nav>

      {/* Styles */}
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .top-bar {
          background-color: #000;
          color: white;
          padding: 8px 0;
          font-size: 14px;
        }

        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .email,
        .phone a {
          color: white;
          text-decoration: none;
        }

        .email:hover,
        .phone a:hover {
          color: #ccc;
        }

        .phone {
          display: flex;
          align-items: center;
        }
        .logo-image {
          height: 100px; /* Taille très réduite - ajustez selon vos besoins */
          width: auto; /* Maintient les proportions */
          max-width: 100px; /* Largeur maximale de sécurité */
          object-fit: contain; /* Garantit que l'image reste bien proportionnée */
          display: block; /* Évite les espaces indésirables */
        }

        /* Pour un positionnement optimal dans la navbar */
        .logo {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .phone-icon {
          width: 24px;
          height: 24px;
          background-color: white;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .phone-icon::before {
          content: "📞";
          font-size: 12px;
        }

        .navbar {
          padding: 15px 0;
          background-color: transparent;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background-color: #000;
        }

        .logo {
          color: white;
          font-size: 28px;
          font-weight: bold;
          text-decoration: none;
          text-transform: uppercase;
        }

        .menu {
          display: flex;
          gap: 25px;
        }

        .menu-item {
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu-item:hover {
          color: #ccc;
        }

        .arrow {
          margin-left: 5px;
          font-size: 10px;
        }

        /* Dropdown Menu */
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #000;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          padding: 10px 0;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .dropdown-content a {
          color: white;
          padding: 8px 16px;
          text-decoration: none;
          display: block;
          text-transform: none;
          font-weight: normal;
        }

        .dropdown-content a:hover {
          background-color: #333;
        }

        /* Mega Menu */
        .mega-menu {
          position: relative;
        }

        .mega-menu-content {
          display: none;
          position: absolute;
          right: 0;
          background-color: #000;
          width: 800px;
          padding: 20px;
          z-index: 1;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .mega-menu:hover .mega-menu-content {
          display: grid;
        }

        .mega-column {
          display: flex;
          flex-direction: column;
        }

        .mega-column h3 {
          color: white;
          margin-bottom: 15px;
          font-size: 16px;
        }

        .mega-column a {
          color: #ccc;
          padding: 5px 0;
          text-decoration: none;
        }

        .mega-column a:hover {
          color: white;
        }

        /* Mobile Menu */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #000;
            padding: 20px;
            gap: 15px;
          }

          .menu.mobile-open {
            display: flex;
          }

          .mobile-menu-btn {
            display: block;
          }

          .dropdown-content,
          .mega-menu-content {
            position: static;
            width: 100%;
            display: none;
          }

          .dropdown:hover .dropdown-content,
          .mega-menu:hover .mega-menu-content {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
