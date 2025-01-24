import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  // Handle new note input
  const handleChange = (e) => {
    setNote(e.target.value);
  };

  // Add a new note
  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  // Delete a note
  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="app-container">
      <h2>Note Taking App</h2>
      <input 
        type="text" 
        value={note} 
        onChange={handleChange} 
        placeholder="Write a note..."
      />
      <button onClick={addNote}>Add Note</button>
      
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <span>{note}</span>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;