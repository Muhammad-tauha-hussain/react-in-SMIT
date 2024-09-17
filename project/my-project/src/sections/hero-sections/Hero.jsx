import React from 'react';
import Button from '../../components/buttons/button';

const Hero = ({ h1Text, ptext, imagePath }) => {
  return (
    <div>
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              {h1Text}
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              {ptext}
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                />
                <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
              </div>
              <div>
                <Button text={"Order Now"} />
              </div>
            </form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 mt-[200px]">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9]"
              src={imagePath}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
