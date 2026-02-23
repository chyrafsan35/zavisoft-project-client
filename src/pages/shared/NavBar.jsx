import React from 'react';
import Search from '../../assets/Search.svg'
import User from '../../assets/User.svg'
import Logo from '../../assets/logo.svg'
import arrowDown from '../../assets/caret_down.png'
import menu from '../../assets/heroicons_bars-3-20-solid.svg'
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <>
            <div className='max-w-89.5 max-h-13 lg:max-w-330 lg:max-h-24 bg-[#FAFAFA] p-4 rounded-xl lg:rounded-3xl mt-8 mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img className='w-5 h-5 lg:hidden' src={menu} alt="" />
                        <div className='w-79.75 h-4.75 hidden lg:block'>
                            <ul className='list-none flex flex-1 gap-10 font-semibold text-[16px]'>
                                <li>New Drops 🔥</li>
                                <li className='flex items-center'>Men<img className='w-3 h-3' src={arrowDown} /> </li>
                                <li className='flex items-center'>Women<img className='w-3 h-3' src={arrowDown} /> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-20 h-5 lg:w-32 lg:h-8'>
                        <Link to={'/'}><img src={Logo} alt="" /></Link>
                    </div>
                    <div className='flex justify-end w-11.25 h-5 lg:w-75.25 lg:h-8 items-center gap-2 lg:gap-10'>
                        <img className='hidden lg:block' src={Search} alt="" />
                        <img src={User} alt="" />
                        <div className='w-5 lg:w-8 h-5 lg:h-8 bg-[#FFA52F] text-[#232321] rounded-full flex items-center justify-center'>
                            <span className='p-2.5'>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;