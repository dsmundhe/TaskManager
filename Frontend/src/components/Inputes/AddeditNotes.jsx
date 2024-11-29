import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddeditNotes.css";
import { useNavigate } from "react-router-dom";

const AddeditNotes = ({
  setopenaddIsShown,
  onAddNote,
  onEditNote,
  noteData,
  email,
}) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags?.join(", ") || "");
  const [isPinned, setIsPinned] = useState(noteData?.isPinned || false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (noteData) {
      setTitle(noteData.title || "");
      setContent(noteData.content || "");
      setTags(noteData.tags?.join(", ") || "");
      setIsPinned(noteData.isPinned || false);
    }
  }, [noteData]);

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      setError("Title and Content are required!");
      return;
    }

    const note = {
      title: title.trim(),
      content: content.trim(),
      tags: tags.split(",").map((tag) => tag.trim()), // Convert tags string to array
      isPinned,
    };

    if (noteData?.noteId) {
      // Editing existing note
      await editNote(note, noteData.noteId);
    } else {
      // Adding a new note
      onAddNote(note);
    }
  };

  // Function to call backend API for editing note using Axios
  const editNote = async (note, noteID) => {
    const authToken = localStorage.getItem("authToken");
    const email = localStorage.getItem("email");

    try {
      const response = await axios.post(
        `http://localhost:5000/user/editnote/${noteID}`,
        {
          title: note.title,
          content: note.content,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
            email: email, // Assuming email is passed as a prop
          },
        }
      );

      if (response.data.result) {
        setMessage("Note edited successfully!");
        onEditNote({
          ...note,
          _id: noteID, // Include the note ID
        });
        navigate("/home");
      } else {
        setError(response.data.msg);
      }
    } catch (error) {
      setError("An error occurred while editing the note.");
    }
  };

  return (
    <div className="add-edit-notes-container">
      <h2 className="add-edit-notes-header">
        {noteData?.noteId ? "Edit Note" : "Add Note"}
      </h2>

      {error && <div className="add-edit-notes-error">{error}</div>}
      {message && <div className="add-edit-notes-success">{message}</div>}

      <div className="add-edit-notes-input-group">
        <label className="add-edit-notes-label">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="add-edit-notes-input"
          placeholder="Enter note title"
        />
      </div>

      <div className="add-edit-notes-input-group">
        <label className="add-edit-notes-label">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="add-edit-notes-input"
          rows="6"
          placeholder="Enter note content"
        ></textarea>
      </div>

      <div className="add-edit-notes-input-group">
        <label className="add-edit-notes-label">Tags</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="add-edit-notes-input"
          placeholder="Comma-separated tags"
        />
      </div>

      <div className="add-edit-notes-pinned">
        <input
          type="checkbox"
          checked={isPinned}
          onChange={(e) => setIsPinned(e.target.checked)}
          id="isPinned"
          className="add-edit-notes-checkbox"
        />
        <label htmlFor="isPinned" className="add-edit-notes-checkbox-label">
          Pin this note
        </label>
      </div>

      <div className="add-edit-notes-buttons">
        <button
          onClick={handleSave}
          className="add-edit-notes-save-button"
        >
          Save
        </button>
        <button
          onClick={() =>
            setopenaddIsShown({ isShown: false, type: "", data: null })
          }
          className="add-edit-notes-cancel-button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddeditNotes;
