"use client";
import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Library Stool Chair", price: 120, size: "L", quantity: 1, image: "/Frame.webp" },
    { id: 2, name: "wooden chair", price: 150, size: "L", quantity: 1, image: "/Image2.webp" },
  ]);

  const availableSizes = ["S", "M", "L", "XL"]; // Define available sizes

  const handleQuantityChange = (id: any, action: any) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = action === "increase" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(newQuantity, 1) };
        }
        return item;
      })
    );
  };

  const handleSizeChange = (id: any, size: string) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, size } : item))
    );
  };

  const handleRemove = (id: any) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 20; // Example discount
  const tax = subtotal * 0.08; // Example tax rate: 8%
  const total = subtotal - discount + tax;

  const handleCheckout = () => {
    alert("Proceeding to Member Checkout...");
    // Add navigation logic here
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">Bag</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-500">Ashen Slate / Cobalt Bliss</p>
                <div className="flex items-center gap-2 mt-2">
                  <label htmlFor={`size-${item.id}`} className="text-sm text-gray-500">
                    Size:
                  </label>
                  <select
                    id={`size-${item.id}`}
                    value={item.size}
                    onChange={(e) => handleSizeChange(item.id, e.target.value)}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    {availableSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.id, "decrease")}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, "increase")}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
              <div className="text-right">
                <p className="font-bold">MRP: ${item.price * item.quantity}</p>
                <button onClick={() => handleRemove(item.id)} className="text-red-500 mt-2">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="p-4 border rounded-lg">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-green-600">Free</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <p className="text-green-600 mt-2 text-sm">You saved $20.00 on this order!</p>
          <button
            onClick={handleCheckout}
            className="w-full mt-4 py-2 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700"
          >
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
