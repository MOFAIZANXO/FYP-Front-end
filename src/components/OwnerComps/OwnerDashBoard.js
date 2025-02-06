import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import '../../stylesheets/Owner/OwnerDashBoard.css'; // Optional, for styling

const OwnerDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  
  const revenueData = [
    { month: 'Jan', revenue: 65 },
    { month: 'Feb', revenue: 78 },
    { month: 'Mar', revenue: 90 },
    { month: 'Apr', revenue: 85 },
    { month: 'May', revenue: 72 },
  ];

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Profile Overview</h1>
        <div className="header-buttons">
          <button className="logout-btn">Logout</button>
        </div>
      </div>
      
      <div className="property-stats">
        <div className="stat-card">
          <h3>Property Statistics</h3>
          <div className="stat-items">
            <div className="stat-item rented">
              <span>3</span> {/* Dynamic values can be added based on data */}
              <p>Rented Properties</p>
            </div>
            <div className="stat-item pending">
              <span>1</span>
              <p>Pending Properties</p>
            </div>
          </div>
        </div>
      </div>

      <div className="revenue-chart">
        <h2>Monthly Revenue</h2>
        <LineChart width={600} height={300} data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#db3434" strokeWidth={2} dot={{ fill: '#db3434' }} />
        </LineChart>
      </div>
    </div>
  );
};

export default OwnerDashboard;
