"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const ShoppingCart = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "SleekSpin", price: 20, image: "/Image3.webp", quantity: 1 },
    { id: 2, name: "Citrus Edge", price: 20, image: "/Frame.webp", quantity: 1 },
    { id: 3, name: "Rose Luxe Armchair", price: 20, image: "/product2.webp", quantity: 1 },
    { id: 4, name: "SleekSpin", price: 20, image: "/Image3.webp", quantity: 1 },
    { id: 5, name: "Nordic Spin", price: 30, image: "/image5.webp", quantity: 1 },
    { id: 6, name: "Library Stool Chair", price: 20, image: "/Image.webp", quantity: 1 },
    { id: 7, name: "Library Stool Chair", price: 20, image: "/Image.webp", quantity: 1 },
    { id: 8, name: "Scandi Dip Set", price: 40, image: "/Image9.webp", quantity: 1 },
  ]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle checkout process
  const handleCheckout = async () => {
    try {
      // Simulate checkout API call
      const response = await fetch("/api/cart/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // change to urlencoded
        },
        body: new URLSearchParams({
          cartItems: JSON.stringify(cartItems), // send cartItems as a string
          totalPrice: totalPrice.toString(),
        }).toString(),
      });

      // Check if the response is successful
      if (!response.ok) {
        const errorData = await response.text(); // get error message
        throw new Error(errorData || "Something went wrong during checkout.");
      }

      // Parse the response data
      const data = await response.text();

      // Clear the cart after successful checkout
      setCartItems([]);
      alert(data || "Checkout successful!");

      // Redirect to thank you page after successful checkout
      router.push("/thank-you");
    } catch (error) {
      // Handle error without breaking the user experience
      console.error("Checkout failed:", error);
      alert("There was an issue with the checkout process. Please try again.");
    }
  };

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
              <button
                onClick={() =>
                  setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
                }
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={() =>
                setCartItems(
                  cartItems.map((cartItem) =>
                    cartItem.id === item.id && cartItem.quantity > 1
                      ? { ...cartItem, quantity: cartItem.quantity - 1 }
                      : cartItem
                  )
                )
              }
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() =>
                setCartItems(
                  cartItems.map((cartItem) =>
                    cartItem.id === item.id
                      ? { ...cartItem, quantity: cartItem.quantity + 1 }
                      : cartItem
                  )
                )
              }
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
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
          onClick={handleCheckout}
          className="bg-indigo-600 text-white py-2 px-6 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
