// components/HeroSection.js

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 flex flex-col-reverse lg:flex-row items-center justify-between mx-auto px-6 py-12 lg:py-24 max-w-7xl">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <p className="text-sm text-gray-500 mb-2 uppercase">Welcome to Chairy</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Best Furniture Collection For Your Interior.
        </h1>
        <button className="mt-4 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-all duration-300">
          Shop Now →
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Image
          src="/chair2.png"
          alt="Furniture Chair"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection; // Correct export
