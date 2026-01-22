// src/components/student/StudentDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('lessons');
  const navigate = useNavigate();
  
  const handleLogout = () => {
    onLogout();
    navigate('/');
  };
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f7fa'
  };

  const headerStyle = {
    backgroundColor: '#8e44ad',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const tabsStyle = {
    backgroundColor: 'white',
    display: 'flex',
    borderBottom: '1px solid #e0e0e0',
    padding: '0 2rem'
  };

  const tabButtonStyle = {
    background: 'none',
    border: 'none',
    padding: '1rem 1.5rem',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#666',
    borderBottom: '3px solid transparent',
    transition: 'all 0.3s ease'
  };

  const activeTabStyle = {
    color: '#8e44ad',
    borderBottomColor: '#8e44ad'
  };

  const contentStyle = {
    flex: 1,
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const lessonsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem'
  };

  const lessonCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  };

  const progressBarStyle = {
    width: '100%',
    height: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    overflow: 'hidden',
    margin: '1rem 0'
  };

  const progressFillStyle = {
    height: '100%',
    backgroundColor: '#8e44ad'
  };

  const logoutButtonStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '0.9rem'
  };

  const learningJourneyStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem'
  };

  const moduleFiltersStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem'
  };

  const filterButtonStyle = {
    padding: '0.5rem 1rem',
    background: 'none',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const activeFilterStyle = {
    backgroundColor: '#8e44ad',
    color: 'white',
    borderColor: '#8e44ad'
  };

  const achievementsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem'
  };

  const achievementCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const achievementCardEarnedStyle = {
    borderLeft: '4px solid #8e44ad'
  };

  const achievementCardLockedStyle = {
    opacity: 0.7
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Gyanshak Sahayak</h1>
          <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
            Education Assistant
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#4caf50',
              borderRadius: '50%'
            }}></span>
            <span>Real-Time Coaching Available</span>
          </div>
          <button onClick={handleLogout} style={logoutButtonStyle}>
            Logout
          </button>
        </div>
      </header>
      
      <div style={tabsStyle}>
        {['lessons', 'practice', 'achievements'].map((tab) => (
          <button
            key={tab}
            style={{
              ...tabButtonStyle,
              ...(activeTab === tab ? activeTabStyle : {})
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <div style={contentStyle}>
        {activeTab === 'lessons' && (
          <div>
            <div style={learningJourneyStyle}>
              <h2 style={{ margin: '0 0 1rem 0', color: '#333' }}>Your Learning Journey</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span>2/6 modules completed</span>
                <div style={{ flex: 1, ...progressBarStyle }}>
                  <div style={{ ...progressFillStyle, width: '32%' }}></div>
                </div>
                <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>32%</span>
              </div>
            </div>
            
            <div style={moduleFiltersStyle}>
              <button style={{...filterButtonStyle, ...activeFilterStyle}}>All Modules</button>
              <button style={filterButtonStyle}>In Progress</button>
              <button style={filterButtonStyle}>Completed</button>
            </div>
            
            <div style={lessonsGridStyle}>
              <div style={lessonCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Managing Multi-Level Classrooms</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>10 min</p>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '100%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>100%</span>
                  <button style={{
                    backgroundColor: '#8e44ad',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}>Review</button>
                </div>
              </div>
              
              <div style={lessonCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Creating Zero-Cost Teaching Materials (TLM)</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>8 min</p>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '100%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>100%</span>
                  <button style={{
                    backgroundColor: '#8e44ad',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}>Review</button>
                </div>
              </div>
              
              <div style={lessonCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Engaging Advanced Students</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>12 min</p>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '0%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>0%</span>
                  <button style={{
                    backgroundColor: '#8e44ad',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}>Start</button>
                </div>
              </div>
              
              <div style={lessonCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Assessment Techniques</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>15 min</p>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '0%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>0%</span>
                  <button style={{
                    backgroundColor: '#8e44ad',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}>Start</button>
                </div>
              </div>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>What is Micro-Learning?</h3>
              <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>5-10 minute learning sessions</li>
                <li style={{ marginBottom: '0.5rem' }}>Based on real classroom scenarios</li>
                <li style={{ marginBottom: '0.5rem' }}>Practical strategies you can implement immediately</li>
                <li>Available anytime, anywhere</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'practice' && (
          <div>
            <h2 style={{ margin: '0 0 1.5rem 0', color: '#333' }}>Practice Exercises</h2>
            <div style={lessonsGridStyle}>
              <div style={lessonCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Subtraction Practice</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    Easy
                  </span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>10 questions</span>
                </div>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '70%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>7/10 completed</span>
                  <button style={{
                    backgroundColor: '#8e44ad',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}>Continue</button>
                </div>
              </div>
              
              <div style={lessonCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Number Recognition</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    Easy
                  </span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>15 questions</span>
                </div>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '100%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>15/15 completed</span>
                  <button style={{
                    backgroundColor: '#8e44ad',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}>Review</button>
                </div>
              </div>
              
              <div style={lessonCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Addition Problems</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#fff8e1', color: '#f57f17', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    Medium
                  </span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>12 questions</span>
                </div>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '40%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>5/12 completed</span>
                  <button style={{
                    backgroundColor: '#8e44ad',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}>Continue</button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'achievements' && (
          <div>
            <h2 style={{ margin: '0 0 1.5rem 0', color: '#333' }}>Your Achievements</h2>
            <div style={achievementsGridStyle}>
              <div style={{...achievementCardStyle, ...achievementCardEarnedStyle}}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>First Steps</h3>
                <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
                  Complete your first lesson
                </p>
                <div style={{ fontWeight: 'bold', color: '#8e44ad' }}>
                  ✓ Earned
                </div>
              </div>
              
              <div style={{...achievementCardStyle, ...achievementCardEarnedStyle}}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Practice Makes Perfect</h3>
                <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
                  Complete 5 practice exercises
                </p>
                <div style={{ fontWeight: 'bold', color: '#8e44ad' }}>
                  ✓ Earned
                </div>
              </div>
              
              <div style={{...achievementCardStyle, ...achievementCardLockedStyle}}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Quiz Master</h3>
                <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
                  Score 90% or higher on a quiz
                </p>
                <div style={{ fontWeight: 'bold', color: '#8e44ad' }}>
                  🔒 Locked
                </div>
              </div>
              
              <div style={{...achievementCardStyle, ...achievementCardLockedStyle}}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌟</div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Consistent Learner</h3>
                <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
                  Log in for 7 consecutive days
                </p>
                <div style={{ fontWeight: 'bold', color: '#8e44ad' }}>
                  🔒 Locked
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;