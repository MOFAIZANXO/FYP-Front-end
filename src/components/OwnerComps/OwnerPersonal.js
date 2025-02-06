import React, { useState } from 'react';
import '../../stylesheets/Owner/OwnerPersonal.css'; // Optional, for styling
const OwnerPersonal = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
  });
  const [editMode, setEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="section">
      <h2>Personal Details</h2>
      <div className="personal-info">
        {/* Profile Image Upload */}
        <div className="profile-pic-upload">
          <label htmlFor="profile-upload">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-pic" />
            ) : (
              <span>Upload New Photo</span>
            )}
          </label>
          <input 
            id="profile-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </div>

        {/* Personal Details Fields */}
        <div className="input-group">
          <label>Full Name</label>
          {editMode ? (
            <input 
              type="text"
              value={personalDetails.name}
              onChange={(e) => setPersonalDetails({ ...personalDetails, name: e.target.value })}
            />
          ) : (
            <div className="detail-value">{personalDetails.name}</div>
          )}
        </div>

        <div className="input-group">
          <label>Email Address</label>
          {editMode ? (
            <input 
              type="email"
              value={personalDetails.email}
              onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })}
            />
          ) : (
            <div className="detail-value">{personalDetails.email}</div>
          )}
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          {editMode ? (
            <input 
              type="tel"
              value={personalDetails.phone}
              onChange={(e) => setPersonalDetails({ ...personalDetails, phone: e.target.value })}
            />
          ) : (
            <div className="detail-value">{personalDetails.phone}</div>
          )}
        </div>

        {/* Edit/Save/Cancel Buttons */}
        <div className="edit-buttons">
          {editMode ? (
            <>
              <button className="cancel-btn" onClick={() => setEditMode(false)}>
                Cancel
              </button>
              <button className="save-btn">Save Changes</button>
            </>
          ) : (
            <button className="edit-btn" onClick={() => setEditMode(true)}>
              Edit Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnerPersonal;
