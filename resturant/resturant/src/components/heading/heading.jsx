import React from 'react'

const Heading = ({ title, spanElement }) => {
  return (
    <div>
      <h1 className="mt-10 text-4xl font-bold mb-12 text-white text-center">
        {title} 
        <span className="text-yellow-400">{ spanElement}</span>
      </h1>
    </div>
  )
}

export default Heading