// src/App.js

import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import MidiGrid from './components/MidiGrid';
import './App.css'; // Importar el archivo CSS para los estilos globales

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isFadingOut) {
      const fadeTimer = setTimeout(() => {
        setShowWelcome(false);
      }, 2000);

      return () => clearTimeout(fadeTimer);
    }
  }, [isFadingOut]);

  return (
    <div className="app-container">
      {showWelcome ? (
        <div className={`welcome-container ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
          <WelcomeScreen />
        </div>
      ) : (
        <MidiGrid />
      )}
    </div>
  );
}

export default App;