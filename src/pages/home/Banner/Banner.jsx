import React from 'react';
import banner from '../../../assets/shoe.jpg'
import top from '../../../assets/top_img.jpg'
import bottom from '../../../assets/bottom_img.jpg'
import Button from '../../../components/Button';

const Banner = () => {
    return (
        <div className='h-95.5 lg:h-187.5 relative'>
            <img className='rounded-3xl lg:rounded-[64px] w-full h-full object-cover' src={banner} alt="" />
            <div className='absolute inset-0 rounded-3xl lg:rounded-[64px] 
                            bg-linear-to-t from-black/70 via-black/30 to-transparent'>
            </div>
            <div className='absolute top-46 font-semibold left-0 lg:top-80 text-[12px] lg:text-[16px] text-white bg-[#232321] rotate-270 rounded-bl-2xl rounded-br-2xl p-2 lg:p-6 gap-2.5 origin-top-left'>
                <h2 className=''>Nike product of the year</h2>
            </div>
            <div className='absolute bottom-4 left-4 lg:bottom-12 lg:left-12 w-58.75 h-26.5 lg:w-122.5 lg:h-56.5 text-white'>
                <h2 className='font-semibold text-[24px] lg:text-[74px] m-0'>NIKE AIR MAX</h2>
                <h2 className='font-semibold text-[14px] lg:text-[24px] m-0 max-w-49.25 max-h-9.5 lg:max-w-122.5 lg:max-h-56.5 leading-none'>Nike introducing the new air max for everyone's comfort</h2>
                <div className='mt-2 lg:mt-6'>
                    <Button>SHOP NOW</Button>
                </div>
            </div>
            <div className='flex flex-col gap-2 lg:gap-4 absolute bottom-4 right-4 lg:bottom-8 lg:right-8'>
                <img className='w-8 h-8 object-cover lg:w-40 lg:h-40 rounded-lg lg:rounded-4xl border lg:border-[3px] border-white lg:border-white-[3px]' src={top} alt="" />
                <img className='w-8 h-8 object-cover lg:w-40 lg:h-40 rounded-lg lg:rounded-4xl border lg:border-[3px] border-white lg:border-white-[3px]' src={bottom} alt="" />
            </div>
        </div>
    );
};

export default Banner;