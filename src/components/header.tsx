import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 py-4 sm:py-6 lg:py-8 w-full h-auto bg-white shadow-[0px_1px_0px_#E1E3E6]">
      
      {/* Logo and Navigation Links */}
      <div className="flex flex-row sm:flex-wrap justify-between items-center gap-2 sm:gap-4 md:gap-6 w-full sm:w-auto"> {/* Reduced gap here */}
        {/* Home Link */}
        <div className="text-[#007580] font-inter font-medium text-sm sm:text-[14px] capitalize">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
        </div>
        
        {/* Shop Link */}
        <div className="text-[#007580] font-inter font-medium text-sm sm:text-[14px] capitalize">
          <Link href={"/Shop"}>
            <li>shop</li>
          </Link>
        </div>
        
        {/* Products Link */}
        <div className="text-[#007580] font-inter font-medium text-sm sm:text-[14px] capitalize">
          <Link href={"/Product"}>
            <li>product</li>
          </Link>
        </div>
        
        {/* Pages Link */}
        <div className="text-[#007580] font-inter font-medium text-sm sm:text-[14px] capitalize">
          <Link href={"/Pages"}>
            <li>pages</li>
          </Link>
        </div>
      </div>
      
      {/* About Link */}
      <div className="text-[#007580] font-inter font-medium text-sm sm:text-[14px] capitalize">
        <Link href={"/About"}>
          <li>About</li>
        </Link>
      </div>

      {/* Contact and Phone Number on the right */}
      <div className="flex flex-row items-center mt-4 sm:mt-0 gap-2 sm:gap-4 lg:gap-6 ml-auto">
        {/* Contact Link */}
        <div className="text-sm text-[#636270] capitalize">
          <Link href="/Contact"> {/* Add the URL for the contact page here */}
            Contact
          </Link>
        </div>
        <div className="text-sm font-medium text-[#272343] capitalize">
          (808) 555-0111
        </div>
      </div>
    </div>
  )
}

export default Header;
