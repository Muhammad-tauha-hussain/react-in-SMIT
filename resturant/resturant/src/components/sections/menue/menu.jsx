import React from 'react'
import Card from '../../cards/card'
import { cardsData } from '../../../utils/card'


const Menu = () => {
    return (
        <>
            <div className="heading text-center">
                <h1 className="mt-10 text-4xl font-bold mb-12 text-white uppercase">
                    our <span className="text-yellow-400">menu</span></h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {cardsData.map((card, index) => (
                    <Card key={index} title={card.title} image={card.image} price={card.price} isbutton={true} variant={"menu"}/>
                ))}
            </div>

        </>
    )
}

export default Menu