import React, { useState, useEffect } from 'react';
import shade from '../../assets/shade.png';
import before from '../../assets/before.png';
import after from '../../assets/after.png';
import ReactCompareImage from 'react-compare-image';

const Virtual = () => {
  
  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between mb-14 w-full md:w-[80%] gap-8 m-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-4 items-start">
          <span className="block text-lg font-semibold">Virtual Try-On</span>
          <span className="block text-xl font-bold">Never Buy the Wrong Shade Again!</span>
          <span className="block text-lg">Try Now!</span>
          <img src={shade} alt="Shade" className="w-[8rem] md:w-[10rem]" />
        </div>

        {/* Right Section */}
        <div className="w-full" data-aos="flip-right">
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
