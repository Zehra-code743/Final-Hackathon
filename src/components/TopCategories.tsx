import React from 'react';
import Image from 'next/image'; // Ensure you import the Image component

const TopCategories = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      {/* Container for top categories, arrow, and image */}
      <div className="relative flex flex-col items-start justify-center w-full h-full">

        {/* Top Categories Text */}
        <div className="w-auto h-auto font-inter text-[24px] leading-[120%] capitalize text-[#272343] mb-6">
          Top Categories
        </div>

        {/* Arrow (Placeholder) */}
        <div className="w-[100px] h-[40px] mb-6">
          {/* Insert arrow icon or element */}
        </div>

        {/* Category Container (Grid layout for responsiveness) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8">
          
          {/* First Category */}
          <div className="relative w-full h-[350px] bg-white rounded-lg shadow-lg">
            <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/Image3.png"
                alt="Desk Chair"
                width={250}
                height={250}
                className="object-cover w-full h-full rounded-t-lg"
              />
              {/* Text Below Image */}
              <div className="w-[250px] h-[30px] text-[#272343] text-[18px] leading-[120%] capitalize mt-4">
                Desk Chair
              </div>
              <div className="w-[250px] h-[20px] text-[#272343] text-[12px] leading-[120%] capitalize opacity-70 mt-2">
                154 Products
              </div>
            </div>
          </div>

          {/* Second Category */}
          <div className="relative w-full h-[350px] bg-white rounded-lg shadow-lg">
            <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/Image9.png"
                alt="Wooden Chair"
                width={250}
                height={250}
                className="object-cover w-full h-full rounded-t-lg"
              />
              {/* Text Below Image */}
              <div className="w-[250px] h-[30px] text-[#272343] text-[18px] leading-[120%] capitalize mt-4">
                Wooden Chair
              </div>
              <div className="w-[250px] h-[20px] text-[#272343] text-[12px] leading-[120%] capitalize opacity-70 mt-2">
                157 Products
              </div>
            </div>
          </div>

          {/* Third Category */}
          <div className="relative w-full h-[350px] bg-white rounded-lg shadow-lg">
            <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/Frame1.png"
                alt="Wing Chair"
                width={250}
                height={250}
                className="object-cover w-full h-full rounded-t-lg"
              />
              {/* Text Below Image */}
              <div className="w-[250px] h-[30px] text-[#272343] text-[18px] leading-[120%] capitalize mt-4">
                Wing Chair
              </div>
              <div className="w-[250px] h-[20px] text-[#272343] text-[12px] leading-[120%] capitalize opacity-70 mt-2">
                3,584 Products
              </div>
            </div>
          </div>

        </div>

        {/* Info Section (positioned at the bottom of the category grid) */}
        <div className="absolute left-0 right-0 top-[85%] bottom-0 flex flex-col items-start p-4 gap-2 bg-black bg-opacity-80 rounded-b-lg">
          <div className="w-[250px] h-[30px] text-white text-[18px] leading-[120%] capitalize">
            Wooden Chair
          </div>
          <div className="w-[250px] h-[20px] text-white text-[12px] leading-[120%] capitalize opacity-70">
            157 Products
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
