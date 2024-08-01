import React ,{ useEffect, useState } from "react";
import "./ContentSection.css";
import content_img from "../Assets/contentimg.png";
import { MdSend } from "react-icons/md";
import Note from "../Note/Note";

const ContentSection = ({ notes, addNote, selectedGroup }) => {
  const [noteContent, setNoteContent] = useState('');
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSend = () => {
    if (noteContent.trim() !== '') {
      const date = new Date();
      const dateString = date.toLocaleDateString();
      const timeString = date.toLocaleTimeString();
      addNote({
        content: noteContent,
        date: dateString,
        time:timeString
      });
      setNoteContent('');
    }
  };


  return (
    <div className="content-section">
    <div className="head">
      <p>My Notes</p>
    </div>
      <div className="upper-section">
      {notes.length === 0 ? (
        <div>
        <img src={content_img} alt="" />
        <div className="info">
          <h2>Pocket Notes</h2>
          <p>Send and receive messages without keeping your phone online</p>
          <p>Use Pocket notes on upto 4 linked devices and 1 mobile phone</p>
        </div>
        </div>
      ) : (
        notes.map((note, index) => (
          <Note key={index} content={note.content} date={note.date}  time={note.time}/>
        ))
      )}
      
      </div>

      {selectedGroup && <div className="bottom-section">
        <div className="writing-section">
          <div className="send-icon">
            <MdSend color="#CCCCCC" onClick={handleSend} />
          </div>
          
          <textarea 
          placeholder="Enter your text here......"  
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          ></textarea>
        </div>
      </div>}
    </div>
  );
};

export default ContentSection;
