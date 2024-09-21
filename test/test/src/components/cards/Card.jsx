import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({background, profileImage, name, profession, description, id}) => {
    const navigate = useNavigate();

    const handleProfile = () =>{
        navigate(`/profile/${id}`)
    }
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 overflow-hidden  relative">
      <div className="relative w-full h-[200px]">
        <img src={background} alt="background" className='w-full h-full object-cover'/>
      </div>
      <div className="absolute top-[150px] left-0 right-0 flex justify-center">
        <img src={profileImage} alt="profile" className='w-24 h-24 object-cover border-[6px] bg-white border-black p-1 rounded-full z-10 shadow-lg'/>
      </div>
      <div className="pt-16 pb-4 px-5 text-center">
        <h1 className='text-xl font-semibold text-gray-900 dark:text-white mt-4'>{name}</h1>
        <p className='text-gray-600 dark:text-gray-400 mt-2'>{profession}</p>
        <p className='mt-4 text-gray-700 dark:text-gray-300 text-sm'>{description}</p>
        <button onClick={handleProfile} 
          className="inline-block mt-6 text-white bg-[#3D7793]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
