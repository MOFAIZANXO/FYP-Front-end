import React, { useState } from 'react';
import '../../stylesheets/Owner/OwnerProperties.css'; // Optional, for styling
const OwnerProperties = () => {
  const [activeTab, setActiveTab] = useState('rented');
  const properties = {
    rented: [
      {
        name: 'Bahria Departments',
        status: 'Rented',
        rent: '60k/month',
        address: 'Islamabad, Main Bulliward Bahria Town Block A',
        area: '1200 sqft',
      },
      {
        name: 'Rayan Resort',
        status: 'Rented',
        rent: '90k/month',
        address: 'Islamabad, Near Faisal Mosque',
        area: '2500 sqft',
      },
    ],
    pending: [
      {
        name: 'Kashmir Lodges',
        status: 'Pending',
        rent: '50k/month',
        address: 'Islamabad, Main Bulliward Bahria Town Block A',
        area: '1800 sqft',
      },
    ],
  };

  return (
    <div>
      <h2>Property Management</h2>
      <div className="property-tabs">
        <button
          className={`tab-btn ${activeTab === 'rented' ? 'active' : ''}`}
          onClick={() => setActiveTab('rented')}
        >
          Rented ({properties.rented.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          Pending ({properties.pending.length})
        </button>
      </div>

      <div className="properties-list">
        {properties[activeTab].map((property, index) => (
          <div className="property-card" key={index}>
            <h3>{property.name}</h3>
            <div className="property-details">
              <span className={`status ${property.status.toLowerCase()}`}>
                {property.status}
              </span>
              <div className="rent-rate">{property.rent}</div>
              <div className="address">{property.address}</div>
              <div className="property-area">Area: {property.area}</div>
            </div>
            <div className="property-actions">
              <button className="list-btn">View Details</button>
              {property.status === 'Pending' && (
                <button className="pending-btn">Mark as Rented</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerProperties;
