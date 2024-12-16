// components/ComfortyComponent.jsx
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Middle() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center border-t-2 bg-[#F0F2F3] p-4 space-y-4 sm:space-y-0 justify-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="/theLogo.webp" alt="Comforty Logo" className="h-8 w-8" />
        <span className="font-semibold text-gray-700 text-base sm:text-lg lg:text-xl">Comforty</span>
      </div>

      {/* Cart Button Section */}
      <div className="flex items-center">
        <Link href="/cart" passHref>
          <button className="relative bg-gray-200 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg font-medium hover:bg-gray-300 flex items-center space-x-2">
            <FaShoppingCart className="text-gray-600 text-base sm:text-lg" />
            <span>Cart</span>
            <span className="ml-2 inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-teal-500 text-white rounded-full">
              0
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
