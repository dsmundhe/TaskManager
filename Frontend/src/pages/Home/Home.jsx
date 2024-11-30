import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Notecard from "../../components/Cards/Notecard";
import "./Home.css";
import { FaPlus } from "react-icons/fa";
import AddeditNotes from "../../components/Inputes/AddeditNotes";
import Modal from "react-modal";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [noteID, setNoteId] = useState();
  const [openaddisShown, setopenaddIsShown] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [notes, setNotes] = useState([]); // State to store notes
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPinLoading, setIsPinLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchNotes = async () => {
    const email = localStorage.getItem("email");
    const authToken = localStorage.getItem("authToken");

    if (!email || !authToken) {
      console.error("Missing email or auth token");
      return;
    }
    setIsFetching(true);
    try {
      const response = await fetch(
        "https://taskmanager-backend-nkb7.onrender.com/user/getnotes",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
            email: email, // Send email in headers
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }

      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []); // Empty dependency array to run only once on mount

  const handleAddNote = async (newNote) => {
    const email = localStorage.getItem("email");
    const authToken = localStorage.getItem("authToken");

    if (!email || !authToken) {
      console.error("Missing email or auth token");
      return;
    }

    try {
      const response = await fetch(
        "https://taskmanager-backend-nkb7.onrender.com/user/addnote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
            email: email,
          },
          body: JSON.stringify(newNote),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      // Refetch notes after adding
      fetchNotes();
      setopenaddIsShown({ isShown: false, type: "", data: null }); // Close modal
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleEditNote = async (updatedNote) => {
    const email = localStorage.getItem("email");
    const authToken = localStorage.getItem("authToken");

    if (!email || !authToken) {
      console.error("Missing email or auth token");
      return;
    }

    try {
      const response = await fetch(
        "https://taskmanager-backend-nkb7.onrender.com/user/editnote",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
            email: email,
          },
          body: JSON.stringify(updatedNote),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to edit note");
      }

      // Refetch notes after editing
      fetchNotes();
      setopenaddIsShown({ isShown: false, type: "", data: null }); // Close modal
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    const email = localStorage.getItem("email");
    const authToken = localStorage.getItem("authToken");

    if (!email || !authToken) {
      console.error("Missing email or auth token");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://taskmanager-backend-nkb7.onrender.com/user/deletenote/${noteId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
            email: email,
          },
        }
      );
      toast.success("Note deleted Successfuly!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast",
      });
      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      // Refetch notes after deleting
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-8 px-2">
        {isFetching ? (
          // Show loader or fetching message while notes are being fetched
          <div className="">
            
            <h2 className="ml-4 text-lg font-medium">Fetching Notes......</h2>
          </div>
        ) : notes.length === 0 ? (
          // Show message when no notes are available
          <div className="flex justify-center items-center h-screen">
            <h2 className="text-lg font-medium">No notes available</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map over the notes array and display each note */}
            {notes.map((note, index) => (
              <Notecard
                key={index}
                title={note.title}
                date={note.date}
                content={note.content}
                tags={note.tags}
                isPinned={note.isPin}
                noteID={note._id}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                setIsPinLoading={setIsPinLoading}
                isPinLoading={isPinLoading}
                onEdit={() => {
                  setopenaddIsShown({
                    isShown: true,
                    type: "edit",
                    data: note,
                  });
                }}
                onDelete={() => handleDeleteNote(note._id)} // Use the note ID for delete
                onPinnote={() => alert("Pin/Unpin clicked!")}
                fetchNotes={fetchNotes}
              />
            ))}
          </div>
        )}
      </div>

      <Modal
        isOpen={openaddisShown.isShown}
        onRequestClose={() =>
          setopenaddIsShown({ isShown: false, type: "", data: null })
        }
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        }}
        contentLabel=""
        className="w-[75%] max-h-3/4 bg-white mx-auto mt-20 rounded"
      >
        <AddeditNotes
          setopenaddIsShown={setopenaddIsShown}
          onAddNote={handleAddNote}
          onEditNote={handleEditNote}
          fetchNotes={fetchNotes}
          noteData={{
            ...openaddisShown.data, // Include existing note data
            noteId: openaddisShown.data?._id || noteID, // Use existing noteId or noteID state
          }}
        />
      </Modal>
      <ToastContainer className="toastContainer" />
      <div className="editButton">
        <Link to="/addnote">
          <button>
            <FaPlus />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
