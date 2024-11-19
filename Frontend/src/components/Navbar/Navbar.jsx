import React, { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);  // You can replace this with the actual search logic
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-1 shadow-md">
      <div className="flex items-center">
        <h1 className="ml-4 text-xl font-semibold text-black">Notes</h1>
      </div>

      <div className="flex items-center space-x-8">
        {/* Search Bar Section */}
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-2 py-1 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs"
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
          <img
            className="h-16 rounded-full"
            src="https://i.pinimg.com/originals/ba/3d/73/ba3d738757089a28da691cf46235428b.gif"
            alt="Logo"
          />
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
