"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Cirtus Edge", price: 20, image: "/Frame.webp", quantity: 1 },
    { id: 2, name: "Rose Luxre Armchair", price: 20, image: "/Pinksofa.webp", quantity: 1 },
    { id: 3, name: "Library Stool Chair", price: 20, image: "/Image.webp", quantity: 1 },
  ]);

  const router = useRouter();

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, action: "increase" | "decrease") => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + (action === "increase" ? 1 : -1)) }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Shopping Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">{item.name}</h3>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleQuantityChange(item.id, "decrease")}
              className="w-8 h-8 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 flex items-center justify-center font-bold"
            >
              -
            </button>
            <span className="text-lg font-semibold">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, "increase")}
              className="w-8 h-8 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 flex items-center justify-center font-bold"
            >
              +
            </button>
          </div>
          <span className="text-lg font-semibold text-gray-800">
            ${item.price * item.quantity}
          </span>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <span className="text-xl font-bold text-gray-800">Total</span>
        <span className="text-xl font-bold text-indigo-600">${totalPrice}</span>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={() => router.push("/products")} // Redirect to the desired page
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => alert("Checkout successful!")}
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
