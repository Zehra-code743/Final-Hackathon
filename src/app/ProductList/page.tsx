// "use client";
// import React, { useState } from "react";

// const products = [
//   {
//     id: 1,
//     name: "Citrus Edge",
//     price: 20.00,
//     imageUrl: "/Frame.webp",
//   },
//   {
//     id: 2,
//     name: "Rose Luxe Armchair",
//     price: 20.00,
//     imageUrl: "/product2.webp",
//   },
//   {
//     id: 3,
//     name: "Library Stool Chair",
//     price: 20.00,
//     imageUrl: "/product1.webp",
//   },
//   {
//     id: 4,
//     name: "SleekSpin",
//     price: 20.00,
//     imageUrl: "/Image3.webp",
//   },
// ];

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   imageUrl: string;
// };

// type CartItem = Product & { quantity: number };

// const ProductListWithCart: React.FC = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [shippingAddress, setShippingAddress] = useState({
//     name: "",
//     address: "",
//     city: "",
//     postalCode: "",
//   });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
//   const handleAddToCart = (product: Product) => {
//     const existingItem = cartItems.find((item) => item.id === product.id);
//     if (existingItem) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const handleRemoveFromCart = (product: Product) => {
//     setCartItems(cartItems.filter((item) => item.id !== product.id));
//   };

//   const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setShippingAddress((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleProceedToCheckout = () => {
//     if (cartItems.length === 0) {
//       alert("Your cart is empty! Add items to proceed.");
//       return;
//     }
//     if (!shippingAddress.name || !shippingAddress.address || !shippingAddress.city || !shippingAddress.postalCode) {
//       alert("Please fill in all the shipping details.");
//       return;
//     }
//     setIsFormSubmitted(true);
//   };

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const discount = subtotal > 50 ? 10 : 0; // Example: $10 discount on orders above $50
//   const shipping = subtotal > 0 ? 5 : 0; // Example: $5 shipping fee
//   const total = subtotal - discount + shipping;

//   return (
//     <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
//       <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">
//         Products
//       </h2>

//       {/* Product List */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-gray-100 p-2 overflow-hidden cursor-pointer"
//           >
//             <div className="bg-white flex flex-col h-full">
//               <div className="w-full">
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="aspect-[139/125] w-full object-cover"
//                 />
//               </div>
//               <div className="p-4 text-center flex-1">
//                 <h4 className="text-sm sm:text-base font-bold text-gray-800">
//                   {product.name}
//                 </h4>
//                 <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-2">
//                   ${product.price}
//                 </h4>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => handleAddToCart(product)}
//                 className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Shopping Cart */}
//       <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Your Shopping Cart
//         </h2>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-600">Your cart is empty.</p>
//         ) : (
//           <>
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 text-left">Product</th>
//                   <th className="px-4 py-2 text-left">Price</th>
//                   <th className="px-4 py-2 text-left">Quantity</th>
//                   <th className="px-4 py-2 text-left">Total</th>
//                   <th className="px-4 py-2 text-left">Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item.id} className="border-t">
//                     <td className="px-4 py-2">
//                       <div className="flex items-center gap-4">
//                         <img
//                           src={item.imageUrl}
//                           alt={item.name}
//                           width={50}
//                           height={50}
//                           className="object-cover rounded"
//                         />
//                         <span>{item.name}</span>
//                       </div>
//                     </td>
//                     <td className="px-4 py-2">${item.price.toFixed(2)}</td>
//                     <td className="px-4 py-2">{item.quantity}</td>
//                     <td className="px-4 py-2">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </td>
//                     <td className="px-4 py-2">
//                       <button
//                         onClick={() => handleRemoveFromCart(item)}
//                         className="bg-red-600 text-white px-2 py-1 rounded"
//                       >
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <div className="border-t pt-4">
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-600">Subtotal:</span>
//                 <span className="text-gray-800 font-semibold">
//                   ${subtotal.toFixed(2)}
//                 </span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-600">Discount:</span>
//                 <span className="text-gray-800 font-semibold">
//                   -${discount.toFixed(2)}
//                 </span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-600">Shipping:</span>
//                 <span className="text-gray-800 font-semibold">
//                   +${shipping.toFixed(2)}
//                 </span>
//               </div>
//               <div className="flex justify-between text-lg font-bold">
//                 <span>Total:</span>
//                 <span className="text-indigo-600">${total.toFixed(2)}</span>
//               </div>
//             </div>

//             {/* Shipping Address Form */}
//             {!isFormSubmitted && (
//               <div className="mt-6">
//                 <h3 className="text-xl font-bold mb-4">Shipping Address</h3>
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     name="name"
//                     value={shippingAddress.name}
//                     onChange={handleAddressChange}
//                     placeholder="Full Name"
//                     className="w-full px-4 py-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     name="address"
//                     value={shippingAddress.address}
//                     onChange={handleAddressChange}
//                     placeholder="Address"
//                     className="w-full px-4 py-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     name="city"
//                     value={shippingAddress.city}
//                     onChange={handleAddressChange}
//                     placeholder="City"
//                     className="w-full px-4 py-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     name="postalCode"
//                     value={shippingAddress.postalCode}
//                     onChange={handleAddressChange}
//                     placeholder="Postal Code"
//                     className="w-full px-4 py-2 border rounded"
//                   />
//                 </div>
//                 <button
//                   onClick={handleProceedToCheckout}
//                   className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-6 py-2 mt-4 rounded"
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             )}

//             {/* Order Summary (Visible after form submission) */}
//             {isFormSubmitted && (
//               <div className="mt-6">
//                 <h3 className="text-xl font-bold mb-4">Order Summary</h3>
//                 <div className="space-y-4">
//                   <p><strong>Shipping Address:</strong></p>
//                   <p>{shippingAddress.name}</p>
//                   <p>{shippingAddress.address}</p>
//                   <p>{shippingAddress.city}</p>
//                   <p>{shippingAddress.postalCode}</p>
//                 </div>
//                 <h3 className="text-xl font-bold mt-6">Order Details</h3>
//                 <table className="w-full mt-4">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-2 text-left">Product</th>
//                       <th className="px-4 py-2 text-left">Price</th>
//                       <th className="px-4 py-2 text-left">Quantity</th>
//                       <th className="px-4 py-2 text-left">Total</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartItems.map((item) => (
//                       <tr key={item.id} className="border-t">
//                         <td className="px-4 py-2">
//                           <div className="flex items-center gap-4">
//                             <img
//                               src={item.imageUrl}
//                               alt={item.name}
//                               width={50}
//                               height={50}
//                               className="object-cover rounded"
//                             />
//                             <span>{item.name}</span>
//                           </div>
//                         </td>
//                         <td className="px-4 py-2">${item.price.toFixed(2)}</td>
//                         <td className="px-4 py-2">{item.quantity}</td>
//                         <td className="px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <div className="flex justify-between mt-4">
//                   <span className="text-gray-600">Total:</span>
//                   <span className="text-indigo-600">${total.toFixed(2)}</span>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductListWithCart;





"use client";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Citrus Edge",
    price: 20.00,
    imageUrl: "/Frame.webp",
  },
  {
    id: 2,
    name: "Rose Luxe Armchair",
    price: 20.00,
    imageUrl: "/product2.webp",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 20.00,
    imageUrl: "/product1.webp",
  },
  {
    id: 4,
    name: "SleekSpin",
    price: 20.00,
    imageUrl: "/Image3.webp",
  },
];

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type CartItem = Product & { quantity: number };

const ProductListWithCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product: Product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal > 50 ? 10 : 0; // Example: $10 discount on orders above $50
  const shipping = subtotal > 0 ? 5 : 0; // Example: $5 shipping fee
  const total = subtotal - discount + shipping;

  return (
    <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">
        Products
      </h2>

      {/* Product List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-2 overflow-hidden cursor-pointer"
          >
            <div className="bg-white flex flex-col h-full">
              <div className="w-full">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="aspect-[139/125] w-full object-cover"
                />
              </div>
              <div className="p-4 text-center flex-1">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  {product.name}
                </h4>
                <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-2">
                  ${product.price}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Your Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">${item.price}</td>
                    <td className="px-4 py-2">{item.quantity}</td>
                    <td className="px-4 py-2">${item.price * item.quantity}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cart Summary */}
            <div className="mt-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Discount:</span>
                <span>-${discount}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Shipping:</span>
                <span>${shipping}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-4">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductListWithCart;
