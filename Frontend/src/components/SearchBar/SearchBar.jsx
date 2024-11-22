import React from "react";
import {useState} from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
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
        <div className='mt-4'>  <form
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
      </form></div>
    )
}
export default SearchBar