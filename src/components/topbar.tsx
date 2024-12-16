import React from "react";
import Link from "next/link"; // Import Link from Next.js

const TopBar = () => {
  return (
    <div className="bg-[#272343] text-gray-300 text-sm py-2 px-4 flex justify-center items-center">
      <div className="flex w-full max-w-screen-xl justify-center items-center text-center">
        {/* Left side: Shipping message */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <span className="mr-2">✅</span>
          <span className="text-xs sm:text-sm md:text-base">
            Free Shipping On All Orders Over $50
          </span>
        </div>

        {/* Right side: Language selector, FAQs link, Need Help */}
        <div className="flex items-center space-x-4 ml-16"> {/* Increased left margin */}
          <button className="text-xs sm:text-sm md:text-base hover:text-white transition ml-4">
            Eng ▼
          </button>

          {/* FAQs link */}
          <Link
            href="/Faqs"
            className="text-xs sm:text-sm md:text-base hover:text-white transition ml-4"
          >
            Faqs
          </Link>

          {/* Need Help link */}
          <a
            href="#"
            className="text-xs sm:text-sm md:text-base hover:text-white transition ml-4"
          >
            Need Help
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
