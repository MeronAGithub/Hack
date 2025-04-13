import React from 'react';
import '../../styles/LeaderboardContent.css';

const LeaderboardContent = () => {
  // Sample data for the leaderboard
  const users = [
    { id: 1, username: "BusinessPro", points: 1250, rank: 1 },
    { id: 2, username: "EnglishMaster", points: 1100, rank: 2 },
    { id: 3, username: "CorporateNinja", points: 950, rank: 3 },
    { id: 4, username: "LinguisticGuru", points: 800, rank: 4 },
    { id: 5, username: "BizWhiz", points: 750, rank: 5 },
    { id: 6, username: "CommExpert", points: 700, rank: 6 },
    { id: 7, username: "LanguagePro", points: 650, rank: 7 },
    { id: 8, username: "BusinessAce", points: 600, rank: 8 },
    { id: 9, username: "CorporateStar", points: 550, rank: 9 },
    { id: 10, username: "EnglishElite", points: 500, rank: 10 },
    { id: 11, username: "BizMaster", points: 450, rank: 11 },
    { id: 12, username: "CommChampion", points: 400, rank: 12 },
    { id: 13, username: "LanguageLegend", points: 350, rank: 13 },
    { id: 14, username: "BusinessHero", points: 300, rank: 14 },
    { id: 15, username: "CorporatePro", points: 250, rank: 15 },
    { id: 16, username: "EnglishAce", points: 200, rank: 16 },
    { id: 17, username: "BizExpert", points: 150, rank: 17 },
    { id: 18, username: "CommMaster", points: 100, rank: 18 },
    { id: 19, username: "LanguagePro", points: 50, rank: 19 },
    { id: 20, username: "BusinessNewbie", points: 25, rank: 20 }
  ];

  const topThree = users.slice(0, 3);
  const remainingUsers = users.slice(3);

  return (
    <div className="dashboard-content-container">
      <h2>Leaderboard</h2>
      <p>See how you rank against other learners!</p>
      
      {/* Podium for top 3 users */}
      <div className="podium-container">
        {topThree.map((user, index) => (
          <div key={user.id} className={`podium-item ${index === 0 ? 'first' : index === 1 ? 'second' : 'third'}`}>
            <div className="podium-rank">{user.rank}</div>
            <div className="podium-username">{user.username}</div>
            <div className="podium-points">{user.points} pts</div>
          </div>
        ))}
      </div>

      {/* List of remaining users */}
      <div className="leaderboard-list">
        {remainingUsers.map((user) => (
          <div key={user.id} className="leaderboard-item">
            <span className="rank">{user.rank}</span>
            <span className="username">{user.username}</span>
            <span className="points">{user.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardContent; 