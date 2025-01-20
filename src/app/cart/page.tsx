"use client";
import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Library Stool Chair", price: 120, size: "L", quantity: 1, image: "/Frame.webp" },
    { id: 2, name: "Wooden Chair", price: 150, size: "L", quantity: 1, image: "/Image2.webp" },
  ]);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false); // State to track checkout success

  const sizes = ["S", "M", "L", "XL"];

  const updateQuantity = (id: number, action: "increase" | "decrease") => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + (action === "increase" ? 1 : -1)) }
          : item
      )
    );
  };

  const updateSize = (id: number, size: string) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, size } : item)));
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 20; // Fixed discount
  const tax = subtotal * 0.08;
  const total = subtotal - discount + tax;

  const handleCheckout = () => {
    // Simulate a successful checkout process
    setCheckoutSuccess(true);
    // Optionally, clear the cart after checkout success
    setCartItems([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-xl font-bold mb-6">Shopping Cart</h1>

      {checkoutSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
          <p>Checkout successful! Your order has been placed.</p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border rounded-md">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h2 className="font-bold">{item.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <label className="text-sm">Size:</label>
                  <select
                    value={item.size}
                    onChange={(e) => updateSize(item.id, e.target.value)}
                    className="border px-2 py-1 text-sm rounded"
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
                <button onClick={() => updateQuantity(item.id, "decrease")} className="border px-2 rounded">
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, "increase")} className="border px-2 rounded">
                  +
                </button>
              </div>
              <div className="text-right">
                <p className="font-bold">${item.price * item.quantity}</p>
                <button onClick={() => removeItem(item.id)} className="text-red-500 text-sm">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="p-4 border rounded-md">
          <h2 className="font-bold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-500">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-green-500">Free</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full mt-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
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
