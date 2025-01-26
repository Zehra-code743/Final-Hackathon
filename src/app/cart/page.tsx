// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Citrus Edge", price: 20, size: "L", quantity: 1, image: "/Frame.webp" },
//     { id: 2, name: "Rose Luxe Armchair", price: 20, size: "L", quantity: 1, image: "/product2.webp" },
//     { id: 3, name: "Library Stool Chair", price: 20, size: "L", quantity: 1, image: "/product1.webp" },
//     { id: 4, name: "Library Stool Chair", price: 20, size: "L", quantity: 1, image: "/product1.webp" },
//   ]);
//   const [checkoutSuccess, setCheckoutSuccess] = useState(false);

//   const sizes = ["S", "M", "L", "XL"];

//   const updateQuantity = (id: any, action: any) => {
//     setCartItems((items) =>
//       items.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(1, item.quantity + (action === "increase" ? 1 : -1)) }
//           : item
//       )
//     );
//   };

//   const updateSize = (id: any, size: any) => {
//     setCartItems((items) => items.map((item) => (item.id === id ? { ...item, size } : item)));
//   };

//   const removeItem = (id: any) => {
//     setCartItems((items) => items.filter((item) => item.id !== id));
//   };

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const discount = 20; // Fixed discount
//   const tax = subtotal * 0.08;
//   const total = subtotal - discount + tax;

//   const handleCheckout = async () => {
//     try {
//       // Simulate a delay to mock the checkout process
//       setTimeout(() => {
//         setCheckoutSuccess(true);
//         setCartItems([]);  // Clear cart after successful checkout
//       }, 2000); // Simulate a 2-second delay for checkout processing

//       // Optional: If you are using a real API, replace the above with your fetch call
//       // const response = await fetch("/api/checkout", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify({
//       //     cartItems,
//       //     subtotal,
//       //     discount,
//       //     tax,
//       //     total,
//       //   }),
//       // });
      
//       // if (response.ok) {
//       //   setCheckoutSuccess(true);
//       //   setCartItems([]);
//       // } else {
//       //   const errorData = await response.json();
//       //   console.error("Checkout failed:", errorData.message);
//       //   alert("Checkout failed. Please try again.");
//       // }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 xl:p-10 bg-white">
//       <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Shopping Cart</h1>

//       {checkoutSuccess && (
//         <div className="mb-6 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
//           <p>Checkout successful! Your order has been placed.</p>
//         </div>
//       )}

//       <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//         {/* Cart Items */}
//         <div className="lg:col-span-2 space-y-4">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border rounded-md"
//             >
//               <div className="relative w-full sm:w-32 md:w-20 lg:w-24 xl:w-28 h-24">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={100}
//                   height={100}
//                   className="rounded"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="flex-1">
//                 <h2 className="font-bold text-sm md:text-base lg:text-lg">{item.name}</h2>
//                 <div className="flex items-center gap-2 mt-2">
//                   <label className="text-xs sm:text-sm">Size:</label>
//                   <select
//                     value={item.size}
//                     onChange={(e) => updateSize(item.id, e.target.value)}
//                     className="border px-2 py-1 text-xs sm:text-sm rounded"
//                   >
//                     {sizes.map((size) => (
//                       <option key={size} value={size}>
//                         {size}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => updateQuantity(item.id, "decrease")}
//                   className="border px-2 rounded text-sm sm:text-base"
//                 >
//                   -
//                 </button>
//                 <span className="text-sm sm:text-base">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, "increase")}
//                   className="border px-2 rounded text-sm sm:text-base"
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="text-right">
//                 <p className="font-bold text-sm sm:text-base">${item.price * item.quantity}</p>
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="text-red-500 text-xs sm:text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="p-4 border rounded-md">
//           <h2 className="font-bold mb-4 text-sm sm:text-base md:text-lg">Order Summary</h2>
//           <div className="space-y-2">
//             <div className="flex justify-between text-sm sm:text-base">
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between text-sm sm:text-base">
//               <span>Discount</span>
//               <span className="text-green-500">-${discount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between text-sm sm:text-base">
//               <span>Tax (8%)</span>
//               <span>${tax.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between text-sm sm:text-base">
//               <span>Delivery</span>
//               <span className="text-green-500">Free</span>
//             </div>
//           </div>
//           <hr className="my-4" />
//           <div className="flex justify-between font-bold text-sm sm:text-base">
//             <span>Total</span>
//             <span>${total.toFixed(2)}</span>
//           </div>
//           <button
//             className="w-full mt-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 text-sm sm:text-base"
//             onClick={handleCheckout}
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;








"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type CartItem = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    console.log("Cart Updated:", cartItems); // Debugging
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id: string, action: "increase" | "decrease") => {
    setCartItems((items) =>
      items.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity + (action === "increase" ? 1 : -1)) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    console.log("Removing Item:", id); // Debugging
    setCartItems((items) => items.filter((item) => item._id !== id));
  };

  const handleCheckout = () => {
    console.log("Checkout Started"); // Debugging
    setTimeout(() => {
      setCheckoutSuccess(true);
      setCartItems([]);
    }, 2000);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {checkoutSuccess && (
        <div className="p-4 bg-green-100 text-green-700 rounded-md">
          Checkout successful! Your order has been placed.
        </div>
      )}

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id} className="flex items-center justify-between mb-4">
                <Image src={item.imageUrl} alt={item.title} width={100} height={100} />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>${item.price}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item._id, "decrease")}
                      className="px-2 py-1 bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, "increase")}
                      className="px-2 py-1 bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item._id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
