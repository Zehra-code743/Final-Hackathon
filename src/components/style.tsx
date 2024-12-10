'use client'; // If using Next.js 13 or later with app directory

import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1321px] mx-auto px-4 mt-10">
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">

        {/* Main Image and 4 Images Container */}
        <div className="w-[100] lg:w-1/2 flex flex-col gap-6">

          {/* Main Image */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full h-[400px] flex items-center justify-center">
              <Image
                src="/pinksofa.png"
                alt="Main Image"
                width={648}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Featured Products - 4 Images */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6"> 
          {/* Product Box 1 */}
          <div className="w-full h-[200px] bg-gray-400 rounded-md overflow-hidden">
            <Image
              src="/Image1.png"
              alt="Product Image"
              width={312}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Box 2 */}
          <div className="w-full h-[200px] bg-gray-400 rounded-md overflow-hidden">
            <Image
              src="/Image.png"
              alt="Product Image"
              width={312}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Box 3 */}
          <div className="w-[312] h-[200px] bg-gray-400 rounded-md overflow-hidden">
            <Image
              src="/product3.png"
              alt="Product Image"
              width={312}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Box 4 */}
          <div className="w-full h-[200px] bg-gray-400 rounded-md overflow-hidden">
            <Image
              src="/Frame1.png"
              alt="Product Image"
              width={312}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
