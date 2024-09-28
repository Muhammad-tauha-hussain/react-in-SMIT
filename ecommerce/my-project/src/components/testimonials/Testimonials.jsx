import React from 'react';
import testimonialImage from '../../../src/assets/testimonialHero.png';
import { TestimonialsData } from '../../data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {
    return (
        <div className='w-[90%] m-auto mb-16'>
            {/* Heading Section */}
            <div className='mb-16 w-full'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center bg-gray-100 p-8 rounded-lg shadow-lg">
                    {/* 1st Grid (Top Rated) */}
                    <div className="col-span-1 flex flex-col justify-end p-4">
                        <h1 className='text-2xl md:text-3xl font-bold mb-4 text-gray-700'>Top Rated</h1>
                        <p className='text-gray-500 leading-relaxed'>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</p>
                    </div>

                    {/* 2nd Grid (Image) */}
                    <div className="col-span-2 flex justify-center">
                        <img src={testimonialImage} alt="testimonial" className='w-[20rem] md:w-[28rem] block m-auto' />
                    </div>

                    {/* 3rd Grid (100k Happy Customers) */}
                    <div className="col-span-1 flex flex-col justify-end p-4">
                        <h1 className='text-3xl md:text-4xl font-bold text-gray-700'>100k+</h1>
                        <p className='text-gray-500 leading-relaxed'>Happy Customers with us</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <Swiper
                spaceBetween={40}
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
                    1440: {
                        slidesPerView: 3.3,
                        spaceBetween: 30,
                    }
                }}
                loop={true}
                slidesPerGroup={1}
                className='testimonial-swiper'
            >
                {TestimonialsData.map((testimonial, index) => {
                    return (
                        <SwiperSlide key={index} className='bg-white p-6 text-center cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
                            {/* Image on top of the card */}
                            <div className='relative'>
                                <div className='flex justify-center mb-4 mt-5'>
                                    <img
                                        src={testimonial.image}
                                        alt="testimonial"
                                        className='w-20 h-20 object-cover rounded-full border-4 border-gray-100 shadow-lg absolute top-[-40px]'
                                    />
                                </div>

                                {/* Card content */}
                                <div className='mt-16'>
                                    <p className='text-gray-600 italic mb-6 leading-relaxed'>
                                        "{testimonial.comment}"
                                    </p>

                                    <div className='border-t border-gray-200 mb-4'></div>

                                    <h1 className='font-semibold text-lg text-gray-700'>{testimonial.name}</h1>
                                    <p className='text-sm text-gray-500'>{testimonial.position}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Testimonials;
