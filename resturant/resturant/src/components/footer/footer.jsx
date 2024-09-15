import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#13131a] mt-10 mb-10 py-10'>
      <div className='icons flex flex-row m-auto  w-[fit-content]'>
        <FaFacebookF className='border rounded-full p-3 m-5 text-white bg-black text-5xl' />
        <FaTwitter className='border rounded-full p-3 m-5 text-white bg-black text-5xl' />
        <FaInstagram className='border rounded-full p-3 m-5 text-white bg-black text-5xl' />
        <FaLinkedin className='border rounded-full p-3 m-5 text-white bg-black text-5xl' />
        <FaPinterest className='border rounded-full p-3 m-5 text-white bg-black text-5xl' />
      </div>
      <div className="buttons flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 w-[fit-content] m-auto">
        <button type="button" class="p-5 border border-[1px solid yellow] bg-[tranparent] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Home</button>
        <button type="button" class="p-5 border border-[1px solid yellow] bg-[tranparent] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">About</button>
        <button type="button" class="p-5 border border-[1px solid yellow] bg-[tranparent] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Menu</button>
        <button type="button" class="p-5 border border-[1px solid yellow] bg-[tranparent] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Products</button>
        <button type="button" class="p-5 border border-[1px solid yellow] bg-[tranparent] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Review</button>
        <button type="button" class="p-5 border border-[1px solid yellow] bg-[tranparent] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Contact</button>
        <button type="button" class="p-5 border border-[1px solid yellow] bg-[tranparent] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Blogs</button>
      </div>
      <p className='text-center mt-5 text-white'>created by Khizar-Yaldaram | all rights reserved</p>
    </div>
  )
}

export default Footer;
