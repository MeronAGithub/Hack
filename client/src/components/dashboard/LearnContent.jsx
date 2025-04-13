import React from 'react';
import { useNavigate } from 'react-router-dom';
import LessonModuleCard from './LessonModuleCard';

const LearnContent = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      id: 1,
      unitNumber: 1,
      lessonName: "Budgeting Basics",
      description: "Learn the basics of business communication and common workplace vocabulary.",
      progress: 75
    },
    {
      id: 2,
      unitNumber: 2,
      lessonName: "Saving Strategies",
      description: "Master the art of writing professional emails with proper tone and structure.",
      progress: 30
    },
    {
      id: 3,
      unitNumber: 3,
      lessonName: "Credit Fundamentals",
      description: "Develop skills for creating and delivering effective business presentations.",
      progress: 0
    },
    {
      id: 4,
      unitNumber: 4,
      lessonName: "Debit and Credit Management",
      description: "Learn key phrases and strategies for successful business negotiations.",
      progress: 0
    },
    {
      id: 5,
      unitNumber: 5,
      lessonName: "Loans and Debt Management",
      description: "Learn how to effectively participate in and lead business meetings.",
      progress: 0
    },
    {
      id: 6,
      unitNumber: 6,
      lessonName: "Investments and Retirement Planning",
      description: "Understand and navigate cultural differences in business settings.",
      progress: 0
    }
  ];

  const handleLessonClick = (lessonId) => {
    navigate(`/lesson/${lessonId}`);
  };

  return (
    <div className="dashboard-content-container">
      <h2>Learn</h2>
      <p>Start your learning journey here!</p>
      <div className="lessons-grid">
        {lessons.map((lesson) => (
          <div 
            key={lesson.id} 
            onClick={() => handleLessonClick(lesson.id)}
            style={{ cursor: 'pointer' }}
          >
            <LessonModuleCard
              unitNumber={lesson.unitNumber}
              lessonName={lesson.lessonName}
              description={lesson.description}
              progress={lesson.progress}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnContent; 