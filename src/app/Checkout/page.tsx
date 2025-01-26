"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalAmount, setTotalAmount] = useState<string>("");
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const searchParams = useSearchParams();

  useEffect(() => {
    // Retrieve cart data and total amount from query parameters
    const cartData = searchParams.get("cart");
    const total = searchParams.get("total");

    if (cartData && total) {
      setCartItems(JSON.parse(cartData));
      setTotalAmount(total);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    // You can further handle the form submission by sending data to an API or server
  };

  return (
    <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">
        Checkout
      </h2>

      {/* Order Summary */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">Your Order Summary</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total: ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <span className="font-semibold">Quantity: {item.quantity}</span>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-800 font-semibold">
                  ${cartItems.reduce(
                    (acc, item: any) => acc + item.price * item.quantity,
                    0
                  ).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Total:</span>
                <span className="text-indigo-600 text-lg font-semibold">
                  ${totalAmount}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Shipping Address Form */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">Shipping Address</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={shippingAddress.name}
              onChange={handleChange}
              className="border p-2 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="font-semibold">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingAddress.address}
              onChange={handleChange}
              className="border p-2 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="font-semibold">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={shippingAddress.city}
              onChange={handleChange}
              className="border p-2 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="postalCode" className="font-semibold">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={shippingAddress.postalCode}
              onChange={handleChange}
              className="border p-2 rounded-md"
              required
            />
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-6 py-2 rounded"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
