// components/Header.js

import Image from "next/image";

const middle = () => {
  return (
    <header className="bg-gray-100 w-full shadow-md py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Image
            src="/theLogo.png" // Replace with your actual logo path in the "public" folder
            alt="Logo"
            width={30}
            height={30}
            className="mr-2"
          />
          <span className="text-gray-800 font-semibold text-lg">Comforty</span>
        </div>

        {/* Right Section: Cart */}
        <div className="relative">
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <Image
              src="/Icon.png" // Replace with your actual cart icon path in the "public" folder
              alt="Cart"
              width={24}
              height={24}
              className="mr-1"
            />
            <span className="text-sm">Cart</span>
            <span className="bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ml-1">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default middle;
