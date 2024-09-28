import React, { useState, useEffect } from 'react';
import hero from '../../../src/assets/hero.png';
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import AOS from 'aos';              // Import AOS
import 'aos/dist/aos.css';          // Import AOS styles

const Hero = () => {
  const transition = { duration: 10, type: "spring" };

  useEffect(() => {
    // Initialize AOS with options to trigger animation every time you scroll
    AOS.init({
      duration: 1000,  // Animation duration (in milliseconds)
      once: false     // Set to false to trigger animations every time you scroll
    });
  }, []);

  return (
    <div className="px-5 py-10 sm:px-8 md:px-10 lg:px-16 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div data-aos="fade-right" className="flex flex-col justify-center space-y-4 md:space-y-6">
          <h4 className="font-semibold uppercase text-lg sm:text-xl lg:text-2xl leading-tight">
            Skin <br /> Protection <br /> Cream
          </h4>
          <div>
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Trendy Collection
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-3">
              Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="relative col-span-2 flex justify-center">
          {/* Image Container */}
          <motion.div
            initial={{ marginTop: "0rem", opacity: 0 }}
            whileInView={{ marginTop: "-5rem", opacity: 1 }}
            transition={transition}
            style={{
              background: 'linear-gradient(135.74deg, #0bb5ff 14.09%, #6dd3fe 83.81%)',
            }}
            className="z-[-99] w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full flex items-center justify-center overflow-hidden"
          >
            <motion.img
              initial={{ marginBottom: "1rem", opacity: 0 }}
              whileInView={{ marginBottom: "-3rem", opacity: 1 }}
              whileHover={{ scaleX: "-1" }}
              transition={transition}
              src={hero}
              alt="image"
              className="object-contain w-full"
            />
          </motion.div>

          {/* Shopping Bag Button */}
          <motion.div
            initial={{ marginRight: "4rem" }}
            whileInView={{ marginRight: "2rem" }}
            transition={transition}
            className="absolute bottom-[-20px] sm:bottom-[20px] md:bottom-[50px] right-0 flex items-center gap-3"
          >
            <div className="bg-white p-3 text-center rounded-full border-4 border-black">
              <FaShoppingBag size={24} />
            </div>
            <div style={{ boxShadow: "var(--shadow1)" }} className="bg-white px-4 py-2 flex cursor-pointer items-center rounded-full border border-gray-300">
              <p className="text-sm md:text-base mr-3">Best Signup Offers</p>
              <FaArrowRight size={16} />
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div data-aos="fade-up-left" className="flex flex-col justify-center items-end space-y-4 md:space-y-6 text-right">
          <div>
            <span className="font-extrabold text-3xl sm:text-4xl">1.5m</span>
            <p className="text-sm sm:text-base text-gray-600">Monthly traffic</p>
          </div>
          <div>
            <span className="font-extrabold text-3xl sm:text-4xl">100k</span>
            <p className="text-sm sm:text-base text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
