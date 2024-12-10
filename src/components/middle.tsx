"use client"
import React from 'react';
import Image from 'next/image';  // Import the Image component from Next.js
import { IoCartOutline } from "react-icons/io5";
import { IoEllipseOutline } from "react-icons/io5";

const Middle = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32 py-4 sm:py-6 md:py-8 gap-4 w-full bg-[#F0F2F3] relative z-10">
      {/* Logo Section */}
      <div className="flex flex-row items-center gap-2 sm:gap-4 z-20">
        <div className="w-[26px] h-[26px]">
          {/* Logo Image */}
          <Image src="/asseets/thelogo.png" alt="Logo" width={26} height={26} />
        </div>
        {/* Comforty Text */}
        <p className="text-[#272343] font-inter font-medium text-[15px] sm:text-[18px] leading-[120%]">
          Comforty
        </p>
      </div>

      {/* Cart Section - Move it further back */}
      <div className="absolute right-4 sm:right-12 md:right-16 lg:right-32 flex flex-row items-center gap-3 z-0">
        {/* White Box */}
        <div className="flex flex-row items-center gap-3 px-4 py-2 bg-white rounded-lg w-auto h-[44px] justify-center relative">
          {/* Cart Icon */}
          <IoCartOutline className="text-[#272343] w-5 h-5" />

          {/* Cart Text */}
          <div className="text-[#272343] font-inter font-medium text-[12px] sm:text-[14px] leading-[110%] capitalize">
            Cart
          </div>

          {/* Notification (No and Badge) */}
          <div className="relative flex items-center justify-center w-[20px] h-[20px]">
            {/* Ellipse with Notification number inside */}
            <IoEllipseOutline className="text-[#272343] w-[20px] h-[20px]" />

            {/* Notification number (2) inside the ellipse */}
            <div className="absolute text-white text-[10px] font-medium left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
