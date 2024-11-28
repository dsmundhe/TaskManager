import React, { useState } from "react";
import ProfileInfo from "../../components/Cards/ProfileInfo";
import { Link } from "react-router-dom";

const Navbar = () => {
   //  profileInfo Section
  return (
    <div className="bg-white flex items-center justify-between px-6 py-1 shadow-md">
      <div className="flex items-center">
        <div className="logo-container">
          <div className="logo-img">
            <a href="https://ibb.co/vPdFGGp">
              <img
                src="https://i.ibb.co/gTW2ppN/logoimg.png"
                alt="logoimg"
                border="0"
              />
            </a>
          </div>
          <h1 className="logo">
            Plan<span>It</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        {/* Search Bar Section */}

        {/* Profile Section */}
        <Link to="/profile">
          <ProfileInfo />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
