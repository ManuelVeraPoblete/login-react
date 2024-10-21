import React from 'react';
import './WelcomePage.css';

const WelcomePage = ({ userName }) => {
  return (
    <div className="welcome-container">
      <h1>Welcome, {userName}!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default WelcomePage;
