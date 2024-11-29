import React from "react";
import ProfileInfo from "../../components/Cards/ProfileInfo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-between px-6 py-3 shadow-lg rounded-b-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <a href="https://ibb.co/vPdFGGp" className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/gTW2ppN/logoimg.png"
            alt="logoimg"
            className="w-10 h-10 object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Plan<span className="text-blue-600">It</span>
          </h1>
        </a>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-6">
        <Link to="/profile">
          <ProfileInfo />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
