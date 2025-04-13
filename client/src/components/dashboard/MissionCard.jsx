import React from 'react';
import '../../styles/MissionCard.css';

const MissionCard = ({ title, progress, rewardIcon }) => {
  return (
    <div className="mission-card">
      <h3 className="mission-title">{title}</h3>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="reward-icon">
          {rewardIcon}
        </div>
      </div>
    </div>
  );
};

export default MissionCard; 