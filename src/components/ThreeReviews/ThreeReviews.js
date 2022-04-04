import React from 'react';

const ThreeReviews = (props) => {
    const { user_name, rating, platform_specific } = props.review;
    return (
        <div>
            <div className='bg-pink-200 drop-shadow-lg rounded-lg p-3 m-5'>
                <h2 className='text-xl font-medium underline'>{user_name}</h2>
                <p>{platform_specific.cons}</p>
                <h3 className='text-medium text-slate-700'>Ratings: {rating}</h3>
            </div>
        </div>
    );
};

export default ThreeReviews;