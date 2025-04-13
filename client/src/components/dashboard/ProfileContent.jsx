import React from 'react';
import '../../styles/ProfileContent.css';

const ProfileContent = () => {
  // Sample user data - in a real app, this would come from user context or API
  const userData = {
    username: "FinancePro",
    email: "financepro@example.com",
    dateJoined: "January 15, 2024",
    profilePhoto: "https://api.dicebear.com/7.x/avataaars/svg?seed=FinancePro"
  };

  return (
    <div className="dashboard-content-container">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-photo-container">
            <img 
              src={userData.profilePhoto} 
              alt="Profile" 
              className="profile-photo"
            />
          </div>
          <h2>{userData.username}</h2>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Email</span>
            <span className="info-value">{userData.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Member Since</span>
            <span className="info-value">{userData.dateJoined}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent; 