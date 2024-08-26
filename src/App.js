// src/App.js
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import MidiGrid from './components/MidiGrid';
import './App.css';

const App = () => {
  const [showMidi, setShowMidi] = useState(false);

  const handleEndWelcome = () => {
    setShowMidi(true);
  };

  return (
    <div className="app">
      {showMidi ? <MidiGrid /> : <WelcomeScreen onEnd={handleEndWelcome} />}
    </div>
  );
};

export default App;