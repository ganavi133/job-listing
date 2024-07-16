import React from 'react';
import logo from '../Components/logo.png';


const Navbar = () => {
  return (
    <div>
      <nav className="bg-indigo-700 p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <div className=" text-white text-base px-2 py-1 rounded bg-black focus:bg-gray-300">Home</div>
          <a href="#job" className=" text-white text-base px-2 py-1 rounded hover:bg-black focus:bg-gray-300">Job</a>
          <a href="#add-job" className=" text-white text-base px-2 py-1 rounded hover:bg-black focus:bg-gray-300">Add Job</a>
        </div>
        <div className="flex items-center space-x-4">
          <img src={logo}  className="h-10 w-auto" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
