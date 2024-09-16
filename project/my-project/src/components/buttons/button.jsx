import React from 'react'

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-[background: #FF5331]  text-white font-bold py-2 px-4 rounded">
        {text}
      </button>
    </div>
  )
}

export default Button