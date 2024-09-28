import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="py-10 px-5 md:px-10">
      {/* Divider Line */}
      <div className='w-full border-t border-gray-300 mb-8'></div>

      <div className="footer max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700">
        {/* 1st Column: Logo & Brand */}
        <div className='flex items-center gap-2'>
          <img src={logo} alt="amazon logo" className='w-[4rem]' />
          <span className="text-xl font-bold">Amazon</span>
        </div>

        {/* 2nd Column: Contact Info */}
        <div>
          <h1 className="font-semibold text-lg mb-4">Contact Us</h1>
          <ul className="text-sm space-y-2">
            <li>111 North Avenue, Orlando, FL 32801</li>
            <li>352-306-4415</li>
            <li>support@amazon.com</li>
          </ul>
        </div>

        {/* 3rd Column: Account */}
        <div>
          <h1 className="font-semibold text-lg mb-4">Account</h1>
          <ul className="text-sm space-y-2">
            <li>Sign In</li>
            <li>My Account</li>
            <li>Orders</li>
          </ul>
        </div>

        {/* 4th Column: Company Info */}
        <div>
          <h1 className="font-semibold text-lg mb-4">Company</h1>
          <ul className="text-sm space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
        </div>

        {/* 5th Column: Resources */}
        <div>
          <h1 className="font-semibold text-lg mb-4">Resources</h1>
          <ul className="text-sm space-y-2">
            <li>Safety, Privacy & Terms</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>

      {/* Footer Credits */}
      <p className='text-center mt-10 text-sm text-gray-500'>Created by Khizar-Yaldaram | All rights reserved</p>
    </div>
  );
};

export default Footer;
