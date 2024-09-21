import React from 'react';
import { useParams } from 'react-router-dom';
import { cardsData } from '../utils/cards';
import background from '../../public/bg.png';

const Profile = () => {
    const { id } = useParams();
    const user = cardsData.find((item) => item.id === parseInt(id));

    if (!user) {
        return (
            alert("data not found")
        );
    }

    return (
        <div className="max-w-[80%] m-auto p-6">
            <div className="grid grid-cols-2 items-center">
                <div className="relative">
                    {/* Background Image */}
                    <img src={background} alt="Background" className="w-full h-auto" />
                    
                    {/* User Profile Image */}
                    <img 
                        src={user.profileImage} 
                        alt={user.name} 
                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-40 h-40 rounded-lg  object-cover"
                    />
                </div>
                <div className="pl-6 text-start">
                    <h1 className="text-3xl font-bold mb-10">{user.name}</h1>
                    <h4 className="text-xl text-gray-500">{user.profession}</h4>
                    <p className="mt-4">{user.description}</p>
                    <button 
                        type="button" 
                        className="text-white bg-[#EED0EA] hover:bg-pink-300 focus:ring-4 font-medium text-sm px-5 py-2.5 mt-4 focus:outline-none"
                    >
                        Buy me a coffee
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
