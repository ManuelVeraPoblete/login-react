import React from 'react';
import ReactDOM from 'react-dom/client'; // Importamos createRoot desde 'react-dom/client'
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Obtenemos el elemento raíz del DOM
const rootElement = document.getElementById('root');

// Creamos el "root" usando createRoot en lugar de render
const root = ReactDOM.createRoot(rootElement);

// Renderizamos la aplicación envuelta en el GoogleOAuthProvider
root.render(
  <GoogleOAuthProvider clientId="919555344740-pm03os84mdr0c35odmci1rt2p6kapnj5.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
