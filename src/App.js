import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleLoginSuccess = (credentialResponse) => {
    // Decodificar el token de Google para obtener el nombre del usuario
    const decodedToken = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
    setUser(decodedToken.name);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Header onGoogleLogin={handleGoogleLoginSuccess} />}
        />
        <Route
          path="/welcome"
          element={<WelcomePage userName={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
