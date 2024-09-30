import React from 'react';
import { ProductsData } from '../../data/product';
import weight from '../../assets/weight.png'
import heart from '../../assets/heart.png'

const Modal = ({ isModal, setIsModal, productId }) => {
  // Find the product by productId
  const product = ProductsData.find((prod) => prod.id === productId);

  return (
    <>
      {isModal && (
        <div className="fixed inset-0 flex items-center gap-5 justify-center bg-black bg-opacity-50 z-50">
          {/* Modal Content */}
          <div className="relative flex flex-col md:flex-row p-6 m-3 space-y-6 md:space-y-0 md:space-x-10 bg-white rounded-2xl shadow-2xl h-[500px] md:p-10 w-[90%] max-w-[800px]">
            
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setIsModal(false)}
            >
              &times;
            </button>

            {/* Image div */}
            <div className="flex-shrink-0">
              <img
                src={product?.img || "assets/default-image.png"}
                alt={product?.name || "Product"}
                className="w-40 h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between space-y-4 text-sm">
              {/* Label & Description Container */}
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-xs text-white bg-black rounded-full">
                  Free Shipping
                </div>
                <div className="text-lg font-semibold">
                  {product?.name || "Product Name"} - {product?.detail}
                </div>
              </div>

              {/* Price Container */}
              <div className="space-y-1">
                <p className="line-through text-gray-400 text-sm">$799</p>
                <p className="text-3xl font-bold text-gray-800">${product?.price}</p>
                <p className="text-xs font-light text-gray-400">
                  Offer valid while stocks last!
                </p>
              </div>

              {/* Button Group */}
              <button className="w-32 bg-[--divColor] text-white font-extrabold px-4 py-2 rounded-lg hover:bg-blue-600">
                Add to cart
              </button>

              {/* Stock */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>50+ pcs. in stock</div>
              </div>

              {/* Bottom Buttons Container */}
              <div className="flex space-x-4">
                <button className="flex items-center justify-center px-4 py-2 text-xs border-2 border-gray-300 rounded-lg hover:bg-gray-100">
                  <img src={weight} alt="Weight Icon" className="w-6" />
                  <span>Add to cart</span>
                </button>

                <button className="flex items-center justify-center px-4 py-2 text-xs border-2 border-gray-300 rounded-lg hover:bg-gray-100">
                  <img src={heart} alt="Heart Icon" className="w-6" />
                  <span>Add to wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
