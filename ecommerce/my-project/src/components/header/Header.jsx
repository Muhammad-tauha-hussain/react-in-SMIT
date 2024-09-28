import React, { useState, useEffect } from 'react';
import logo from '../../../src/assets/logo.png';
import AOS from 'aos';              // Import AOS
import 'aos/dist/aos.css';          // Import AOS styles
import { LuShoppingBag } from 'react-icons/lu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS with options to trigger animation every time you scroll
    AOS.init({
      duration: 1000,  // Animation duration (in milliseconds)
      once: false     // Set to false to trigger animations every time you scroll
    });
  }, []);
  
  return (
    <div data-aos="fade-down"> {/* Apply AOS animation here */}
      <div className="relative w-full bg-transparent px-3 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img src={logo} alt="img" className="w-[2.5rem] h-[2.5rem]" />
            </span>
            <span className="font-bold">amazon</span>
          </div>

          <div className="hidden lg:block">
            <div className="grow items-start lg:flex">
              <ul className="ml-12 inline-flex space-x-8 items-center">
                <li>
                  <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                    New
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                    Sales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                    ENG
                  </a>
                </li>
                <li>
                  <input type="text" placeholder="Search" className="rounded px-2 w-[6rem]" />
                </li>
                <li className="cursor-pointer flex justify-center items-center">
                  <LuShoppingBag size={24} />
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
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
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="block lg:hidden">
          <div className="grow items-end flex relative">
            <ul className="absolute left-0 top-0 w-full flex flex-col space-y-4 items-center bg-white p-5">
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                  Brands
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                  New
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                  Sales
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#fe956f]">
                  ENG
                </a>
              </li>
              <li>
                <input type="text" placeholder="Search" className="rounded px-2 w-full" />
              </li>
              <li className="cursor-pointer flex justify-center items-center">
                <LuShoppingBag size={24} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
