import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useGoogleLogin } from '@react-oauth/google'; // Importamos el hook para el login de Google
import './AuthButton.css';

const AuthButton = ({ platform, onLogin }) => {
    const getPlatformInfo = () => {
        switch (platform) {
            case 'google':
                return {
                    label: 'Login with Google',
                    style: 'auth-button google-button',
                    icon: faGoogle
                };
            case 'facebook':
                return {
                    label: 'Login with Facebook',
                    style: 'auth-button facebook-button',
                    icon: faFacebook
                };
            case 'github':
                return {
                    label: 'Login with GitHub',
                    style: 'auth-button github-button',
                    icon: faGithub
                };
            default:
                return { label: 'Login', style: 'auth-button', icon: null };
        }
    };

    const { label, style, icon } = getPlatformInfo();

    // Implementamos la lógica de inicio de sesión con Google
    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            onLogin('google'); // Redirigimos a la página de bienvenida
        },
        onError: () => {
            console.log('Login Failed');
        },
    });

    const handleClick = () => {
        if (platform === 'google') {
            googleLogin(); // Si es Google, manejamos el login específico de Google
        } else {
            onLogin(platform); // Para las otras plataformas, llamamos la función normal
        }
    };

    return (
        <button className={style} onClick={handleClick}>
            {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: '10px' }} />}
            {label}
        </button>
    );
};

export default AuthButton;
