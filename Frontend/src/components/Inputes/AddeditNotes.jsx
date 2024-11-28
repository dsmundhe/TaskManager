import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddeditNotes = ({ setopenaddIsShown }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [email, setEmail] = useState(""); // Email state
  const [title, setTitle] = useState(""); // Title state
  const [content, setContent] = useState(""); // Content state
  const [tags, setTags] = useState([]); // Tags state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [notes, setNotes] = useState([]); // Notes state for storing the list of notes

  const navigate = useNavigate();

  // Function to update the current time
  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;
    setCurrentTime(formattedTime);
  };

  // Set up interval to update time every second
 
  // Fetch email from localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail); // Set the email state if it's found in localStorage
    } else {
      setErrorMessage("Email not found! Please log in.");
    }
  }, []);

  // Fetch token from localStorage on component mount
  const token = localStorage.getItem("authToken"); // Token from localStorage

  // Fetch notes from server
  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/notes", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in the headers
        },
      });
      setNotes(response.data.notes); // Update notes state with the latest notes
    } catch (error) {
      setErrorMessage("Failed to fetch notes");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email, title, or content are missing
    if (!email || !title || !content) {
      setErrorMessage("Please fill in all fields!");
      return;
    }

    if (!token) {
      setErrorMessage("Token not found! Please log in again.");
      return;
    }

    // Optimistically update the UI by adding the new note to the state
    const newNote = {
      email,
      title,
      content,
      tags,
      createdAt: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]); // Prepend the new note to the list

    try {
      // Send data to backend using axios
      const response = await axios.post(
        "http://localhost:5000/user/addnotes",
        {
          email,
          title,
          content,
          tags, // Pass tags if needed
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in the headers
          },
        }
      );

      // Handle success response
      if (response.data.result) {
        setSuccessMessage("Note added successfully");
        setErrorMessage("");
        setTitle("");
        setContent("");
        setTags([]); // Clear tags after submission

        // Re-fetch the notes to ensure the list is up-to-date
        fetchNotes();

        setopenaddIsShown({
          isShown: false,
          type: "add",
          data: null,
        });
        navigate("/home");
      } else {
        setErrorMessage(response.data.msg); // Show error message if the backend returns false
      }
    } catch (error) {
      // Handle network or server errors
      setErrorMessage("An error occurred while adding the note");
    }
  };

  const handleClose = () => {
    setopenaddIsShown({
      isShown: false,
      type: "add",
      data: null,
    });
  };



  useEffect(() => {
    updateTime(); // Update immediately on mount
    const timer = setInterval(updateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-4">
      {/* Responsive Modal Container */}
      <div className="w-full max-w-lg sm:max-w-md p-4 bg-white rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={handleClose}
        >
          ✖
        </button>

        {/* Real-Time Clock */}
        <p className="text-sm text-gray-500">{currentTime}</p>

        {/* Email Field */}
        <div className="mt-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full text-lg font-semibold text-gray-800 border-b border-gray-300 focus:outline-none focus:border-purple-500"
            value={email} // The email is automatically fetched from localStorage
            readOnly
          />
        </div>

        {/* Editable Title */}
        <div className="mt-2">
          <input
            type="text"
            placeholder="Enter title"
            className="w-full text-lg font-semibold text-gray-800 border-b border-gray-300 focus:outline-none focus:border-purple-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Content */}
        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-1">CONTENT</p>
          <textarea
            className="w-full h-24 p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="COMMENT"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Tags */}
        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-1">TAGS</p>
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="Add tags"
              className="flex-grow p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="w-8 h-8 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-200">
              +
            </button>
          </div>
        </div>

        {/* Error and Success Messages */}
        {errorMessage && (
          <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-xs mt-2">{successMessage}</p>
        )}

        {/* Add Button */}
        <button
          className="w-full mt-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600"
          onClick={handleSubmit}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddeditNotes;
