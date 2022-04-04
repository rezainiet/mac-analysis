import React from 'react';

const MacContainer = () => {
    return (
        <div className='flex items-center px-10 py-5'>
            <div className='justify-center items-center'>
                <h1 className='text-5xl font-bold'>Your Next Mac <br /> <span className='text-fuchsia-500'>Is The Best Mac!</span></h1>
                <p className='my-5 font-normal text-zinc-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit quibusdam suscipit debitis, repudiandae sunt voluptatem, cupiditate ipsum delectus perspiciatis, molestias similique. Quidem, possimus aliquam amet voluptas in quia necessitatibus?</p>
                <button className='bg-indigo-300 text-white my-3 mx-3 font-medium px-5 py-3 rounded-md'>LIVE DEMO</button>
            </div>
            <div>
                <img src="mac.jpeg" alt="" />
            </div>
        </div>
    );
};

export default MacContainer;