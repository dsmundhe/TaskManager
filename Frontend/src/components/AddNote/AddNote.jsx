import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./AddNote.css";
import { useNavigate } from "react-router-dom";
const AddNote = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    isPin: false,
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, isPin: e.target.checked });
  };

  const handleSubmit = async (e) => {
    const email = localStorage.getItem("email");
    const authToken = localStorage.getItem("authToken");

    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/addnotes",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
            email: email,
          },
        }
      );
      if (response.data.result) {
        navigate("/home");
      } else {
        navigate("/addnote");
      }
    } catch (error) {
      setMessage("Error adding note!");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="add-note-container">
        <h2 className="add-note-title">Add a Note</h2>
        <form className="add-note-form" onSubmit={handleSubmit}>
          <label className="add-note-label">
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="add-note-input"
              required
            />
          </label>
          <label className="add-note-label">
            Content:
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="add-note-textarea"
              required
            />
          </label>
          <label className="add-note-label-checkbox">
            <input
              type="checkbox"
              checked={formData.isPin}
              onChange={handleCheckboxChange}
              className="add-note-checkbox"
            />
            Pin this Note
          </label>
          <button type="submit" className="add-note-button">
            Add Note
          </button>
        </form>
        {message && <p className="add-note-message">{message}</p>}
      </div>
    </>
  );
};

export default AddNote;
