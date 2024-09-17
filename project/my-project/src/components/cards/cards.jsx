import React from 'react'

const Cards = ({imgPath, title}) => {
    return (
        <div>
            <div className="card">


                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img src={imgPath} alt="image" />
                    
                    <h2 class="mb-3 font-normal text-gray-500 dark:text-gray-400">{title}</h2>
                    
                </div>

            </div>
        </div>
    )
}

export default Cards