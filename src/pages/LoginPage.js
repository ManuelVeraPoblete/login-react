import React from 'react';
import AuthButton from '../components/AuthButton';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (platform) => {
        navigate('/welcome');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login to Your Account</h1>
                <p>Select a login method to continue:</p>
                <div className="auth-buttons-container">
                    <AuthButton platform="google" onLogin={() => handleLogin('google')} />
                    <AuthButton platform="facebook" onLogin={() => handleLogin('facebook')} />
                    <AuthButton platform="github" onLogin={() => handleLogin('github')} />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
