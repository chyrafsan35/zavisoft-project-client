import React from 'react';
import Banner from '../Banner/Banner';
import Showcase from '../Showcase/Showcase';
import Categories from '../Categories/Categories';
import Reviews from '../Reviews/Reviews';

const HomePage = () => {
    return (
        <>
            <div className='max-w-89.5 lg:max-w-330 mx-auto '>
                <span className='text-center font-bold text-[60px] lg:text-[223.5px]'>DO IT <span className='text-[#4A69E2]'>RIGHT</span></span>
                <Banner></Banner>
                <Showcase></Showcase>
            </div>
                <Categories></Categories>
            <div className='max-w-89.5 lg:max-w-330 mx-auto '>
                <Reviews></Reviews>
            </div>
        </>
    );
};

export default HomePage;