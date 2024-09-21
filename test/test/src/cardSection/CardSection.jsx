import React from 'react';
import { cardsData } from '../utils/cards';
import UserCard from '../components/cards/Card';

const CardSection = () => {
    console.log(cardsData);

    return (
        <div className='flex flex-wrap gap-2'>
            {
                cardsData.map((item,index)=>{
                    return(

                        <UserCard 
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        description={item.description} background={item.background} profession={item.profession} profileImage={item.profileImage} />
                    )
                })
            }
        </div>
    );
};

export default CardSection;
