import React from 'react'
import './about.css'

const About = () => {
    return (
        <div className="text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="heading text-center">
                    <h1 className="mt-10 text-4xl font-bold mb-12">
                        <span className="text-yellow-400">About</span> Us
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* First Column: Image */}
                    <div>
                        <img
                            src="https://codingcirculate-restaurant-design.on.fleek.co/static/media/about-img.b50db0fa2bfd668b3a06"
                            alt="image"
                            className="w-full"
                        />
                    </div>
                    {/* Second Column: Text Content */}
                    <div className='diff-color'>
                        <h1 className="text-2xl font-bold mb-4">What makes our food special?</h1>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui
                            ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus
                            autem? Quod nemo facilis cupiditate. Ex, vel? Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas
                            culpa! Neque consectetur obcaecati sapiente?
                        </p>
                        <button className="px-6 py-2 bg-yellow-500 text-white font-bold  shadow-md hover:bg-yellow-700">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About