import React from 'react'

const Button = ({ text }) => {
  return (
    <div>
      <button style={{ backgroundColor: '#FF5331' }} className="text-white font-bold py-2 px-4 rounded">
        {text}
      </button>
    </div>
  )
}

export default Button
