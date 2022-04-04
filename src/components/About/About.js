import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div >
            <h1 className='text-5xl font-bold text-center my-5'>This is about page!</h1>
            <div className='flex justify-center items-center py-20'>
                <button onClick={() => navigate('/')} className='bg-purple-500 px-3 py-2 rounded-md'>Back to Home</button>
            </div>
        </div>
    );
};

export default About;