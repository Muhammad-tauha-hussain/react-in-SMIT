import React, { useState } from 'react';
import Button from '../buttons/button';

const Header = () => {
  // State to track if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img src="/images/logo.png" alt="Logo" />
            </span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Resturants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Recipes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Pages
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-2">
            <Button text={"Login"} />
            <Button text={"SignUp"} />
          </div>

          <div className="lg:hidden">
            {/* Hamburger button */}
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden px-4 py-3 bg-gray-100">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block text-gray-800 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-800 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-800 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Pages
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;


