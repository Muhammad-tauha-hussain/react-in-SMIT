import React from 'react';
import hero from '../../../src/assets/hero.png';
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='px-5 py-10 md:px-10'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Section */}
                <div className='flex flex-col justify-center space-y-4 md:space-y-6'>
                    <h4 className='font-semibold uppercase text-lg md:text-xl leading-tight'>
                        Skin <br /> Protection <br /> Cream
                    </h4>
                    <div>
                        <h1 className='font-extrabold text-4xl md:text-5xl leading-tight'>Trendy Collection</h1>
                        <p className='text-sm md:text-base text-gray-600 mt-3'>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</p>
                    </div>
                </div>
                {/* Center Section */}
                <div className='relative col-span-2 flex justify-center'>
                    {/* Image Container */}
                    <div className='bg-blue-400 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] rounded-full flex items-center justify-center overflow-hidden'>
                        <img src={hero} alt="image" className='object-contain' />
                    </div>
                    {/* Shopping Bag Button */}
                    <div className='absolute bottom-[-30px] md:bottom-[50px] right-0 flex items-center gap-3'>
                        <div className='bg-white p-3 text-center rounded-full border-4 border-black'>
                            <FaShoppingBag size={24} />
                        </div>
                        <div className="bg-white px-4 py-2 flex items-center rounded-full shadow-lg border border-gray-300">
                            <p className='text-sm md:text-base mr-3'>Best Signup Offers</p>
                            <FaArrowRight size={16} />
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className='flex flex-col justify-center items-end space-y-4 md:space-y-6 text-right'>
                    <div>
                        <span className='font-extrabold text-3xl md:text-4xl'>1.5m</span>
                        <p className='text-sm md:text-base text-gray-600'>Monthly traffic</p>
                    </div>
                    <div>
                        <span className='font-extrabold text-3xl md:text-4xl'>100k</span>
                        <p className='text-sm md:text-base text-gray-600'>Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
