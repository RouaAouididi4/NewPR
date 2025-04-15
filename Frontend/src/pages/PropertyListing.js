import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyListing.css";
import Listing1 from "./images/Listing1.jpg";
import Listing2 from "./images/Listing2.jpg";
import Listing3 from "./images/Listing3.jpg";
import Listing4 from "./images/Listing4.jpg";
import Listing5 from "./images/Listing5.jpg";
import Listing6 from "./images/Listing6.jpg";
import Listing7 from "./images/Listing7.jpg";
import Listing8 from "./images/Listing8.jpg";
import Listing9 from "./images/Listing9.jpg";
import Listing10 from "./images/Listing10.jpg";
import Listing11 from "./images/Listing11.jpg";
import Listing12 from "./images/Listing12.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function PropertyListing() {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({
    streetAddress: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    minSize: "",
    maxSize: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/properties");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProperties(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erreur lors de la récupération des propriétés :", error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearch = () => {
    const query = new URLSearchParams(searchCriteria).toString();
    fetch(`http://localhost:5000/api/properties/search?${query}`)

      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="property-listing-container">
      <h1>Our Property Listing</h1>

      <div className="listing-tabs">
        <button
          className={activeTab === "For Rent" ? "active" : ""}
          onClick={() => setActiveTab("For Rent")}
        >
          For Rent
        </button>
        <button
          className={activeTab === "For Buy" ? "active" : ""}
          onClick={() => {
            setActiveTab("For Buy");
            navigate("/PostListening");
          }}
        >
          For Buy
        </button>
      </div>

      <div className="search-filters">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Enter an Street Address, ZIP or Property ID"
            onChange={handleInputChange}
          />
          <input type="text" placeholder="Title" />
          <input
            type="text"
            placeholder="street Address"
            onChange={handleInputChange}
          />

          <select
            name="type"
            onChange={handleInputChange}
            value={searchCriteria.type}
          >
            <option>All types</option>
            <option>Residential</option>
            <option>Professional Real Estate</option>
          </select>

          <select name="bedrooms" onChange={handleInputChange}>
            <option>Any Bedrooms</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
          </select>
          <select name="bathromms" onChange={handleInputChange}>
            <option>Any Bathrooms</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
          </select>
          <input
            type="text"
            placeholder="Min Size"
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Max Size"
            onChange={handleInputChange}
          />

          <select name="minPrice" type="text" onChange={handleInputChange}>
            <option>Min Price</option>
            <option>600 DT</option>
            <option>700 DT</option>
            <option>800 DT</option>
            <option>900 DT</option>
            <option>1000 DT</option>
          </select>
          <select name="maxPrice" type="text" onChange={handleInputChange}>
            <option>Max Price</option>
            <option>1100 DT</option>
            <option>1200 DT</option>
            <option>1300 DT</option>
            <option>1400 DT</option>
            <option>15000 DT</option>
          </select>
        </div>
      </div>

      <div className="listing-tabs">
        <button className="active" onClick={handleSearch}>
          🔍Search Your Room
        </button>
      </div>
      <div className="property-list">
        {properties.map((property, index) => (
          <div
            key={property.id || index}
            className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border"
          >
            <img src={Listing1} alt="Listing" className="listing-img" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Sunset Haven Estate</h2>
              <p className="text-gray-600 text-sm">
                799 Loma Lodge, Quigleystad
              </p>
              <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
                <span>📏 125 m²</span>
                <span>🛏 3 Beds</span>
                <span>🛁 2 Baths</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-2xl font-bold">
                  💰 ≈ 2,689 TND{" "}
                  <span className="text-gray-600 text-base">/month</span>
                </p>
                <button className="text-gray-500 hover:text-gray-700">
                  ❤
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing2} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Villa With Panoramic View</h2>
            <p className="text-gray-600 text-sm">37254 Abby Lakes Suite 093</p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">💰 ≈ 7,50,000 DT</p>
              <button className="text-gray-500 hover:text-gray-700">❤</button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing3} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Sunset Haven Estate</h2>
            <p className="text-gray-600 text-sm">
              799 Loma Lodge, Quigley stad
            </p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">
                💰 ≈ 950 TND{" "}
                <span className="text-gray-600 text-base">/month</span>
              </p>
              <button className="text-gray-500 hover:text-gray-700">❤</button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing4} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Stunning Modern Family Home
            </h2>
            <p className="text-gray-600 text-sm">
              742 Evergreen Terrace, Apt 12B, Springfield
            </p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">
                💰 ≈850/DT{" "}
                <span className="text-gray-600 text-base">/month</span>
              </p>
              <button className="text-gray-500 hover:text-gray-700">
                Rent
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing5} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Luxury Estate with Panoramic
            </h2>
            <p className="text-gray-600 text-sm">
              5781 Horizon Ridge, Hillside Estates
            </p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">💰 ≈9,57,000 DT </p>
              <button className="text-gray-500 hover:text-gray-700">Buy</button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing6} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Spacious Ranch-Style Home</h2>
            <p className="text-gray-600 text-sm">4567 Meadow Lane, Greenwood</p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">
                💰 ≈950/DT{" "}
                <span className="text-gray-600 text-base">/month</span>
              </p>
              <button className="text-gray-500 hover:text-gray-700">
                Rent
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing7} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Luxury Estate with Panoramic
            </h2>
            <p className="text-gray-600 text-sm">
              5781 Horizon Ridge, Hillside Estates
            </p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">💰 ≈8,57,000 DT </p>
              <button className="text-gray-500 hover:text-gray-700">Buy</button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing8} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Stunning Modern Family Home
            </h2>
            <p className="text-gray-600 text-sm">
              742 Evergreen Terrace, Apt 12B, Springfield
            </p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">
                💰 ≈850/DT{" "}
                <span className="text-gray-600 text-base">/month</span>
              </p>
              <button className="text-gray-500 hover:text-gray-700">
                Rent
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing9} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Spacious Ranch-Style Home</h2>
            <p className="text-gray-600 text-sm">4567 Meadow Lane, Greenwood</p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">
                💰 ≈ 950/DT{" "}
                <span className="text-gray-600 text-base">/month</span>
              </p>
              <button className="text-gray-500 hover:text-gray-700">
                Rent
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing10} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Luxury Estate with Panoramic
            </h2>
            <p className="text-gray-600 text-sm">
              5781 Horizon Ridge, Hillside Estates
            </p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">
                💰 ≈ 850/DT{" "}
                <span className="text-gray-600 text-base">/month</span>
              </p>
              <button className="text-gray-500 hover:text-gray-700">
                Rent
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing11} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Stunning Modern Family Home
            </h2>
            <p className="text-gray-600 text-sm">
              742 Evergreen Terrace, Apt 12B, Springfield
            </p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">💰 ≈ 7,50,000 DT </p>
              <button className="text-gray-500 hover:text-gray-700">Buy</button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg border">
          <img src={Listing12} alt="Listing" className="listing-img" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Spacious Ranch-Style Home</h2>
            <p className="text-gray-600 text-sm">4567 Meadow Lane, Greenwood</p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">
                💰 ≈ 950/DT{" "}
                <span className="text-gray-600 text-base">/month</span>
              </p>
              <button className="text-gray-500 hover:text-gray-700">
                Rent
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero-container"
      >
        <div className="overlay"></div>

        <div className="content">
          <h1>"We're here to help you discover your dream home project."</h1>
          <div className="buttons">
            <button className="btn">Our Property</button>
            <button className="btn">Get a Quote</button>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h2 className="logo">HOMZ</h2>
          <p className="description">
            At Homz, we are committed to providing exceptional service and
            support.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Enter Your Email" />
            <button>Discover More</button>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Properties</li>
            <li>Listings</li>
            <li>Blog News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Apartment</li>
            <li>My House</li>
            <li>Interiors</li>
            <li>Square Area</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt /> Akouda , Sousse , Tunisia
            </li>
            <li>
              <FaPhone /> Téléphone : +216 12 345 678
            </li>
            <li>
              <FaEnvelope /> Email : contact@agenceimmobilier.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 Homz. All rights reserved</p>
        <button className="btn">Terms & Condition</button> |{" "}
        <button className="btn">Privacy</button>
      </div>
    </div>
  );
}

export default PropertyListing;
