import React from 'react';
import logo from "../../images/logo.png";
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className="relative w-full bg-black header">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2">
                        <img src={logo} alt="Logo" className='logo' />
                    </div>
                    <div className="hidden lg:block">
                        <ul className="inline-flex space-x-8">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-orange-900"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-orange-900"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-orange-900"
                                >
                                    menu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-orange-900"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-orange-900"
                                >
                                    reviews
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-orange-900"
                                >
                                    contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-orange-900"
                                >
                                    blogs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            <FontAwesomeIcon icon={faSearch} className="text-2xl text-white px-3"/> 
                            <FontAwesomeIcon icon={faCartShopping} className="text-2xl text-white"/> 


                        </button>
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
            <div className="border w-full h-1 bg-yellow-400"></div>
        </div>
    );
};

export default Header;
