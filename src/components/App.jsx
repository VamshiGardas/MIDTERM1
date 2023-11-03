import React, { useState } from "react";
import Header from "./Header"; //imports header component
import Footer from "./Footer"; // imports footer component
import Note from "./Note"; //imports Note component
import CreateArea from "./CreateArea"; // imports CreateArea component
import "../CSS/App.css"; //imports css styles

function App() {
  const [noteArray, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div className="app-container">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes-section">
        {noteArray.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            font={note.font}
            color={note.color}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
