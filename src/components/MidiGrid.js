// src/components/MidiGrid.js
import React, { useState, useRef } from 'react';

const MidiGrid = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [midiAccess, setMidiAccess] = useState(null);
  const [output, setOutput] = useState(null);
  const [volume, setVolume] = useState(50);
  const [tempo, setTempo] = useState(120);

  const handleMidiButtonPress = (note) => {
    if (output) {
      const noteOnMessage = [0x90, note, 0x7f]; // Comando para "nota ON"
      output.send(noteOnMessage); // Envía el mensaje MIDI
      setTimeout(() => {
        const noteOffMessage = [0x80, note, 0x40]; // Comando para "nota OFF"
        output.send(noteOffMessage); // Envía el mensaje MIDI
      }, 200);
    }
  };

  const connectMidi = async () => {
    if (navigator.requestMIDIAccess) {
      try {
        const midi = await navigator.requestMIDIAccess();
        setMidiAccess(midi);

        const outputs = Array.from(midi.outputs.values());
        if (outputs.length > 0) {
          setOutput(outputs[0]);
          console.log("Conectado al dispositivo MIDI:", outputs[0].name);
        } else {
          alert("No se encontraron dispositivos de salida MIDI.");
        }
      } catch (err) {
        console.error("Error al acceder a dispositivos MIDI:", err);
      }
    } else {
      alert("La API Web MIDI no es compatible con este navegador.");
    }
  };

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
        <button className="connect" onClick={connectMidi}>Connect MIDI</button>
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