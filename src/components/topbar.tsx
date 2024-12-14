import Link from "next/link";

const TopBar = () => {
  return (
    <div className="bg-[#272343] text-white text-sm py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section */}
        <div className="flex items-center">
          <span className="mr-2">✓</span>
          <p>Free Shipping On All Orders Over $50</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <Link href="/pages" className="hover:underline">
            Pages
          </Link>
          <Link href="/FAQ" className="hover:underline">
            FAQ
          </Link>
          <a href="#" className="hover:underline">
            Need Help
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
