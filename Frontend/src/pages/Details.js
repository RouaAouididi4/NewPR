// /src/pages/Details.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../data/properties';
import PropertyDetails from '../components/PropertyDetails';

function Details() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === id);

  if (!property) {
    return <div className="text-center mt-10 text-xl">Property Not Found</div>;
  }

  return (
    <div className="p-4">
      <PropertyDetails property={property} agent={property.agent} />
    </div>
  );
}

export default Details;
