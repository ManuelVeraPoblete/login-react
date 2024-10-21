import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = ({ onGoogleLogin, onFacebookLogin, onGithubLogin }) => {
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      onGoogleLogin(response); // Pasar los datos a App.js
      navigate('/welcome');    // Redirigir a la página de bienvenida
    },
    onError: () => {
      console.log('Google Login Failed');
    },
  });

  return (
    <header className="App-header">
      <h2>Sign in with</h2>
      <div className="login-buttons">
        {/* Botón de Facebook */}
        <button className="login-btn facebook-btn" onClick={onFacebookLogin}>
          <FontAwesomeIcon icon={faFacebookF} /> Sign in with Facebook
        </button>

        {/* Botón de Google */}
        <button className="login-btn google-btn" onClick={() => googleLogin()}>
          <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
        </button>

        {/* Botón de GitHub */}
        <button className="login-btn github-btn" onClick={onGithubLogin}>
          <FontAwesomeIcon icon={faGithub} /> Sign in with GitHub
        </button>
      </div>
    </header>
  );
};

export default Header;
