import React from 'react';
import Button from '../../../components/Button';

const Reviews = () => {
    return (
        <div>
            <div className='pt-[20px] lg:pt-[128px] pb-[20px] lg:pb-[48px] flex justify-between items-center'>
                <h2 className="text-[#232321] text-2xl lg:text-7xl font-semibold lg:uppercase leading-none">
                    Reviews
                </h2>
                <Button>SEE ALL</Button>
            </div>
        </div>
    );
};

export default Reviews;