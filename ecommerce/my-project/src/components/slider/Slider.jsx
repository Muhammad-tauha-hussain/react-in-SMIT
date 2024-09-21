import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SliderProducts } from '../../data/product'

const Slider = () => {
  return (
    <div className='w-[80%]  m-auto'>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        // style={{ height: '500px' }}  // Set height for the Swiper container
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          SliderProducts.map((item, index) => (

            <SwiperSlide className='bg-white flex items-center justify-center'>
              <div key={index} className='grid grid-cols-2'>
                <div className="left">
                  <div className="text">
                    {item.name}
                    <p>{item.detail}</p>
                  </div>
                  <div className="price">
                    <p>{item.price}$</p>
                  </div>
                  <button className='border border-black p-2 rounded-lg '>Shop now</button>
                </div>
                <div className="right">
                  <img src={item.img} alt="image" className=''/>
                </div>

              </div>
            </SwiperSlide>
          ))
        }
        {/* <SwiperSlide className='bg-white flex items-center justify-center' style={{ height: '100px' }}>Slide 2</SwiperSlide>
        <SwiperSlide className='bg-white flex items-center justify-center' style={{ height: '100px' }}>Slide 3</SwiperSlide>
        <SwiperSlide className='bg-white flex items-center justify-center' style={{ height: '100px' }}>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
