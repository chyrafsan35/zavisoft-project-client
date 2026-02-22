import React from 'react';
import logo from '../../assets/Group 1.png';
import group from '../../assets/Group.png';
import fb from '../../assets/fb.png';
import ig from '../../assets/ig.png';
import twt from '../../assets/twt.png';
import tik from '../../assets/tik.png';

const Footer = () => {
    return (
        <>
            <div className='bg-[#4A69E2] rounded-t-[24px] lg:rounded-[48px] mt-[46px] mx-4 lg:mt-[128px] lg:mx-[60px]'>
                <div className='flex flex-col lg:flex-row gap-[32px] lg:gap-[203px] p-4 lg:pt-16 lg:px-18 mx-auto mb-8'>
                    <div className='w-[326px] lg:w-[510px]'>
                        <h2 className='text-[32px] font-semibold text-white lg:text-[48px] lg:uppercase leading-none mb-4'>
                            Join our KicksPlus <br /> Club & get 15% off
                        </h2>
                        <span className='text-[16px] lg:text-[20px] font-semibold text-white'>Sign up for free! Join the community.</span>
                        <form action="" className='flex items-center gap-1 mt-8'>
                            <input type="text" name="" id="" placeholder='Email address' className='rounded-[8px] px-1 py-1 border border-white bg-transparent text-white'  />
                            <button className='text-[14px] font-medium bg-[#232321] rounded-[8px] py-2 px-4 text-white'>SUBMIT</button>
                        </form>
                    </div>
                    <div className='w-[200px] lg:w-[367px]'>
                        <img className='w-full' src={logo} alt="" />
                    </div>
                </div>

                <div className='flex flex-col bg-[#232321] rounded-t-[24px] lg:rounded-[48px]'>
                    <div className='flex flex-col lg:flex-row text-white gap-[40px] lg:gap-[112px] mt-[40px] mx-4 lg:mx-[40px]'>
                        <div className='max-w-[326px] lg:max-w-[446px]'>
                            <h2 className='text-[#FFA52F] font-semibold text-[24px] lg:text-[36px]'>About us</h2>
                            <span>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</span>
                        </div>
                        <div>
                            <h2 className='text-[#FFA52F] font-semibold text-[24px] lg:text-[36px]'>Categories</h2>
                            <ul className='list-none'>
                                <li>Runners</li>
                                <li>Sneakers</li>
                                <li>Basketball</li>
                                <li>Outdoor</li>
                                <li>Golf</li>
                                <li>Hiking</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-[#FFA52F] font-semibold text-[24px] lg:text-[36px]'>Company</h2>
                            <ul className='list-none'>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-[#FFA52F] font-semibold text-[24px] lg:text-[36px]'>Follow us</h2>
                            <div className='flex gap-4'>
                                <img src={fb} alt="" />
                                <img src={ig} alt="" />
                                <img src={twt} alt="" />
                                <img src={tik} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto mt-[45px] lg:mt-[97px]'>
                        <img src={group} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;