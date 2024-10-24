import React from 'react';
import { useLocation } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
    const location = useLocation();
    const { user } = location.state || {}; // Obtenemos los datos del usuario de la navegación

    return (
        <div className="welcome-page">
            {user ? (
                <div className="user-info">
                    <h1>Welcome, {user.name}!</h1>
                    <img src={user.picture} alt="Profile" className="profile-pic" />
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <h1>Welcome to the app!</h1>
            )}
        </div>
    );
};

export default WelcomePage;
