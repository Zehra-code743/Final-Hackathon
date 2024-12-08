import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";

const Topbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32 py-3 sm:py-4 md:py-6 lg:py-8 w-full h-[60px] bg-[#272343]">
      {/* Text and Icon on the left */}
      <div className="flex items-center gap-2 w-full sm:w-[250px] h-[16px] opacity-[0.7] mb-2 sm:mb-0">
        <div className="flex items-center gap-2">
          {/* FaCheck Icon */}
          <FaCheck className="text-white w-4 h-4" />
          {/* Text */}
          <div className="w-full sm:w-[230px] h-[14px] font-inter text-[13px] leading-[14px] capitalize text-white">
            <p>Free shipping on all orders over $50</p>
          </div>
        </div>
      </div>

      {/* Language Selector, Faqs, Need Help, and Alert Icon */}
      <div className="flex flex-row sm:flex-row items-center gap-4 opacity-[0.7]">
        {/* Text for Eng */}
        <div className="w-[24px] h-[17px] text-white text-[13px] leading-[130%] text-center font-inter">
          <p>Eng</p>
        </div>

        {/* Larger Dropdown Icon */}
        <RiArrowDropDownLine className="text-white w-[20px] h-[15px]" />

        {/* Faqs */}
        <div className="w-[50px] h-[17px] text-white text-[13px] leading-[130%] text-center font-inter">
          <p>Faqs</p>
        </div>

        {/* Need Help and Alert Icon - Circle Icon on the Left */}
        <div className="flex flex-row items-center gap-2 w-auto h-[17px]">
          <div className="w-[16px] h-[16px] opacity-[0.7]">
            <CiCircleAlert className="text-white w-[16px] h-[16px]" />
          </div>
          <p className="text-white text-[13px] leading-[130%] font-inter">Need Help</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
