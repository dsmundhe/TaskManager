import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
  noteID,
  fetchNotes,
}) => {
  const navigate = useNavigate();
  const handlePin = async () => {
    const authToken = localStorage.getItem("authToken");
    const email = localStorage.getItem("email");

    const response = await axios.put(
      `http://localhost:5000/user/pinnote/${noteID}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
          email: email,
        },
      }
    );

    if (response.data.result) {
      await fetchNotes();
    } else {
      alert("Could not pin the note.");
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-100 shadow-md hover:shadow-lg transition-all ease-in-out">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h6 className="text-lg font-semibold text-zinc-950">{title}</h6>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn text-2xl cursor-pointer transition-colors ${
            isPinned ? "text-yellow-500" : "text-gray-400"
          } hover:text-yellow-600`}
          onClick={() => handlePin()}
        />
      </div>
      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{content}</p>
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-600 italic">{tags}</div>
        <div className="flex items-center gap-4">
          <MdCreate
            className="icon-btn text-xl cursor-pointer hover:text-green-500 transition-colors"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn text-xl cursor-pointer hover:text-red-500 transition-colors"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
