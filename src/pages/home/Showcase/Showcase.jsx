import React from 'react';
import Button from '../../../components/Button';

const Showcase = () => {
    return (
        <>
            <div className='mt-6 lg:mt-22.5 flex justify-between items-center lg:items-end'>
                <div className='font-semibold text-[24px] text-[#232321] lg:text-[74px] lg:uppercase leading-none'>
                    <h2>Don't miss out</h2>
                    <h2>new drops</h2>
                </div>
                <Button>SHOP NEW DROPS</Button>
            </div>

            <div className='mt-6 lg:mt-8 grid grid-cols-2 lg:grid-cols-4 space-x-4 space-y-6'>
                <h2>Hi</h2>
            </div>
        </>
    );
};

export default Showcase;