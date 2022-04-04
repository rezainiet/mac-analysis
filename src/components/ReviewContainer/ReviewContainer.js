import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeReviews from '../ThreeReviews/ThreeReviews';

const ReviewContainer = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const navigate = useNavigate();
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-3xl font-bold text-black text-center'>Customer Reviews (3)</h1>
            </div>
            <div className='flex'>
                {
                    reviews.slice(0, 3).map(review => <ThreeReviews key={review.platform_specific.cons} review={review}></ThreeReviews>)
                }
            </div>
            <div className='flex items-center justify-center mb-10'>
                <button onClick={() => navigate("/reviews")} className='bg-purple-600 px-6 rounded text-white py-1'>See All Reviews</button>
            </div>
        </div >
    );
};

export default ReviewContainer;