import React from 'react'

const Heading = ({title,paragraph}) => {
  return (
    <div>
        <h1 className='text-3xl font-extrabold text-center text-black mb-2'>{title}</h1>
        <p className='text-center text-2xl text-black'>{paragraph}</p>
    </div>
  )
}

export default Heading
