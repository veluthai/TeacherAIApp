// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ isLoggedIn, userRole, onLogout }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    backgroundColor: '#4a6fa5',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const mainStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f5f7fa'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333'
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#666',
    textAlign: 'center',
    maxWidth: '600px'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '2rem',
    marginBottom: '3rem'
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    fontWeight: 'bold'
  };

  const teacherButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4a6fa5',
    color: 'white'
  };

  const studentButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#8e44ad',
    color: 'white'
  };

  const logoutButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '0.5rem 1rem',
    fontSize: '0.9rem'
  };

  const featuresStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
    width: '100%'
  };

  const featureCardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const featureIconStyle = {
    fontSize: '3rem',
    marginBottom: '1rem'
  };

  const featureTitleStyle = {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
    color: '#333'
  };

  const featureDescStyle = {
    color: '#666'
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Shikshak Sahayak</h1>
          <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
            Your AI-Powered Teaching Assistant
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
          {isLoggedIn && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>Welcome, {userRole}!</span>
              <button onClick={onLogout} style={logoutButtonStyle}>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main style={mainStyle}>
        {!isLoggedIn ? (
          <>
            <h2 style={titleStyle}>Welcome to Your Teaching Journey</h2>
            <p style={subtitleStyle}>
              Get instant help with classroom challenges, access teaching resources, 
              and grow as an educator with personalized AI support.
            </p>
            
            <div style={buttonContainerStyle}>
              <Link to="/login/teacher" style={teacherButtonStyle}>
                Login as Teacher
              </Link>
              <Link to="/login/student" style={studentButtonStyle}>
                Login as Student
              </Link>
            </div>
          </>
        ) : (
          <>
            <h2 style={titleStyle}>Welcome Back!</h2>
            <p style={subtitleStyle}>
              You are logged in as a {userRole}. Click below to go to your dashboard.
            </p>
            
            <div style={buttonContainerStyle}>
              <Link to={`/${userRole}/dashboard`} style={
                userRole === 'teacher' ? teacherButtonStyle : studentButtonStyle
              }>
                Go to {userRole === 'teacher' ? 'Teacher' : 'Student'} Dashboard
              </Link>
            </div>
          </>
        )}

        <div style={featuresStyle}>
          <div style={featureCardStyle}>
            <div style={featureIconStyle}>📚</div>
            <h3 style={featureTitleStyle}>Micro-Learning</h3>
            <p style={featureDescStyle}>5-10 minute learning modules based on real classroom scenarios</p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureIconStyle}>💡</div>
            <h3 style={featureTitleStyle}>Instant Help</h3>
            <p style={featureDescStyle}>Get immediate answers to your teaching questions</p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureIconStyle}>🤝</div>
            <h3 style={featureTitleStyle}>Peer Connection</h3>
            <p style={featureDescStyle}>Connect with fellow educators to share experiences</p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureIconStyle}>📊</div>
            <h3 style={featureTitleStyle}>Growth Insights</h3>
            <p style={featureDescStyle}>Track your teaching progress with personalized insights</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;