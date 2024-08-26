// src/App.js
import React from 'react';
import MidiGrid from './components/MidiGrid';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>minimal-midi</h1>
      </header>
      <main>
        <MidiGrid />
      </main>
    </div>
  );
};

export default App;