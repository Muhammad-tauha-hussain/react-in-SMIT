import React from 'react'
import logo from '../../../src/assets/logo.png'
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <div>
      <div className="relative w-full bg-transparent px-3 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img src={logo} alt="img" className='w-[2.5rem] h-[2.5rem]' />
            </span>
            <span className="font-bold">amazon</span>
          </div>

          <div className="hidden lg:block">
            <div className="hidden grow items-start lg:flex">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
