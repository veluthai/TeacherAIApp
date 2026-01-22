// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import StudentDashboard from './components/student/StudentDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Check if user is logged in on app load
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('userRole');
    
    if (loggedInStatus === 'true' && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} userRole={userRole} onLogout={handleLogout} />} />
          <Route path="/login/:role" element={<Login onLogin={handleLogin} />} />
          <Route 
            path="/teacher/dashboard" 
            element={
              isLoggedIn && userRole === 'teacher' ? 
              <TeacherDashboard onLogout={handleLogout} /> : 
              <Navigate to="/login/teacher" replace />
            } 
          />
          <Route 
            path="/student/dashboard" 
            element={
              isLoggedIn && userRole === 'student' ? 
              <StudentDashboard onLogout={handleLogout} /> : 
              <Navigate to="/login/student" replace />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;