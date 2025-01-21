import Link from "next/link"; // Importing Link from Next.js

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-center mb-4 lg:mb-0">
          <Link href="/" className="text-teal-500 hover:text-teal-700">
            Home
          </Link>
          <Link href="/Shop" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/Product" className="text-gray-700 hover:text-gray-900">
            Product
          </Link>
          <Link href="/Pages" className="text-gray-700 hover:text-gray-900">
            Pages
          </Link>
          <Link href="/About" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/Checkout" className="text-gray-700 hover:text-gray-900">
            Checkout
          </Link>
          <Link href="/shoppingcart" className="text-gray-700 hover:text-gray-900">
            Shopping Cart
          </Link>
        </div>

        {/* Right side contact information and Login */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-4 lg:space-y-0">
          {/* Contact information */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Contact:</span>
            <Link href="/Contact">
              <span className="text-gray-500 hover:text-gray-700">
                (808) 555-0111
              </span>
            </Link>
          </div>

          {/* Login Button */}
          <Link href="/Login">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
