import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SliderProducts } from '../../data/product'

const Slider = () => {
 
  return (
    <div className='w-[80%] m-auto relative mb-36 cursor-pointer'>
      <Swiper
        className='h-[12rem] relative'
        
        loopFillGroupWithBlank={true}
        spaceBetween={30}
        // slidesPerView={3.3}
        slidesPerGroup={1}
        // pagination={{ clickable: true }}
        // navigation={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
          1440:{
            slidesPerView: 3.3,
            spaceBetween: 30,
          }
          
        }}
        // style={{ height: '500px' }}  // Set height for the Swiper container
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
         {SliderProducts.map((item, index) => (
          <SwiperSlide key={index}  className="bg-white flex items-center justify-between rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-6 p-4">
              {/* Left Section */}
              <div className="left">
                <div className="text font-semibold text-lg">{item.name}</div>
                <p className="text-gray-500">{item.detail}</p>
                <div className="price font-bold text-xl mt-2">
                  <p>{item.price}$</p>
                </div>
                <button className="border border-black p-2 rounded-lg cursor-pointer mt-2">
                  Shop now
                </button>
              </div>

              {/* Right Section */}
              <div className="right relative">
                <img
                  src={item.img}
                  alt="product"
                  className="rotate-[-20deg] absolute w-[6rem] md:w-[8rem] right-0"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* <SwiperSlide className='bg-white flex items-center justify-center' style={{ height: '100px' }}>Slide 2</SwiperSlide>
        <SwiperSlide className='bg-white flex items-center justify-center' style={{ height: '100px' }}>Slide 3</SwiperSlide>
        <SwiperSlide className='bg-white flex items-center justify-center' style={{ height: '100px' }}>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;


