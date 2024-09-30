import React, { useState } from 'react';
import plane from '../../assets/plane.png';
import { ProductsData } from '../../data/product';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Modal from '../modal/Modal';


const Products = () => {
    const [parent] = useAutoAnimate();
    const [Menuproducts, setMenuProducts] = useState(ProductsData)
    const [isModal, setIsModal] = useState(false)
    const [productId, setProductId] = useState(null)
    const filter = (type) =>{
        setMenuProducts(ProductsData.filter((product)=> product.type === type ))
    }

    const handleProduct = (id) => {
        setIsModal(true);
        setProductId(id);

    }
    return (
        <div className='mb-16'>
            {/* Heading div */}
            <div className="heading text-center">
                <img src={plane} alt="image" className='block m-auto' />
                <h1 className='text-2xl font-bold'>Our Feature Products</h1>
            </div>

            <div className="flex mt-6">
                {/* 1st div (25% width) */}
                <div className='w-1/4  p-4 flex justify-end'>
                    <ul>
                        <li className='mt-5 cursor-pointer hover:text-[var(--pink)] font-semibold' onClick={()=> (setMenuProducts(ProductsData))}>All</li>
                        <li className='mt-5 cursor-pointer hover:text-[var(--pink)] font-semibold' onClick={()=>filter('skin care')}>Skin Care</li>
                        <li className='mt-5 cursor-pointer hover:text-[var(--pink)] font-semibold' onClick={()=>filter('conditioner')}>Conditioner</li>
                        <li className='mt-5 cursor-pointer hover:text-[var(--pink)] font-semibold' onClick={()=>filter('foundation')}>Foundation</li>
                    </ul>
                </div>

                {/* 2nd div (75% width) with vertical scrolling */}
                <div className='w-3/4  p-4 flex gap-4 flex-wrap  relative h-[25rem] overflow-y-scroll scroll-smooth ' ref={parent}>
                    {Menuproducts.map((item) => (
                        <div key={item.id} className="flex justify-between w-[15rem] bg-white rounded-lg p-4 shadow-lg relative overflow-hidden">
                            <div className="text w-[60%]">
                                <h1 className='text-lg font-bold'>{item.name}</h1>
                                <p className='text-sm'>{item.detail}</p>
                                <h1 className='font-semibold mt-2'>{item.price}$</h1>
                                <button className='border border-black p-2 rounded-lg mt-2' onClick={()=> handleProduct(item.id)}>Shop now</button>
                            </div>
                                <img src={item.img} alt="product" className='rotate-[-20deg] absolute w-[5rem]  top-8 right-2 block' />
                        </div>
                    ))}
                </div>
            </div>
            <Modal  isModal={isModal} setIsModal={setIsModal} productsData={ProductsData} productId={productId}/>
        </div>

        
    );
};

export default Products;
