import React from 'react';
import MissionCard from './MissionCard';

const MissionsContent = () => {
  const missions = [
    {
      id: 1,
      title: "Complete 5 Lessons",
      progress: 60,
      rewardIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Achieve 1000 Points",
      progress: 45,
      rewardIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Complete All Units",
      progress: 30,
      rewardIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )
    }
  ];

  return (
    <div className="dashboard-content-container">
      <h2>Missions</h2>
      <p>Complete missions to earn rewards!</p>
      <div className="missions-grid">
        {missions.map(mission => (
          <MissionCard
            key={mission.id}
            title={mission.title}
            progress={mission.progress}
            rewardIcon={mission.rewardIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default MissionsContent; 