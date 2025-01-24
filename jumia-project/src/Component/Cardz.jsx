import React, { useState, useEffect } from 'react';
import './Cardz.css';

const Cardz = () => {
    // Initialize state with data from localStorage if available
    const [quote, setQuote] = useState(
        JSON.parse(localStorage.getItem('notes')) || [] // Load notes from localStorage, or use empty array if none
    );

    // Define state for user inputs
    const [usertitle, setuserTitle] = useState('');
    const [userNote, setuserNote] = useState('');

    // Handle title input change
    const updatetitle = (e) => {
        setuserTitle(e.target.value);
    };

    // Handle note input change
    const updatenote = (e) => {
        setuserNote(e.target.value);
    };

    // Add the new note to the state
    const AddNote = () => {
        if (usertitle && userNote) { // Only add if both fields are not empty
            const newData = {
                title: usertitle,
                Dates: new Date().toLocaleDateString(),
                Notetext: userNote
            };

            // Add the new note to the quote array
            setQuote([...quote, newData]);

            // Clear input fields after adding the note
            setuserTitle('');
            setuserNote('');
        }
    };

    // Delete a specific note from the list
    const deleteNote = (index) => {
        const updatedNotes = userinput.filter((_, idx) => idx !== index);
        setUserInput(updatedNotes);
    };

    // Save notes to localStorage whenever quote state changes
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(quote)); // Save notes to localStorage
    }, [quote]); // This will run every time the `quote` state changes

    return (
        <div className="container">
            <div className="wrapper_one">
                {/* Title input */}
                <input 
                    type="text" 
                    className='myinput'
                    placeholder='Title'
                    value={usertitle}
                    onChange={updatetitle}
                />
                {/* Note text input */}
                <textarea 
                    className='mytext' 
                    placeholder='Enter your Note' 
                    value={userNote}
                    onChange={updatenote}
                ></textarea>
                {/* Add Note button */}
                <button className='btn' onClick={AddNote}>Add Note</button>
            </div>

            {/* Display the list of notes */}
            <div className="wrapper_two">
                {quote.map((props, index) => (
                    <div key={index} className="note-item">
                        <h3>{props.title}</h3>
                        <p>{props.Notetext}</p>
                        <small>{props.Dates}</small>
                        {/* Delete Button */}
                        <button className="delete-btn" onClick={() => deleteNote(index)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cardz;