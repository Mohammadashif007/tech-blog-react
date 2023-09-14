import React from 'react';
import profile_img from '../../assets/images/images.jpeg';

const Header = () => {
    return (
        <div className='flex justify-between p-5 container mx-auto border-b'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img className='rounded-full h-16 w-16' src={profile_img} alt="" />
        </div>
    );
};

export default Header;