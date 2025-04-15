import React, { useState } from 'react'; // Ajout de useState ici
import './HouseForSaleOrRent.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropertyByLocation6 from "./images/PropertyByLocation6.jpg";
import PropertyByLocation7 from "./images/PropertyByLocation7.jpg";
import PropertyByLocation8 from "./images/PropertyByLocation8.jpg";
import PropertyByLocation1 from "./images/PropertyByLocation1.jpg";
import PropertyByLocation2 from "./images/PropertyByLocation2.jpg";
import PropertyByLocation3 from "./images/PropertyByLocation3.jpg";
import PropertyByLocation9 from "./images/PropertyByLocation9.jpg";
import PropertyByLocation4 from "./images/PropertyByLocation4.jpg";
import PropertyByLocation5 from "./images/PropertyByLocation5.jpg";
import PropertyByLocation10 from "./images/PropertyByLocation10.jpg";



function HouseForSaleOrRent() {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();

  const handleRentClick = () => {
    navigate('/details');
  };

  return (
    <>
      {/* Search Container */}
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search for property" />
          <button>Search</button>
        </div>
        <div className="selectors">
          <div className="selector">
            <span>Location</span>
            <select>
              <option value="">All</option>
              <option value="location1">Ariana</option>
              <option value="location2">Béja</option>
              <option value="location3">Ben Arous</option>
              <option value="location4">Bizerte</option>
              <option value="location5">Gabès</option>
              <option value="location6">Gafsa</option>
              <option value="location7">Jendouba</option>
              <option value="location8">Kairouan</option>
              <option value="location9">Kasserine</option>
              <option value="location10">Kebili</option>
              <option value="location11">Kef</option>
              <option value="location12">Mahdia</option>
              <option value="location13">Manouba</option>
              <option value="location14">Médenine</option>
              <option value="location15">Monastir</option>
              <option value="location16">Nabeul</option>
              <option value="location17">Sfax</option>
              <option value="location18">Sidi Bouzid</option>
              <option value="location19">Siliana</option>
              <option value="location20">Sousse</option>
              <option value="location21">Tataouine</option>
              <option value="location22">Tozeur</option>
              <option value="location23">Tunis</option>
              <option value="location24">Zaghouan</option>
            </select>
          </div>
          <div className="selector">
            <span>Property</span>
            <select>
              <option value="">All</option>
              <option value="property1">For Rent</option>
              <option value="property2">For Sale</option>
            </select>
          </div>
          <div className="selector">
            <span>Type</span>
            <select>
              <option value="">Type</option>
              <option value="type1">Commercial</option>
              <option value="type2">Office</option>
              <option value="type3">Shop</option>
              <option value="type4">Residential</option>
              <option value="type5">Apartment</option>
            </select>
          </div>
        </div>
      </div>

      {/* Features and Properties Section */}
      <div>
        {/* Section Our Features Properties */}
        <div className="features-container">
          <h2 className="features-title">Our Features Properties</h2>
          <button className="browse-button">Browse All Properties &gt;&gt;</button>
        </div>

        {/* Section Featured Properties */}
        <div className="properties-grid">
        <div className="property-card">
          <img src={PropertyByLocation6} alt="PropertyByLocation" className="property-img"/>
          <div className="property-info">
            <h2 className="property-title">Villa With Panoramic View</h2>
            <p className="property-address">21 Blue Lagoon Road, Mahdia 5121</p>
            <div className="property-details">
              <span>📏 125 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="property-price">
              <p>💰 ≈ 850/ DT <span>/month</span></p>
              <button className="rent-button">❤️</button>
            </div>
          </div>
        </div>
        
      

        <div className="property-card">
          <img src={PropertyByLocation7} alt="PropertyByLocation" className="property-img"/>
          <div className="property-info">
            <h2 className="property-title">Sunset Haven Estate</h2>
            <p className="property-address">78 Coastal Road, Hammamet 8042</p>
            <div className="property-details">
              <span>📏 116,13 m²</span>
              <span>🛏 4 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="property-price">
              <p>💰 ≈ 7,50,000DT </p>
              <button className="rent-button">❤️</button>
            </div>
          </div>
        </div>

        <div className="property-card">
          <img src={PropertyByLocation8} alt="PropertyByLocation" className="property-img"/>
          <div className="property-info">
            <h2 className="property-title">Willow Brook Residence</h2>
            <p className="property-address">56 Rue de l’Amphithéâtre, El Djem 5160</p>
            <div className="property-details">
              <span>📏  185,81 m²</span>
              <span>🛏 4 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="property-price">
              <p>💰 ≈ 3 002,63/DT <span>/month</span></p>
              <button className="rent-button">❤️</button>
            </div>
          </div>
        </div>
         

        


        <div className="property-card">
          <img src={PropertyByLocation1} alt="PropertyByLocation" className="property-img"/>
          <div className="property-info">
            <h2 className="property-title">Cozy Cottage In Napa Valley</h2>
            <p className="property-address">14 Avenue Ulysse, Djerba Midoun 4116</p>
            <div className="property-details">
              <span>📏  125,42 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="property-price">
              <p>💰 ≈ 3 348/DT <span>/month</span></p>
              <button className="rent-button">Rent</button>
            </div>
          </div>
        </div>

        <div className="property-card">
          <img src={PropertyByLocation2} alt="PropertyByLocation" className="property-img"/>
          <div className="property-info">
            <h2 className="property-title">Luxurious Family Home</h2>
            <p className="property-address">95 Rue de Kairouan, Tozeur 2200</p>
            <div className="property-details">
              <span>📏 125,42 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="property-price">
              <p>💰 ≈ 9,57,000 DT </p>
              <button className="rent-button">Buy</button>
            </div>
          </div>
        </div>

        <div className="property-card">
          <img src={PropertyByLocation3} alt="PropertyByLocation" className="property-img"/>
          <div className="property-info">
            <h2 className="property-title">Modern Apartment In LA</h2>
            <p className="property-address">120 Avenue Ibn Khaldoun, Kairouan 3100</p>
            <div className="property-details">
              <span>📏 125,42 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="property-price">
              <p>💰 ≈  2 933,405/DT <span>/month</span></p>
              <div className="listing-tabs">
                <button className={activeTab === "For Rent" ? "active" : ""} onClick={() => setActiveTab("For Rent")}>For Rent</button>
                <button className={activeTab === "For Sale" ? "active" : ""} onClick={() => setActiveTab("For Sale")}>For Sale</button>
             </div>            
          </div>
          </div>
        </div>


        <div className="property-card">
          <img src={PropertyByLocation9} alt="PropertyByLocation" className="property-img"/>
          <div className="property-info">
            <h2 className="property-title">Stunning Modern Family Home</h2>
            <p className="property-address">30 Boulevard de l’Environnement, Nabeul 8000</p>
            <div className="property-details">
              <span>📏 125,42 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="property-price">
              <p>💰 ≈ 419 907/DT  <span>/month</span></p>
              <button className="rent-button">Rent</button>
            </div>
          </div>
        </div>
          

        <div className="property-card">
          <img src={PropertyByLocation4} alt="PropertyByLocation" className="property-img"/>
          <div className="property-info">
            <h2 className="property-title">Luxury Estate with Panoramic</h2>
            <p className="property-address">67 Rue de la Plage, Mahdia 5100</p>
            <div className="property-details">
              <span>📏 125,42 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="property-price">
              <p>💰 ≈ 419 907 DT  </p>
              <button className="rent-button">Buy</button>
            </div>
          </div>
        </div>
         
        <div className="property-card">
          <img src={PropertyByLocation5} alt="PropertyByLocation" className="property-img"/>
          <div className="property-info">
            <h2 className="property-title">Spacious Ranch-Style Home</h2>
            <p className="property-address">23 Avenue Farhat Hached, Monastir 5000</p>
            <div className="property-details">
              <span>📏 125,42 m²</span>
              <span>🛏 3 Beds</span>
              <span>🛁 2 Baths</span>
            </div>
            <div className="property-price">
              <p>💰 ≈ 419 907/DT  <span>/month</span></p>
              <button className="rent-button">Rent</button>
            </div>
          </div>
        </div>
      



        
      </div>
      </div>
      <div className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white px-6" style={{ backgroundImage: `url(${PropertyByLocation10})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative text-center max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold">
          We’re Here To Find Your <br /> New Home Project.
        </h1>

        <div className="mt-6 flex justify-start gap-4"> {/* Changed justify-center to justify-start */}
         <button onClick={() => navigate('/quote')} className="bg-white text-black px-5 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-gray-200">
           Get a Quote →
         </button>
         <button onClick={() => navigate('/properties')} className="border border-white px-5 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-black transition">
           Our Property →
         </button>
       </div>
      </div>
     </div>

      <div className="footer-container">
        <div className="footer-section">
          <h2 className="logo">HOMZ</h2>
          <p className="description">At Homz, we are committed to providing exceptional service and support.</p>
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
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/listings">Listings</a></li>
            <li><a href="/blog-news">Blog News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/apartment">Apartment</a></li>
            <li><a href="/my-house">My House</a></li>
            <li><a href="/interiors">Interiors</a></li>
            <li><a href="/square-area">Square Area</a></li>
            <li><a href="/terms-and-conditions">Terms & Condition</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt /> 
              <a href="https://maps.google.com/?q=Akouda,Sousse,Tunisia" target="_blank" rel="noopener noreferrer">
                Akouda, Sousse, Tunisia
              </a>
            </li>
            <li>
              <FaPhone /> 
              <a href="tel:+21612345678">Téléphone: +216 12 345 678</a>
            </li>
            <li>
              <FaEnvelope />  
              <a href="mailto:contact@agenceimmobilier.com">Email: contact@agenceimmobilier.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 Homz. All rights reserved</p>
        <button className="btn">Terms & Condition</button> | <button className="btn">Privacy</button>
      </div>

    </>
  );
}

export default HouseForSaleOrRent;