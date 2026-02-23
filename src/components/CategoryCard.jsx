import React from "react";
import { ArrowUpRight } from "lucide-react";

const CategoryCard = ({ item, index }) => {
    return (
        <div
            className={`
        relative bg-[#EDEDED] flex flex-col justify-between 
        h-[348px] p-8 w-[358px] lg:w-[690px] lg:h-[600px]
        ${index === 0 ? "rounded-tl-[40px]" : ""}
      `}
        >
            <img
                src={item.images?.[0]}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 flex justify-between items-center mt-auto">
                <h2 className="text-2xl font-semibold uppercase text-[#232321]">
                    {item.title}
                </h2>

                <button className="w-10 h-10 bg-[#232321] text-white rounded-lg flex items-center justify-center">
                    <ArrowUpRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;