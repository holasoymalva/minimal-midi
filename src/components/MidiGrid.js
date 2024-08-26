// src/components/MidiGrid.js
import React, { useState, useRef } from 'react';

const MidiGrid = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [tempo, setTempo] = useState(120);

  const handlePadPress = (note) => {
    console.log(`Pad pressed: ${note}`);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    console.log(`Volume set to: ${e.target.value}`);
  };

  const handleTempoChange = (e) => {
    setTempo(e.target.value);
    console.log(`Tempo set to: ${e.target.value}`);
  };

  return (
    <div className="music-generator">
      <div className="controls">
        <div className="button-circle" onClick={() => setIsPlaying(!isPlaying)}>
        </div>
        <div className={`button-circle ${isPlaying ? 'active' : ''}`}></div>
      </div>
      <div className="grid">
        {[...Array(9)].map((_, index) => (
          <button
            key={index}
            className="pad"
            onClick={() => handlePadPress(60 + index)}
          >
            {/* Pad {index + 1} */}
          </button>
        ))}
      </div>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          className="slider"
          onChange={handleVolumeChange}
        />
        <input
          type="range"
          min="60"
          max="180"
          value={tempo}
          className="slider"
          onChange={handleTempoChange}
        />
      </div>
    </div>
  );
};

export default MidiGrid;