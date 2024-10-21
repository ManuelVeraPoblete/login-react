import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Login = ({ onLoginSuccess }) => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          onLoginSuccess(credentialResponse); // Llamada al manejar el éxito
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};

export default Login;
