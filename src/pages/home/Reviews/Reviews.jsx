import React from 'react';
import Button from '../../../components/Button';
import img1 from '../../../assets/image 38.png';
import img2 from '../../../assets/img 39.png';
import img3 from '../../../assets/img 40.png';
import pro from '../../../assets/profile1.jpg';
import pro2 from '../../../assets/pro2.png';
import pro3 from '../../../assets/pro3.png';
import { Star } from "lucide-react";

const Reviews = () => {
    return (
        <div>
            <div className='pt-[20px] lg:pt-[128px] pb-[20px] lg:pb-[48px] flex justify-between items-center'>
                <h2 className="text-[#232321] text-2xl lg:text-7xl font-semibold lg:uppercase leading-none">
                    Reviews
                </h2>
                <Button>SEE ALL</Button>
            </div>

            <div className='flex flex-col lg:flex-row gap-4'>
                <div className="bg-[#EDEDED] rounded-[28px] overflow-hidden w-[358px] h-[339px] lg:w-[429px] lg:h-[501px]">

                    <div className="p-6 lg:p-8 flex justify-between items-start">

                        <div>
                            <h3 className="text-[20px] lg:text-[28px] font-semibold text-[#232321] leading-none">
                                Good Quality
                            </h3>

                            <p className="mt-2 text-gray-600 text-base lg:text-lg leading-none">
                                I highly recommend shopping from kicks
                            </p>

                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-lg font-medium text-[#232321]">
                                    5.0
                                </span>
                            </div>
                        </div>

                        <img
                            src={pro}
                            alt="user"
                            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                        />
                    </div>

                    <img
                        src={img1}
                        alt="shoe"
                        className="w-full h-[260px] lg:h-[350px] object-contain"
                    />
                </div>
                <div className="bg-[#EDEDED] rounded-[28px] overflow-hidden w-[358px] h-[339px] lg:w-[429px] lg:h-[501px] hidden lg:block">

                    <div className="p-6 lg:p-8 flex justify-between items-start">

                        <div>
                            <h3 className="text-[20px] lg:text-[28px] font-semibold text-[#232321] leading-none">
                                Good Quality
                            </h3>

                            <p className="mt-2 text-gray-600 text-base lg:text-lg leading-none">
                                I highly recommend shopping from kicks
                            </p>

                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-lg font-medium text-[#232321]">
                                    5.0
                                </span>
                            </div>
                        </div>

                        <img
                            src={pro2}
                            alt="user"
                            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                        />
                    </div>

                    <img
                        src={img2}
                        alt="shoe"
                        className="w-full h-[260px] lg:h-[350px] object-cover"
                    />
                </div>
                <div className="bg-[#EDEDED] rounded-[28px] overflow-hidden w-[358px] h-[339px] lg:w-[429px] lg:h-[501px] hidden lg:block">

                    <div className="p-6 lg:p-8 flex justify-between items-start">

                        <div>
                            <h3 className="text-[20px] lg:text-[28px] font-semibold text-[#232321] leading-none">
                                Good Quality
                            </h3>

                            <p className="mt-2 text-gray-600 text-base lg:text-lg leading-none">
                                I highly recommend shopping from kicks
                            </p>

                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-lg font-medium text-[#232321]">
                                    5.0
                                </span>
                            </div>
                        </div>

                        <img
                            src={pro3}
                            alt="user"
                            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                        />
                    </div>

                    <img
                        src={img3}
                        alt="shoe"
                        className="w-full h-[260px] lg:h-[350px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reviews;