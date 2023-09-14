import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-2xl font-bold">
              Hak's Website
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/about" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/login" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </a>
              <a href="/register" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Register
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-gray-200 hover:bg-blue-600 px-2 py-1 rounded-md focus:outline-none focus:bg-blue-600 focus:text-gray-200">
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-gray-200">
              Home
            </a>
            <a href="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-gray-200">
              About
            </a>
            <a href="/login" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-gray-200">
              Login
            </a>
            <a href="/register" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-gray-200">
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
