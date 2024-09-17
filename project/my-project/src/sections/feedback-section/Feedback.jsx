import React from 'react'
import Reviews from '../../components/reviews/Reviews'
import Heading from '../../components/heading/Heading'

const Feedback = () => {
  return (
    <div>
      <Heading title={"Our Clients Feedback"} paragraph={"Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts,"}/>
      <Reviews 
      review={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dolorem! Accusamus cumque vero repellendus cum ratione labore eaque nihil sint."}
      name={"Khizar-Yaldaram"}
      post={"CEO of Software Company"}
      />
    </div>
  )
}

export default Feedback