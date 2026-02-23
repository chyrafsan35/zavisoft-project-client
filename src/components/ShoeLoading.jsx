// components/ShoeLoading.jsx
import React from "react";
import shoe from "../assets/jogging.png"

const ShoeLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
            <img src={shoe} alt="" />
            <p className="mt-4 text-gray-600 text-sm animate-pulse">Loading Shoes...</p>
        </div>
    );
};

export default ShoeLoading;