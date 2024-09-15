import React from 'react';
import Heading from '../../heading/heading';
import Card from '../../cards/card';
import { reviews } from '../../../utils/reviews';

const Reviews = () => {
  return (
    <div>
      <Heading title="CUSTOMER'S " spanElement="REVIEW" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {reviews.map((review,index) => (
          <Card 
            key={index} 
            image={review.image} 
            title={review.name} 
            price={review.review} 
            isbutton = {false}
            variant={"reviews"}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
