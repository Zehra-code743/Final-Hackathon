import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FeatureProduct = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-4 py-8">
      <h2 className="text-left text-2xl sm:text-3xl md:text-3xl flex justify-between font-semibold w-[286px] h-[35px] mb-8">
        Feature Product
      </h2>
  
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        {/* Product Card 1 */}
        <Link href="/product/1">
          <div className="w-full h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-yellow-200 rounded-t-lg overflow-hidden">
              <Image
                src="/Image.png"
                alt="Library Stool Chair"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-10 bg-gray-400 mt-2"></div> {/* Placeholder for cart logo */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium">Library Stool Chair</h3>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
            </div>
          </div>
        </Link>
  
        {/* Product Card 2 */}
        <Link href="/product/2">
          <div className="w-full h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-blue-200 rounded-t-lg overflow-hidden">
              <Image
                src="/pinksofa.png"
                alt="Library Stool Chair"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-10 bg-gray-400 mt-2"></div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium">Library Stool Chair</h3>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
            </div>
          </div>
        </Link>
  
        {/* Product Card 3 */}
        <Link href="/product/3">
          <div className="w-full h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-green-200 rounded-t-lg overflow-hidden">
              <Image
                src="/Frame.png"
                alt="Library Stool Chair"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-10 bg-gray-400 mt-2"></div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium">Library Stool Chair</h3>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
            </div>
          </div>
        </Link>
  
        {/* Product Card 4 */}
        <Link href="/product/4">
          <div className="w-full h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-red-200 rounded-t-lg overflow-hidden">
              <Image
                src="/Product4.png"
                alt="Library Stool Chair"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-10 bg-gray-400 mt-2"></div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium">Library Stool Chair</h3>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeatureProduct;
