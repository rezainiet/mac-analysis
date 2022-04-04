import React, { useEffect, useState } from 'react';
import AllReviewsContainer from '../AllReviewsContainer/AllReviewsContainer';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <div>
                <h1 className='text-3xl font-semibold text-center my-5'>What our customer says!</h1>
            </div>
            <div className='grid grid-cols-3'>
                {
                    reviews.map(review => <AllReviewsContainer key={review.platform_specific.cons} review={review}></AllReviewsContainer>)
                }
            </div>
        </div>
    );
};

export default Reviews;