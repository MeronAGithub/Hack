import React from 'react';
import '../../styles/LessonModuleCard.css';

const LessonModuleCard = ({ unitNumber, lessonName, description, progress }) => {
  return (
    <div className="lesson-module-card">
      <div className="lesson-module-header">
        <span className="unit-number">Unit {unitNumber}</span>
        <h3 className="lesson-name">{lessonName}</h3>
      </div>
      <p className="lesson-description">{description}</p>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="progress-text">{progress}% Complete</span>
    </div>
  );
};

export default LessonModuleCard; 