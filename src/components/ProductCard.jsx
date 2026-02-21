import React from "react";

const ProductCard = ({ shoe }) => {
    return (
        <div className="w-42.75 lg:w-79.5 h-75.25 lg:h-121.5 flex flex-col">

            <div className="relative bg-[#EDEDED] p-2 rounded-2xl lg:rounded-[28px]">

                <div className="absolute top-0 left-0 bg-[#4A69E2] text-white 
                        px-2 py-1 lg:py-3 lg:px-4 rounded-br-[13px] rounded-tl-xl
                        text-[12px] font-semibold">
                    New
                </div>

                <img
                    src={shoe.category.image}
                    alt={shoe.title}
                    className="w-full object-contain rounded-xl lg:rounded-3xl"
                />
            </div>

            {/* Title */}
            <h2 className="mt-4 text-[16px] lg:text-[24px] font-semibold uppercase leading-none text-[#232321]">
                {shoe.title}
            </h2>

            {/* Button */}
            <button className="mt-auto w-full bg-[#232321] text-white 
                         py-2 px-4 rounded-lg font-medium text-[12px] lg:text-[14px] 
                         hover:bg-gray-800 transition duration-300">
                VIEW PRODUCT - <span className="text-orange-400">${shoe.price}</span>
            </button>

        </div>
    );
};

export default ProductCard;