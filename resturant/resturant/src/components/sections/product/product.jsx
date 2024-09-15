import React from 'react';
import { menuItems } from '../../../utils/products';
import Products from '../../products/products';

const Product = () => {
  return (
    <div>
      <div className="heading text-center">
        <h1 className="mt-10 text-4xl font-bold mb-12 text-white uppercase">
          our <span className="text-yellow-400">products</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {menuItems.map((item, index) => ( // Changed from `Products` to `item` to avoid conflict
          <Products
            key={index} // Use `item.id` for unique keys
            title={item.title}
            image={item.image}
            price={item.price}
            description={item.description} // Use `item.description` instead of `description`
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
