import React from 'react'
import Heading from '../../components/heading/Heading'
import Cards from '../../components/cards/cards'
import { foodItems } from '../../utils/cards'

const CardSection = () => {
    return (
        <div className='mt-12'>
            <Heading
                title={"More Than 10,000 Dishes To Order"}
                paragraph={"Welcome to the biggest Network of Food Ordering & Delivery"}
            />
            <div className="cards-container grid grid-cols-5">
                {
                    foodItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${index === 3 || index === 4 ? 'col-span-2 ' : 'col-span-1'}` }
                        >
                            <Cards imgPath={item.image} title={item.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CardSection
