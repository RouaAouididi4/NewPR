import React, { useState, useRef } from "react";
import "./Post.css";
// import Post1 from "../pages/images/Post1.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importation du style Leaflet

function PostForSaleByOwnerListing() {
  // const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState([]);
  const [, setUnit] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [isMapVisible, setIsMapVisible] = useState(false);
  const priceRef = useRef(null);
  const mapRef = useRef(null);
  const streetRef = useRef(null);
  const unitRef = useRef(null);
  const cityRef = useRef(null);
  const zipRef = useRef(null);

  const [formData, setFormData] = useState({
    photo: [],
    price: "",
    streetAddress: "",
    city: "",
    zip: "",
    unit: "",
    location: { lat: 0, lng: 0 },
    hometype: "",
    title: "",
    beds: "",
    baths: {
      fullBaths: 0,
      threeQuarterBaths: 0,
      halfBaths: 0,
      quarterBaths: 0,
    },
    yearbuilt: "",
    status: "",
    description: "",
    phone: "",
    management: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Vérifie le contenu de formData

    try {
      const response = await fetch("http://localhost:5000/api/properties/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response); // Vérifie la réponse HTTP

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Réponse du serveur:", data);

      alert(data.message);
    } catch (error) {
      console.error("Erreur:", error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleContinue = () => {
    const { streetAddress, city, zip, unit } = formData;

    if (!streetAddress || !city) {
      alert("Please fill in all required fields: street address, city.");
      return;
    }

    console.log("Street Address:", streetAddress);
    console.log("Unit:", unit);
    console.log("City:", city);
    console.log("Zip:", zip);

    handleLocationUpdate();
    setIsMapVisible(true);

    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setPhotos([...photos, ...newPhotos]);

    setFormData((prevData) => ({
      ...prevData,
      photo: [...prevData.photo, ...newPhotos],
    }));
  };

  // Fonction pour mettre à jour l'emplacement
  const handleLocationUpdate = () => {
    const fullAddress = `${streetAddress}, ${city}, ${zip}`;
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        fullAddress
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setLocation({ lat: parseFloat(lat), lng: parseFloat(lon) });
          setIsMapVisible(true);
        } else {
          alert("Location Not Found");
        }
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
        alert(
          "An error occurred while fetching the location. Please try again."
        );
      });
  };
  const handleYesClick = () => {
    if (priceRef.current) {
      priceRef.current.scrollIntoView({ behavior: "smooth" }); // Défilement jusqu'à la zone du prix
      setTimeout(() => {
        priceRef.current.focus(); // Positionne le curseur dans l'input après le scroll
      }, 500); // Petit délai pour garantir que l'élément est bien visible avant de le focus
    }
  };

  const handleResetForm = () => {
    setStreetAddress("");
    setCity("");
    setUnit("");
    setZip("");
    setIsMapVisible(false);

    setTimeout(() => {
      if (streetRef.current) {
        streetRef.current.scrollIntoView({ behavior: "smooth" });
        streetRef.current.focus(); // Mettre le curseur dans le champ "Street Address"
      }
    }, 300);
  };

  const handleDeletePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleReorderPhotos = (startIndex, endIndex) => {
    const updatedPhotos = [...photos];
    const [movedPhoto] = updatedPhotos.splice(startIndex, 1);
    updatedPhotos.splice(endIndex, 0, movedPhoto);
    setPhotos(updatedPhotos);
  };
  return (
    <div className="Post">
      <div className="background-text">
        <div className="for-sale-frame">
          <h1>For Sale By Owner</h1>
        </div>
        <hr className="line" />
        <div className="input-container">
          <div className="input-row">
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={handleInputChange}
              ref={streetRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  unitRef.current.focus(); // Déplacer vers "Unit"
                }
              }}
              required
            />
            <input
              type="text"
              name="unit"
              placeholder="Unit # (Optional)"
              value={formData.unit}
              onChange={handleInputChange}
              ref={unitRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  cityRef.current.focus(); // Déplacer vers "City"
                }
              }}
            />
          </div>
          <div className="input-row">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city || ""}
              onChange={handleInputChange}
              ref={cityRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  zipRef.current.focus(); // Déplacer vers "Zip"
                }
              }}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip # (Optional)"
              value={formData.zip || ""}
              onChange={handleInputChange}
              ref={zipRef}
            />
          </div>
          <div className="continue-button-container">
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>

      {/* Carte */}
      {isMapVisible && (
        <div
          ref={mapRef}
          className="map-section"
          style={{ height: "400px", width: "100%" }}
        >
          <MapContainer
            center={location}
            zoom={13}
            // style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              subdomains={["a", "b", "c"]}
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              eventHandlers={{
                tileerror: (e) => {
                  console.warn("Tile load error:", e);
                },
              }}
            />
            <Marker position={location}>
              <Popup>
                {streetAddress && `${streetAddress}, `}
                {city && `${city}, `}
                {zip && zip}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
      {/* Section de vérification de l'emplacement */}
      <div className="location-check">
        <p className="location-question">
          Is this an accurate location of your home?
        </p>
        <div className="button-group">
          <button
            className="yes-button"
            aria-label="Yes, it's the correct location"
            onClick={handleYesClick}
          >
            Yes, it's the correct location
          </button>
          <button
            className="no-button"
            aria-label="No, let me change it"
            onClick={handleResetForm}
          >
            No, let me change it
          </button>
        </div>
      </div>

      {/* Section principale */}
      <div className="container">
        <div className="listing-box">
          <h2>For Sale By Owner Listing</h2>
          <p>
            Post once and your home will be listed on Homz, reaching buyers on
            the largest real estate network on the Web. Plus, home shoppers
            receive emails about new homes on the market – including yours.
          </p>
        </div>

        {/* Section du prix */}
        <div className="price-box">
          <span className="price-label">Set Your Price :</span>
          <div className="price-input-box">
            <input
              type="text" // Utilisation de "text" pour éviter les flèches
              className="price-input"
              name="price"
              placeholder="0"
              value={formData.price}
              ref={priceRef}
              onChange={handleInputChange}
            />
            <span className="price-currency">DT</span>
          </div>
        </div>
        {/* Section des photos */}
        <div className="photos-section">
          <h2>Photos</h2>
          <p>
            Drag and drop to reorder. Click on a photo to add a caption or
            delete a photo.
          </p>
          <div className="photo-upload-area">
            <p>drag and drop photos here to upload</p>

            <label className="blob-btn">
              Add New Photo
              <input type="file" multiple onChange={handlePhotoUpload} hidden />
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </label>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>

          <div className="photos-grid">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="photo-item"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("index", index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  const startIndex = e.dataTransfer.getData("index");
                  handleReorderPhotos(parseInt(startIndex), index);
                }}
              >
                <img src={photo} alt={`Uploaded ${index}`} />
                <button
                  className="delete-button"
                  onClick={() => handleDeletePhoto(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        <center>
          <div className="listing-form">
            <div className="facts">Home Facts</div>

            <div className="form-section">
              <label>Home type</label>
              <select>
                <option value="">Select home type</option>
                <option value="single family">Single family</option>
                <option value="condo">Condo</option>
                <option value="multi family">Multi family</option>
                <option value="townhouse">Townhouse</option>
                <option value="apartment">Apartment</option>
                <option value="mobile">Mobile</option>
                <option value="manufactured">Manufactured</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="type">Type :</label>
              <select id="type" name="type">
                <option value="">Select type</option>

                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
                <option value="manage">Manage</option>
              </select>
            </div>

            <div className="form-section">
              <label>Title</label>
              <input type="text" placeholder="Enter A Title" />
            </div>

            <div className="form-section">
              <label>Beds</label>
              <input type="number" placeholder="0" />
            </div>

            <div className="form-row">
              <div className="form-section">
                <label>Full baths</label>
                <input type="number" placeholder="0" />
              </div>
              <div className="form-section">
                <label>3/4 baths</label>
                <input type="number" placeholder="0" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label>1/2 baths</label>
                <input type="number" placeholder="0" />
              </div>
              <div className="form-section">
                <label>1/4 baths</label>
                <input type="number" placeholder="0" />
              </div>
            </div>

            <div className="form-section">
              <label>Year built</label>
              <input
                type="number"
                placeholder="Enter year"
                min="1800"
                max={new Date().getFullYear()}
                pattern="\d{4}"
              />
            </div>
            <div className="form-section">
              <label htmlFor="status">Status :</label>
              <select id="status" name="status">
                <option value="">On hold</option>
                <option value="Online">Online</option>
                <option value="In management">In management</option>
              </select>
            </div>

            <div className="form-section">
              <label>Describe your home</label>
              <textarea placeholder="Tell us about your home"></textarea>
            </div>

            <div className="form-section">
              <label htmlFor="Management">Management :</label>
              <select id="management" name="Management">
                <option value="Unmanagemed">Unmanaged</option>

                <option value="Managemed">Managed</option>
              </select>
            </div>
            <div className="form-section">
              <h3>Contact information</h3>
              <input type="tel" placeholder="(216) 00 000 000" />
              <p className="info-text">
                Potential buyers will contact you through the email address you
                use to register on Homz. You must also add your phone number to
                the listing here.
              </p>
            </div>
            <div className="agreement-container">
              <div className="agreement-content">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="agreement-checkbox"
                    // checked={isChecked}
                    // onChange={() => setIsChecked(!isChecked)}
                  />
                  <label htmlFor="agreement-checkbox">
                    I agree to acknowledge and understand the following:
                  </label>
                </div>
                <ol className="agreement-list">
                  <li>
                    I am (or I have authority to act on behalf of) the owner of
                    this home;
                  </li>
                  <li>
                    I will not provide incorrect information or state a
                    discriminatory preference;
                  </li>
                  <li>
                    I will be posting my property 'for sale by owner' on
                    homz.com and other affiliated websites and that I will
                    solely be responsible for maintaining and updating the
                    posting and responding to and negotiating potential offers
                    to purchase the property;
                  </li>
                  <li>
                    Homz, Inc. ("Homz") is a licensed real estate brokerage,
                    that I am not entering into any agency or brokerage
                    relationship with Homz as part of this posting and that Homz
                    is not providing me with any real estate brokerage services
                    as part of this posting;
                  </li>
                  <li>
                    I will comply with the Homz Terms of Use and Listing Quality
                    Policy.
                  </li>
                </ol>
                <p className="marketing-consent">
                  I also agree that by clicking below, Homz Group and its
                  affiliates, and real estate professionals may call or text me
                  for marketing purposes, which may involve use of automated
                  means and prerecorded/artificial voices. Consent is not a
                  condition of buying any property, goods or services.
                  Message/data rates may apply.
                </p>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="post-button"
              >
                Post For Sale By Owner
              </button>
            </div>
          </div>
        </center>
      </div>
      <div className="full-width-image-section">
        <img
          src="./images/p2.jpg"
          alt="Real estate banner"
          className="full-width-image"
        />
      </div>

      {/* Pied de page */}
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
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/properties">Properties</a>
            </li>
            <li>
              <a href="/listings">Listings</a>
            </li>
            <li>
              <a href="/blog-news">Blog News</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="/apartment">Apartment</a>
            </li>
            <li>
              <a href="/my-house">My House</a>
            </li>
            <li>
              <a href="/interiors">Interiors</a>
            </li>
            <li>
              <a href="/square-area">Square Area</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms & Condition</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt />
              <a
                href="https://maps.google.com/?q=Akouda,Sousse,Tunisia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Akouda, Sousse, Tunisia
              </a>
            </li>
            <li>
              <FaPhone />
              <a href="tel:+21612345678">Téléphone: +216 12 345 678</a>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:contact@agenceimmobilier.com">
                Email: contact@agenceimmobilier.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="footer-bottom">
        <p>© Copyright 2025 Homz. All rights reserved</p>
        <button className="btn">Terms & Condition</button> |{" "}
        <button className="btn">Privacy</button>
      </div>
    </div>
  );
}

export default PostForSaleByOwnerListing;
