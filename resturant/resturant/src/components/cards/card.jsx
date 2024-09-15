import React from 'react';
import './card.css';

const Card = ({ title, price, image, isbutton, variant }) => {
  return (
    <div className={`card-container ${variant === 'blogs' ? 'blog-style' : variant === 'reviews' ? 'reviews-style' : 'menu-style'}`}>
      {/* Main container will take up 80% of screen width */}
      <div className=''>
        <div className="rounded-md border cursor-pointer text-white text-center border-4 border-yellow-500 py-5 px-5">
          {/* The image and card content will adjust to the container's width */}
          <img
            src={image}
            alt={title}
            className="rounded-md object-cover w-full"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {title}
            </h1>
            <p className="mt-3 text-sm ">
              {price}
            </p>
            {isbutton && (
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-yellow-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
