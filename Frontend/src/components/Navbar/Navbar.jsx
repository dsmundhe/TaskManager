import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery); // You can replace this with the actual search logic
  };

  return (
    <div className="bg-white flex flex-wrap items-center justify-between px-4 py-2 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start">
        <h1 className="ml-2 text-xl font-semibold text-black">Notes</h1>
        {/* Hamburger Icon for Mobile */}
        <div className="block sm:hidden">
          <button className="focus:outline-none">
            {/* Icon can be replaced with a real hamburger menu icon */}
            <span className="text-2xl text-gray-700">☰</span>
          </button>
        </div>
      </div>

      {/* Search and Profile Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 w-full sm:w-auto mt-2 sm:mt-0">
        {/* Search Bar Section */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center justify-center w-full sm:w-auto"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-6 py-2 w-full sm:w-auto rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs font-medium"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 text-xs ml-2"
          >
            Search
          </button>
        </form>

        {/* Profile Section */}
        <h2 className="cursor-pointer text-gray-700 hover:text-blue-500 transition duration-300">
          <Link to="/profile">
            <img
              className="h-10 w-10 sm:h-16 sm:w-16 rounded-full"
              src="https://i.pinimg.com/originals/ba/3d/73/ba3d738757089a28da691cf46235428b.gif"
              alt="Logo"
            />
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
