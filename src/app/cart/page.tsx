'use client'; // If using Next.js 13 or later with app directory

import Image from "next/image";

const Cart = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column for Cart Items */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Bag</h2>

          {/* Item 1 */}
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-orange-200 rounded">
                <Image src="/Frame.png" alt="Library Stool Chair" width={96} height={96} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">$99</p>
              <p className="text-sm text-gray-500">MRP</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142C18.098 20.403 17.11 21 16.052 21H7.948c-1.058 0-2.046-.597-2.081-1.858L5 7m2 0l1-3h8l1 3m-6 5v6m4-6v6M9 7h6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gray-300 rounded">
                <Image src="/Frame1.png" alt="Library Stool Chair" width={96} height={96} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">$99</p>
              <p className="text-sm text-gray-500">MRP</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142C18.098 20.403 17.11 21 16.052 21H7.948c-1.058 0-2.046-.597-2.081-1.858L5 7m2 0l1-3h8l1 3m-6 5v6m4-6v6M9 7h6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column for Cart Summary */}
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-semibold text-gray-800">$198</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Estimated Delivery & Handling</span>
              <span className="font-semibold text-gray-800">$15</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Taxes</span>
              <span className="font-semibold text-gray-800">$18</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="text-xl font-bold text-gray-800">Total</span>
              <span className="text-xl font-bold text-gray-800">$231</span>
            </div>
          </div>
          
          {/* Checkout Button */}
          <button className="w-full mt-6 bg-[#029FAE] text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
 member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
