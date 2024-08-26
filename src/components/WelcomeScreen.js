// src/components/WelcomeScreen.js
import React, { useEffect } from 'react';

const WelcomeScreen = ({ onEnd }) => {
  useEffect(() => {
    const timer = setTimeout(onEnd, 2000);
    return () => clearTimeout(timer);
  }, [onEnd]);
  return (
    <div className="welcome-screen">
      <h1>minimal-midi</h1>
    </div>
  );
};

export default WelcomeScreen;