import React from 'react';
import Banner from '../Banner/Banner';

const HomePage = () => {
    return (
        <>
            <div className='max-w-89.5 lg:max-w-330 mx-auto '>
                <span className='text-center font-bold text-[60px] lg:text-[223.5px]'>DO IT <span className='text-[#4A69E2]'>RIGHT</span></span>
                <Banner></Banner>
            </div>
        </>
    );
};

export default HomePage;