import React from 'react'
import './hero.css';

const Hero = () => {
  return (
    <div className='w-full h-screen hero'>
      <div className="flex flex-col items-start justify-start text-white text-left ps-14 pt-24">
  <h1 className="text-5xl font-bold uppercase">
    fresh<span className="text-yellow-500"> food in the </span>
    <br /> morning
  </h1>
  <p className="uppercase font-semibold py-2 leading-7">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore,
    <br />
    sint cupiditate distinctio tempora reiciendis.
  </p>
  <button className="px-5 py-4 mt-4 bg-yellow-500 text-white font-semibold hover:px-10 transition-all duration-300">
    get yours now
  </button>
</div>

    </div>
  )
}

export default Hero
