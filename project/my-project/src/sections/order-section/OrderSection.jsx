import React from 'react'
import Heading from '../../components/heading/Heading'
import {orderSteps} from '../../utils/order'
import Cards from '../../components/cards/cards'

const OrderSection = () => {
  return (
    <div>
        <Heading  title={"How To Order"}/>
        <div className="container grid grid-cols-4">
            {
            orderSteps.map((steps,index)=> (
                <Cards imgPath={steps.image} title={steps.text} key={index} />
            ))
            }
        </div>
    </div>
  )
}

export default OrderSection