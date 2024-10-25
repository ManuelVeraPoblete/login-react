import React, { useState } from 'react';
import AuthButton from '../components/AuthButton';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    

    const handleLogin = (userData) => {
        // Redirigimos a la página de bienvenida y pasamos los datos del usuario
        navigate('/dashboard', { state: { user: userData } });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login to Your Account</h1>
                <p>Select a login method to continue:</p>
                <div className="auth-buttons-container">
                    <AuthButton platform="google" onLogin={handleLogin} />
                    <AuthButton platform="facebook" onLogin={() => handleLogin(null)} />
                    <AuthButton platform="github" onLogin={() => handleLogin(null)} />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
