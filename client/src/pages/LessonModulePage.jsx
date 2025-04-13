import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/LessonModulePage.css';

const LessonModulePage = () => {
  const { moduleId } = useParams();

  // Sample lesson content - in a real app, this would come from an API
  const lessonContent = {
    title: "Introduction to Business English",
    description: "Learn the basics of business communication and common workplace vocabulary.",
    sections: [
      {
        id: 1,
        title: "Business Greetings",
        content: "Learn how to properly greet colleagues and clients in a business setting.",
        exercises: [
          { id: 1, type: "quiz", title: "Greetings Quiz" },
          { id: 2, type: "practice", title: "Role Play Exercise" }
        ]
      },
      {
        id: 2,
        title: "Email Etiquette",
        content: "Master the art of writing professional emails with proper tone and structure.",
        exercises: [
          { id: 3, type: "quiz", title: "Email Format Quiz" },
          { id: 4, type: "practice", title: "Email Writing Exercise" }
        ]
      }
    ]
  };

  return (
    <div className="lesson-module-page">
      <div className="lesson-header">
        <h1>{lessonContent.title}</h1>
        <p className="lesson-description">{lessonContent.description}</p>
      </div>

      <div className="lesson-sections">
        {lessonContent.sections.map(section => (
          <div key={section.id} className="lesson-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            <div className="exercises">
              {section.exercises.map(exercise => (
                <div key={exercise.id} className="exercise-card">
                  <div className="exercise-icon">
                    {exercise.type === 'quiz' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                    )}
                  </div>
                  <div className="exercise-content">
                    <h3>{exercise.title}</h3>
                    <button className="start-exercise">Start Exercise</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonModulePage; 