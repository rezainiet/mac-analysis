import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink';

const Header = () => {
    return (
        <div className='flex justify-center shadow-lg py-5 items-center bg-white'>
            <nav className='font-bold flex'>
                <CustomLink to='/' className='mr-6'>HOME</CustomLink>
                <CustomLink to='/reviews' className='mr-6'>REVIEWS</CustomLink>
                <CustomLink to='/dashboard' className='mr-6'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs' className='mr-6'>BLOGS</CustomLink>
                <CustomLink to='/about' className='mr-6'>ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;