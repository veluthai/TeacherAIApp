// src/components/auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { role } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Simulate login - in a real app, you'd authenticate against a backend
    console.log(`Logging in as ${role} with email: ${email}`);
    
    // Store user info in localStorage (in a real app, you'd use a more secure method)
    localStorage.setItem('userRole', role);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', role === 'teacher' ? 'Sunita' : 'Student');
    
    // Redirect to the appropriate dashboard
    if (role === 'teacher') {
      navigate('/teacher/dashboard');
    } else if (role === 'student') {
      navigate('/student/dashboard');
    }
  };

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
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f5f7fa'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    padding: '2rem'
  };

  const headerSectionStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#4a6fa5',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    color: '#666',
    fontSize: '1rem'
  };

  const formStyle = {
    marginBottom: '1.5rem'
  };

  const formGroupStyle = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#333'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box'
  };

  const errorStyle = {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '0.8rem',
    borderRadius: '4px',
    marginBottom: '1rem',
    fontSize: '0.9rem'
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: role === 'teacher' ? '#4a6fa5' : '#8e44ad',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold'
  };

  const footerStyle = {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#666',
    marginTop: '1.5rem'
  };

  const linkStyle = {
    color: role === 'teacher' ? '#4a6fa5' : '#8e44ad',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  const switchRoleStyle = {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f5f7fa',
    borderRadius: '8px',
    textAlign: 'center'
  };

  const featuresStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
    marginBottom: '2rem'
  };

  const featureStyle = {
    textAlign: 'center',
    padding: '1rem'
  };

  const featureIconStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  };

  const featureTextStyle = {
    fontSize: '0.9rem',
    color: '#666'
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.8rem' }}>
            {role === 'teacher' ? 'Gurukshak Sahayak' : 'Shikshak Sahayak'}
          </h1>
          <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
            {role === 'teacher' ? 'Teacher AI Assistant' : 'Education Assistant'}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: '10px',
            height: '10px',
            backgroundColor: '#4caf50',
            borderRadius: '50%'
          }}></span>
          <span>Real-Time Coaching Available</span>
        </div>
      </header>

      <main style={mainStyle}>
        <div style={cardStyle}>
          <div style={headerSectionStyle}>
            <h2 style={logoStyle}>Login</h2>
            <p style={subtitleStyle}>
              {role === 'teacher' ? 'Teacher' : 'Student'} Portal
            </p>
          </div>
          
          <form onSubmit={handleSubmit} style={formStyle}>
            {error && <div style={errorStyle}>{error}</div>}
            
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`Enter your ${role} email`}
                style={inputStyle}
              />
            </div>
            
            <div style={formGroupStyle}>
              <label htmlFor="password" style={labelStyle}>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={inputStyle}
              />
            </div>
            
            <button type="submit" style={buttonStyle}>
              Login as {role === 'teacher' ? 'Teacher' : 'Student'}
            </button>
          </form>
          
          <div style={featuresStyle}>
            <div style={featureStyle}>
              <div style={featureIconStyle}>📚</div>
              <div style={featureTextStyle}>Micro-Learning</div>
            </div>
            <div style={featureStyle}>
              <div style={featureIconStyle}>💡</div>
              <div style={featureTextStyle}>Instant Help</div>
            </div>
            <div style={featureStyle}>
              <div style={featureIconStyle}>🤝</div>
              <div style={featureTextStyle}>Peer Connection</div>
            </div>
          </div>
          
          <div style={switchRoleStyle}>
            <p>
              Are you a {role === 'teacher' ? 'student' : 'teacher'}?{' '}
              <a href={`/login/${role === 'teacher' ? 'student' : 'teacher'}`} style={linkStyle}>
                Login as {role === 'teacher' ? 'Student' : 'Teacher'}
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;