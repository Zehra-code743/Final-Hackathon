'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <div className="px-4 sm:px-12 xl:px-28">
      <div className="bg-gray-100 mx-auto xl:w-[1200px] w-[95%] py-10 xl:h-[700px] flex flex-col md:flex-row items-center justify-center gap-12 rounded-bl-3xl lg:px-8">
  
        {/* Text and Button Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12">
          
          {/* Text Section */}
          <div className="max-w-[557px]">
            <p className="text-sm sm:text-[14px] font-inter mb-4 text-[#272343] uppercase tracking-wider">
              Welcome to Chairy
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[60px] font-inter font-bold text-[#272343] leading-normal">
              Best Furniture Collection For Your Interior.
            </h1>
            <button className="mt-8 font-bold bg-[#029FAE] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#005f5a] transition">
              Shop Now →
            </button>
          </div>

          {/* Chair Image */}
          <div className="mt-8 md:mt-0 flex justify-center w-full max-w-[350px]">
            <Image
              src="/Product Image.png" 
              alt="Chair"
              width={350}
              height={350}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
