import React from 'react'

const Reviews = ({review,name,post}) => {
    return (
        <div>


            <div class="w-full p-4 text-center mt-10 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <img src="/images/Quotation.png" alt="image" className='mx-auto mb-5'/>
                <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{review}</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{name}</p>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{post}</p>

            </div>

        </div>
    )
}

export default Reviews