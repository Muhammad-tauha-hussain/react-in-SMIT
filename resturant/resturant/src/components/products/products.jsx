import React from 'react'
import './products.css'

const Products = ({name,price, description,image}) => {
  return (
    <div className='card-container '>
            <div className="w-[300px] rounded-md border cursor-pointer text-white text-center border-yellow-300 py-5 px-5">
                <img
                    src={image}
                    alt="Laptop"
                    className="rounded-t-md object-cover "
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        {name}
                    </h1>
                    <p className="mt-3 text-sm ">
                        {description}
                    </p>
                    <p className="mt-3 text-sm ">
                        {price}
                    </p>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-yellow-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
  )
}

export default Products