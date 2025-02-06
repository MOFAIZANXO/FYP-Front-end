import React, { useState } from 'react';
import OwnerDashboard from '../../components/OwnerComps/OwnerDashBoard';
import OwnerPersonal from '../../components/OwnerComps/OwnerPersonal';
import OwnerAgent from '../../components/OwnerComps/OwnerAgent';
import OwnerProperties from '../../components/OwnerComps/OwnerProperties';
import logo from '../../assets/images/logo.png';
import '../../stylesheets/Owner/OwnerMain.css';

const OwnerProfile = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        
        <div className={`menu-item ${activeSection === 'profile' ? 'active' : ''}`} onClick={() => setActiveSection('profile')}>
          Dashboard
        </div>
        <div className={`menu-item ${activeSection === 'agents' ? 'active' : ''}`} onClick={() => setActiveSection('agents')}>
          Agent Network
        </div>
        <div className={`menu-item ${activeSection === 'personal' ? 'active' : ''}`} onClick={() => setActiveSection('personal')}>
          Personal Info
        </div>
        <div className={`menu-item ${activeSection === 'properties' ? 'active' : ''}`} onClick={() => setActiveSection('properties')}>
          My Properties
        </div>
      </div>

      <div className="main-content">
        {activeSection === 'profile' && <OwnerDashboard />}
        {activeSection === 'agents' && <OwnerAgent />}
        {activeSection === 'personal' && <OwnerPersonal />}
        {activeSection === 'properties' && <OwnerProperties />}
      </div>
    </div>
  );
};

export default OwnerProfile;



