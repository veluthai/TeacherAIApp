// src/components/teacher/TeacherDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
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
    backgroundColor: '#4a6fa5',
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
    color: '#4a6fa5',
    borderBottomColor: '#4a6fa5'
  };

  const contentStyle = {
    flex: 1,
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const welcomeStyle = {
    backgroundColor: '#8e44ad',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem'
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  };

  const statCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const statValueStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#4a6fa5'
  };

  const sessionsStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem'
  };

  const sessionItemStyle = {
    padding: '1rem',
    borderRadius: '6px',
    backgroundColor: '#f9f9f9',
    marginBottom: '1rem'
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

  const quickActionsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  };

  const actionCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  };

  const actionIconStyle = {
    fontSize: '2rem',
    marginBottom: '1rem'
  };

  const learningModulesStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  };

  const moduleCardStyle = {
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
    backgroundColor: '#4a6fa5'
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Gurukshak Sahayak</h1>
          <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
            Teacher AI Assistant
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
        {['overview', 'learning', 'history', 'ask'].map((tab) => (
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
        {activeTab === 'overview' && (
          <div>
            <div style={welcomeStyle}>
              <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
                Good Morning, Sunita! You're doing great work! Here's how we can support you today.
              </h2>
            </div>
            
            <div style={statsContainerStyle}>
              <div style={statCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#666' }}>Total Queries</h3>
                <div style={statValueStyle}>2</div>
              </div>
              <div style={statCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#666' }}>Avg Response Time</h3>
                <div style={statValueStyle}>&lt;2 mins</div>
              </div>
              <div style={statCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#666' }}>Resolved</h3>
                <div style={statValueStyle}>2</div>
              </div>
            </div>
            
            <div style={sessionsStyle}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>Recent Support Sessions</h3>
              <div style={sessionItemStyle}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  How to engage students at different levels in subtraction?
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
                  <span>2026-01-20</span>
                  <span style={{ color: '#4caf50', fontWeight: 'bold' }}>resolved</span>
                </div>
              </div>
              <div style={sessionItemStyle}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  Using classroom items as teaching aids for subtraction?
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
                  <span>2026-01-19</span>
                  <span style={{ color: '#4caf50', fontWeight: 'bold' }}>resolved</span>
                </div>
              </div>
            </div>

            <div style={quickActionsStyle}>
              <div style={actionCardStyle} onClick={() => setActiveTab('learning')}>
                <div style={actionIconStyle}>📚</div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Micro-Learning</h3>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  5-10 minute learning modules
                </p>
              </div>
              <div style={actionCardStyle} onClick={() => setActiveTab('ask')}>
                <div style={actionIconStyle}>💡</div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Get Instant Help</h3>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  Ask your teaching questions
                </p>
              </div>
              <div style={actionCardStyle}>
                <div style={actionIconStyle}>🤝</div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Connect with Peers</h3>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  Share experiences with other teachers
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'learning' && (
          <div>
            <h2 style={{ margin: '0 0 1.5rem 0', color: '#333' }}>Your Learning Journey</h2>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span>2/6 modules completed</span>
              <div style={{ width: '200px', ...progressBarStyle }}>
                <div style={{ ...progressFillStyle, width: '32%' }}></div>
              </div>
              <span style={{ color: '#4a6fa5', fontWeight: 'bold' }}>32%</span>
            </div>
            
            <div style={learningModulesStyle}>
              <div style={moduleCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Managing Multi-Level Classrooms</h3>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '100%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#4a6fa5', fontWeight: 'bold' }}>100%</span>
                  <button style={{
                    backgroundColor: '#4a6fa5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}>Review</button>
                </div>
              </div>
              
              <div style={moduleCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Creating Zero-Cost Teaching Materials (TLM)</h3>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '100%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#4a6fa5', fontWeight: 'bold' }}>100%</span>
                  <button style={{
                    backgroundColor: '#4a6fa5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}>Review</button>
                </div>
              </div>
              
              <div style={moduleCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Engaging Advanced Students</h3>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: '0%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#4a6fa5', fontWeight: 'bold' }}>0%</span>
                  <button style={{
                    backgroundColor: '#4a6fa5',
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
        
        {activeTab === 'history' && (
          <div>
            <h2 style={{ margin: '0 0 1.5rem 0', color: '#333' }}>Your Coaching History</h2>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="Search your coaching history..."
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <select style={{
                padding: '0.8rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                backgroundColor: 'white'
              }}>
                <option>All Categories</option>
                <option>Classroom Management</option>
                <option>Teaching Materials</option>
                <option>Student Engagement</option>
              </select>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={statCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#666' }}>Total Queries</h3>
                <div style={statValueStyle}>2</div>
              </div>
              <div style={statCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#666' }}>Need Help</h3>
                <div style={statValueStyle}>2</div>
              </div>
              <div style={statCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#666' }}>Topics Explored</h3>
                <div style={statValueStyle}>5</div>
              </div>
              <div style={statCardStyle}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#666' }}>Weeks Active</h3>
                <div style={statValueStyle}>1</div>
              </div>
            </div>
            
            <div style={sessionsStyle}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>Recent Questions</h3>
              <div style={sessionItemStyle}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  How to engage advanced students while helping others with subtraction?
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
                  <span>2026-01-20</span>
                  <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    Classroom Management
                  </span>
                </div>
              </div>
              <div style={sessionItemStyle}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  How to create effective teaching materials with limited resources?
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
                  <span>2026-01-19</span>
                  <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    Teaching Materials
                  </span>
                </div>
              </div>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>Your Growth Insights</h3>
              <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>You've made great progress in managing multi-level classrooms!</li>
                <li style={{ marginBottom: '0.5rem' }}>Consider exploring techniques for engaging advanced students.</li>
                <li>Your response time to challenges has improved by 15% this week.</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'ask' && (
          <div>
            <h2 style={{ margin: '0 0 1.5rem 0', color: '#333' }}>Ask Your Teaching Question</h2>
            
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <div style={formGroupStyle}>
                <label htmlFor="grade" style={labelStyle}>Teaching Grade</label>
                <select id="grade" style={inputStyle}>
                  <option>Select Grade</option>
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                  <option>Grade 4</option>
                  <option>Grade 5</option>
                </select>
              </div>
              
              <div style={formGroupStyle}>
                <label htmlFor="support-type" style={labelStyle}>Support Type</label>
                <select id="support-type" style={inputStyle}>
                  <option>Select Support Type</option>
                  <option>Classroom Management</option>
                  <option>Teaching Materials</option>
                  <option>Student Engagement</option>
                  <option>Assessment</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div style={formGroupStyle}>
                <label htmlFor="question" style={labelStyle}>Describe Your Question</label>
                <textarea 
                  id="question" 
                  style={{...inputStyle, minHeight: '120px', resize: 'vertical'}}
                  placeholder="E.g., How can I help students who are struggling with subtraction while keeping advanced students engaged?"
                ></textarea>
              </div>
              
              <button style={buttonStyle}>Get Help</button>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>Quick Question Templates</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}>
                  How to manage students at different learning levels?
                </div>
                <div style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}>
                  Creating effective teaching materials with limited resources
                </div>
                <div style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}>
                  Engaging students who finish work early
                </div>
                <div style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}>
                  Handling disruptive behavior in class
                </div>
              </div>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>Privacy Notice</h3>
              <p style={{ margin: 0, color: '#666' }}>
                Your questions are used to improve our AI responses and may be anonymized for research purposes. No personal information is shared.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 1.5rem 0', color: '#333' }}>How It Works</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#4a6fa5',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto 1rem',
                    fontWeight: 'bold'
                  }}>1</div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Describe Your Challenge</h4>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                    Tell us about your classroom situation or teaching challenge
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#4a6fa5',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto 1rem',
                    fontWeight: 'bold'
                  }}>2</div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>AI Analysis</h4>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                    Our AI analyzes your question and teaching context
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#4a6fa5',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto 1rem',
                    fontWeight: 'bold'
                  }}>3</div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Get Strategies</h4>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                    Receive personalized strategies and resources for your situation
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;