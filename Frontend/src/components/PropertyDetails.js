// /src/components/PropertyDetails.jsx

import React from 'react';
import './PropertyDetails.css';

function PropertyDetails({ property, agent }) {
  return (
    <div className="property-details-container">
      <div className="property-images">
        {property.images.map((img, index) => (
          <img key={index} src={img} alt={`Property ${index + 1}`} />
        ))}
      </div>

      <div className="property-info">
        <h2>{property.title}</h2>
        <p className="address">{property.address}</p>
        <p className="price">${property.price.toLocaleString()}</p>
        <p className="description">{property.description}</p>

        <ul className="features-list">
          {property.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="agent-info">
        <img src={agent.photo} alt={agent.name} className="agent-photo" />
        <h3>{agent.name}</h3>
        <p>{agent.role}</p>
        <p>📞 {agent.phone}</p>
        <p>📧 {agent.email}</p>
      </div>
    </div>
  );
}

export default PropertyDetails;
