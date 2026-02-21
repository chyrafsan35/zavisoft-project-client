import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='text-[14px] text-white bg-[#4A69E2] py-2 px-4 lg:px-8 font-medium rounded-lg '>{children}</button>
    );
};

export default Button;