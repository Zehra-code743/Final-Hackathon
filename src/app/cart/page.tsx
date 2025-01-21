"use client";
import React, { useState } from "react";
import Image from "next/image";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Library Stool Chair", price: 120, size: "L", quantity: 1, image: "/Frame.webp" },
    { id: 2, name: "Wooden Chair", price: 150, size: "L", quantity: 1, image: "/Image2.webp" },
  ]);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const sizes = ["S", "M", "L", "XL"];

  const updateQuantity = (id :any, action :any) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + (action === "increase" ? 1 : -1)) }
          : item
      )
    );
  };

  const updateSize = (id :any, size :any) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, size } : item)));
  };

  const removeItem = (id :any) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 20; // Fixed discount
  const tax = subtotal * 0.08;
  const total = subtotal - discount + tax;

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setCartItems([]);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 xl:p-10 bg-white">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Shopping Cart</h1>

      {checkoutSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
          <p>Checkout successful! Your order has been placed.</p>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border rounded-md"
            >
              <div className="relative w-full sm:w-32 md:w-20 lg:w-24 xl:w-28 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-sm md:text-base lg:text-lg">{item.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <label className="text-xs sm:text-sm">Size:</label>
                  <select
                    value={item.size}
                    onChange={(e) => updateSize(item.id, e.target.value)}
                    className="border px-2 py-1 text-xs sm:text-sm rounded"
                  >
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, "decrease")}
                  className="border px-2 rounded text-sm sm:text-base"
                >
                  -
                </button>
                <span className="text-sm sm:text-base">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, "increase")}
                  className="border px-2 rounded text-sm sm:text-base"
                >
                  +
                </button>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm sm:text-base">${item.price * item.quantity}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-xs sm:text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="p-4 border rounded-md">
          <h2 className="font-bold mb-4 text-sm sm:text-base md:text-lg">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm sm:text-base">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span>Discount</span>
              <span className="text-green-500">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span>Delivery</span>
              <span className="text-green-500">Free</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-sm sm:text-base">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full mt-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 text-sm sm:text-base"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
