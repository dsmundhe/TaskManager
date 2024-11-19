import React from 'react';

const Navbar = () => {
  return (
    <>

      <div className="bg-white flex items-center justify-between px-6 py-1 shadow-md">

        <div className="flex items-center">
          {/* Uncomment to use a different logo */}
          {/* <img className="h-16" src="https://i.pinimg.com/originals/3b/04/d1/3b04d1926aab1e09276c766305ee8f99.gif" alt="Alternative Logo" /> */}

          <h1 className="ml-4 text-xl font-semibold text-black">Notes</h1>
        </div>


        <div className="flex items-center space-x-8">
          <h2 className="cursor-pointer text-gray-700 hover:text-blue-500 transition duration-300">
            Search
          </h2>
          <h2 className="cursor-pointer text-gray-700 hover:text-blue-500 transition duration-300">
            <img
              className="h-16 rounded-full"
              src="https://i.pinimg.com/originals/ba/3d/73/ba3d738757089a28da691cf46235428b.gif"
              alt="Logo"
            />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
