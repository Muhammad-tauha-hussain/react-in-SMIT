import React from 'react'
import Heading from '../../components/heading/Heading'
import Cards from '../../components/cards/cards'
import { foodItems } from '../../utils/cards'

const CardSection = () => {
    // console.log(foodItems);

    return (
        <div className='mt-12'>
            <Heading
                title={"More Than 10,000 Dishes To Order"}
                paragraph={"Welcome to the biggest Network of Food Ordering & Delivery"}
            />
            <div className="cards-container grid grid-cols-3">
                {
                    foodItems.map((item, index) => (
                        <Cards imgPath={item.image} title={item.name} key={index} />

                    ))
                }
            </div>

        </div>
    )
}

export default CardSection