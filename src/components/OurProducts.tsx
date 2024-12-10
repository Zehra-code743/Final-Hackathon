"use client"; // Ensures it's a Client Component
import Link from "next/link"; // Import Link
import Image from "next/image";

const ProductsPage = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Our Products</h2>

      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {/* Product Card 1 */}
        <Link href="/product/1">
          <div className="w-[312px] h-[380px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[240px] bg-yellow-200 rounded-t-lg overflow-hidden">
              <Image
                src="/image1.png"  // Ensure this is correct
                alt="Library Stool Chair"
                width={400}
                height={240}
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

        {/* Product Card 2 */}
        <Link href="/product/2">
          <div className="w-[312px] h-[380px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[240px] bg-blue-200 rounded-t-lg overflow-hidden">
              <Image
                src="/pinksofa.png"  // Ensure this is correct
                alt="Library Stool Chair"
                width={400}
                height={240}
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

        {/* More Product Cards */}
        {/* Ensure other product cards follow the same pattern */}
      </div>
    </div>
  );
};

export default ProductsPage;
