"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const ShoppingCart = () => {
  const router = useRouter();

  const cartItems = [
    { id: 1, name: "Citrus Edge", price: 20, image: "/Frame.webp", quantity: 1 },
    { id: 2, name: "Rose Luxe Armchair", price: 20, image: "/pinksofa.webp", quantity: 1 },
    { id: 3, name: "Library Stool Chair", price: 20, image: "/Image.webp", quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Your Shopping Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="object-cover rounded"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <button className="text-red-500 text-sm">Remove</button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button className="px-2 py-1 bg-gray-200 rounded">-</button>
            <span>{item.quantity}</span>
            <button className="px-2 py-1 bg-gray-200 rounded">+</button>
          </div>
          <span className="font-semibold">${item.price * item.quantity}</span>
        </div>
      ))}

      <div className="flex justify-between mt-6 border-t pt-4">
        <span className="text-xl font-bold">Total</span>
        <span className="text-xl font-bold text-indigo-600">${totalPrice}</span>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
        <button
          onClick={() => router.push("/products")}
          className="bg-gray-200 py-2 px-4 rounded"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => alert("Checkout successful!")}
          className="bg-indigo-600 text-white py-2 px-6 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
