import React from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Services() {
  return (
    <div className="services-page">
      {/* Header */}
      <header className="bg-light text-dark py-4 shadow sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h1 className="m-0 fs-3">Our services</h1>
          </div>
          <nav className="d-none d-md-flex">

          </nav>
        </div>
      </header>

      <div className="container py-5">
        <h1 className="text-center mb-4 services-title">Our Services</h1>
        <h3 className="text-center bg-light text-muted service-details mb-5">
          At Real Estate Agency, we provide professional and reliable real estate
          services to help you buy, sell, rent, or manage properties with ease.
        </h3>

        <div className="service-images d-flex flex-column flex-md-row justify-content-center align-items-center mb-5">
          <div className="service-image service-image-1 me-md-4 mb-4 mb-md-0"></div>
          <div className="service-image-container text-center">
            <div className="service-image service-image-2 mb-3"></div>
            <h2 className="service-caption">
              We’ll make it easy for you — Tap 'Login'
            </h2>
          </div>
        </div>

        <h3 className="service-details mb-5 bg-light ">
          It's well known that readers can be distracted by a page’s layout rather
          than its content. Lorem Ipsum is commonly used because it mimics natural
          text distribution, making it look like readable English. Today, many
          desktop publishing tools and web editors use Lorem Ipsum as a default
          placeholder, and a quick search will reveal its widespread presence
          across websites.
        </h3>

        <h1 className="text-center testimonials-title mb-4">Why Choose Us</h1>
        <div className="testimonial-image mb-5"></div>

        {/* Services List */}
        <div className="service-list row">
          <div className="box col-md-6 mb-4 ">
            <h3 className="service-heading bg-dark col-md-9 text-light">Property Sales & Rentals</h3>
            <p className="service-text">
              We offer a wide range of properties for sale and rent, ensuring you
              find the perfect home or investment opportunity.
            </p>
          </div>
          <div className="box col-md-6 mb-4">
          <h3 className="service-heading bg-dark col-md-9 text-light">Property Management</h3>
            <p className="service-text">
              From tenant management to maintenance, we handle everything to keep
              your property in top condition.
            </p>
          </div>
          <div className=" box col-md-6 mb-4">
          <h3 className="service-heading bg-dark col-md-9 text-light">Market Analysis & Valuation</h3>
            <p className="service-text">
              We assess property values and market trends to ensure you get the best
              deal.
            </p>
          </div>
          <div className=" box col-md-6 mb-4">
          <h3 className="service-heading bg-dark col-md-9 text-light">Real Estate Consulting</h3>
            <p className="service-text">
              Our experts provide valuable insights to help you make informed real
              estate decisions.
            </p>
          </div>
        </div>

    <div className="bg-brown text-white p-5 my-5 rounded shadow">
      <h3 className="newsletter-title">Stay Updated With Our Latest News</h3>
      <p className="newsletter-subtitle">
        Subscribe to get the latest updates on real estate trends, tips, and new property listings.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <div className="d-flex">
            <input
              type="email"
              className="form-control newsletter-input"
              placeholder="Enter your email"
            />
            <button className="btn btn-light newsletter-btn ms-2">Subscribe</button>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="mt-5">
        <h4 className="news-title">Recent News</h4>
        <ul className="list-unstyled">
          <li>
            <a href="/news/1" className="text-white">
              <strong>New Luxury Apartments Launched in Downtown</strong>
            </a>
            <p className="text-muted">Get an exclusive look at our newest luxury apartments in the heart of the city.</p>
          </li>
          <li>
            <a href="/news/2" className="text-white">
              <strong>How the Real Estate Market is Evolving in 2025</strong>
            </a>
            <p className="text-muted">Stay ahead of the market trends with our latest insights and expert opinions.</p>
          </li>
          <li>
            <a href="/news/3" className="text-white">
              <strong>10 Tips for First-Time Homebuyers</strong>
            </a>
            <p className="text-muted">Are you a first-time homebuyer? Check out our top 10 tips for a smooth buying experience.</p>
          </li>
        </ul>
      </div>
    </div>

        {/* Extra Sections */}
      </div>
    </div>
    
  );
}

export default Services;
