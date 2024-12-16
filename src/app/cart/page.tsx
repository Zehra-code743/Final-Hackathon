// pages/cart.js (or wherever your CartPage component is)

import Image from "next/image";
import Header from "@/components/header"; // Adjust the import path if necessary
import Footer from "@/components/footer"; // Adjust the import path if necessary

const cartItems = [
  {
    id: 1,
    name: "Library Stool Chair",
    image: "/Frame.webp", // Replace with the actual image path
    price: 99,
    size: "L",
    quantity: 1,
  },
  {
    id: 2,
    name: "Library Stool Chair",
    image: "/image5.webp", // Replace with the actual image path
    price: 99,
    size: "L",
    quantity: 1,
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const tax = (subtotal * 0.08).toFixed(2); // Assuming 8% tax
  const discount = 20; // Flat discount for demonstration
  const total = (subtotal - discount + parseFloat(tax)).toFixed(2);

  return (
    <div>
      {/* Render Header */}
      <Header />

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Bag Section */}
        <div className="lg:w-3/4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bag</h2>

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b pb-6"
              >
                {/* Item Image */}
                <div className="w-32 h-32 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md shadow-md"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Ashen Slate / Cobalt Bliss
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Size: {item.size} &nbsp; | &nbsp; Quantity: {item.quantity}
                  </p>
                </div>

                {/* Price & Actions */}
                <div className="text-right space-y-2">
                  <p className="text-gray-800 font-bold">MRP: ${item.price}</p>
                  <div className="flex items-center gap-4 justify-end">
                    <button
                      className="text-gray-500 hover:text-gray-800"
                      aria-label="Add to Wishlist"
                    >
                      &#x2764; {/* Heart Icon */}
                    </button>
                    <button
                      className="text-gray-500 hover:text-gray-800"
                      aria-label="Remove Item"
                    >
                      🗑️ {/* Trash Icon */}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="lg:w-1/3 bg-gray-50 rounded-lg p-6 shadow-md self-start">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>

          {/* Subtotal */}
          <div className="flex justify-between text-gray-700 text-base mb-2">
            <span>Subtotal</span>
            <span>${subtotal}.00</span>
          </div>

          {/* Discount */}
          <div className="flex justify-between text-gray-700 text-base mb-2">
            <span>Discount</span>
            <span>-${discount}.00</span>
          </div>

          {/* Tax */}
          <div className="flex justify-between text-gray-700 text-base mb-2">
            <span>Tax (8%)</span>
            <span>${tax}</span>
          </div>

          {/* Delivery */}
          <div className="flex justify-between text-gray-700 text-base mb-2">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          {/* Total */}
          <div className="flex justify-between font-bold text-gray-800 text-lg mt-4 border-t pt-4">
            <span>Total</span>
            <span>${total}</span>
          </div>

          {/* Savings */}
          <p className="text-sm text-green-600 mt-2">
            You saved ${discount}.00 on this order!
          </p>

          {/* Checkout Button */}
          <button className="w-full bg-[#029FAE] text-white text-center py-3 rounded-md mt-6 font-semibold text-base hover:bg-green-600 transition duration-300">
            Member Checkout
          </button>
        </div>
      </div>

      {/* Render Footer */}
      <Footer />
    </div>
  );
}
