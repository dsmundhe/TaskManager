import React, { useState } from 'react';
import ProfileInfo from '../../components/Cards/ProfileInfo'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
const Navbar = () => {
 
  
  //  profileInfo Section
  return (
    <div className="bg-white flex items-center justify-between px-6 py-1 shadow-md">
      <div className="flex items-center">
        <h1 className="ml-4 text-xl font-semibold text-black">Notes</h1>
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
