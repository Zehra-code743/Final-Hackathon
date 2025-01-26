// // // // "use client";
// // // // import { client } from "@/sanity/lib/client";
// // // // import Image from "next/image";
// // // // import React, { useEffect, useState } from "react";
// // // // import { Montserrat } from "next/font/google";
// // // // import { urlFor } from "@/sanity/lib/image";

// // // // const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// // // // type ProductDetails = {
// // // //     _id: string;
// // // //     title: string;
// // // //     price: number;
// // // //     imageUrl: string;
// // // //     description: string;
// // // //     priceWithoutDiscount?: number;
// // // //     badge?: string;
// // // //   };
  
// // // // const ProductDetails = ({ productId }: { productId: string }) => {
// // // //   const [result, setResult] = useState<ProductDetails | null>(null);
// // // //   const [loading, setLoading] = useState<boolean>(true);

// // // //   useEffect(() => {
// // // //     const fetchProductDetails = async () => {
// // // //       setLoading(true);
// // // //       const query = `
// // // //       *[_type == "products"] {
// // // //         _id,
// // // //         title,
// // // //         price,
// // // //         "imageUrl": image.asset->url,
// // // //         description,
// // // //         priceWithoutDiscount,
// // // //         badge
// // // //       }
// // // //     `
// // // //       const data = await client.fetch(query );

// // // //       const product = data.find((item: ProductDetails) => item._id === productId);
// // // //       setResult(product || null);

// // // //       setLoading(false);
// // // //     };

// // // //     fetchProductDetails();
// // // //   }, [productId]);

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex justify-center items-center min-h-screen">
// // // //         <div
// // // //           className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
// // // //           aria-label="Loading..."
// // // //         ></div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (!result) {
// // // //     return (
// // // //       <p
// // // //         className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}
// // // //       >
// // // //         Product not found
// // // //       </p>
// // // //     );
// // // //   }

// // // //   return (
// // // // <section>
// // // //       <div className="w-full lg:my-5 mt-3 md:my-10 px-4 ">
// // // //         <div className="flex max-w-screen-xl flex-col md:flex-row lg:flex-row justify-between mx-auto lg:mb-20 md:mb-16 mb-10 gap-0 md:gap-3">
// // // //           <div className="flex flex-col lg:flex-row md:flex-row items-center gap-8">
            
// // // //             {/* Product Image */}
// // // //             <div>
// // // //               <Image
// // // //                 src={urlFor(result.imageUrl).url()}
// // // //                 alt={result.title}
// // // //                 height={500}
// // // //                 width={500}
// // // //                 className="cursor-pointer  sm:w-[300px] lg:w-[500px]  md:w-[300px]"
// // // //               />
// // // //             </div>
// // // //             <div className="lg:w-[500px] sm:w-[300px] md:w-[300px] ">
// // // //               <h1 className="lg:text-[50px] w-full text-[30px] md:w-full md:text-[30px] font-bold 
// // // //               lg:mb-8 md:mb-3 mb-3 mt-0  lg:mt-0 md:mt-0">
// // // //                 {result.title}
// // // //               </h1>
// // // //               <span className="bg-[#029FAE] mb-2 w-fit px-4 text-white text-[14px] lg:text-[20px] md:text-[16px]  py-2 rounded-full  hover:bg-[#02a0aece]">
// // // //                 ${result.price}.00
// // // //               </span>
// // // //               {result.priceWithoutDiscount && (
// // // //                   <span className="text-xl text-gray-500 line-through ml-4">
// // // //                     ${result.priceWithoutDiscount}
// // // //                   </span>
// // // //                 )}
// // // //                 {result.badge && (
// // // //                 <div className="w-fit mt-4 bg-yellow-400 text-yellow-900 font-semibold px-3 py-1 rounded-full">
// // // //                   {result.badge}
// // // //                 </div>
// // // //               )}
// // // //               <div className="h-[2px] w-full bg-[#F0F2F3] lg:my-8 md:my-3 my-3"></div>
// // // //               <p className="lg:text-[22px] text-[16px] md:text-[16px] font-extralight text-[#636270]">
// // // //                 {result.description}
// // // //               </p>
// // // //               <button className="text-[14px] lg:text-[18px] md:text-[14px] bg-[#029FAE] px-5 py-2 text-white rounded-md lg:mt-10 mt-3 md:mt-3 flex gap-2 items-center font-bold hover:bg-[#02a0aece]">
// // // //                 {/* <GrCart className="text-md" /> */}
// // // //                 Add to Cart
// // // //               </button>
// // // //             </div>
            
// // // //           </div>
          
// // // //         </div>
// // // //         {/* <div className="max-w-screen-xl mx-auto ">
// // // //                   <div className="flex justify-between lg:mb-11 md:mb-10 mb-7">
// // // //                     <p className="lg:text-3xl sm:text-[30px] md:text-[30px] font-bold">FEATURED PRODUCTS</p>
// // // //                     <p className="hover:border-b-2 cursor-pointer border-black ">View All</p>
// // // //                   </div>
// // // //                   <div className=" grid grid-col lg:grid-cols-5 md:grid-cols-3 cursor-pointer gap-5 lg:gap-8 md:gap-3 mx-auto">
// // // //                     <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
// // // //                       <div>
// // // //                         <Image
// // // //                           src={require("@/public/all-product/product_7.png")}
// // // //                           alt="chair"
// // // //                           height={240}
// // // //                           width={240}
// // // //                           className="w-[300px] lg:w-[240px] md:w-[230px]"
// // // //                         />
// // // //                       </div>
// // // //                       <div className="flex justify-between mt-3 cursor-pointer">
// // // //                         <p className="hover:text-[#029FAE]">Library Stool Chair</p>
// // // //                         <p className="font-bold ">$99</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <div className="lg:w-[230px] w-[300px]  md:w-[230px] mx-auto">
// // // //                       <div>
// // // //                         <Image
// // // //                           src={require("@/public/all-product/product_1.png")}
// // // //                           alt="chair"
// // // //                           height={240}
// // // //                           width={240}
// // // //                           className="w-[300px] lg:w-[240px] md:w-[230px]"
// // // //                         />
// // // //                       </div>
// // // //                       <div className="flex justify-between mt-3">
// // // //                         <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
// // // //                         <p className="font-bold">$99</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
// // // //                       <div>
// // // //                         <Image
// // // //                           src={require("@/public/all-product/product_12.png")}
// // // //                           alt="chair"
// // // //                           height={240}
// // // //                           width={240}
// // // //                           className="w-[300px] lg:w-[240px] md:w-[230px]"
// // // //                         />
// // // //                       </div>
// // // //                       <div className="flex justify-between mt-3">
// // // //                         <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
// // // //                         <p className="font-bold">$99</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
// // // //                       <div>
// // // //                         <Image
// // // //                           src={require("@/public/all-product/product_2.png")}
// // // //                           alt="chair"
// // // //                           height={240}
// // // //                           width={240}
// // // //                           className="w-[300px] lg:w-[240px] md:w-[230px]"
// // // //                         />
// // // //                       </div>
// // // //                       <div className="flex justify-between mt-3">
// // // //                         <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
// // // //                         <p className="font-bold">$99</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
// // // //                       <div>
// // // //                         <Image
// // // //                           src={require("@/public/all-product/product_9.png")}
// // // //                           alt="chair"
// // // //                           height={240}
// // // //                           width={240}
// // // //                           className="w-[300px] lg:w-[240px] md:w-[230px]"
// // // //                         />
// // // //                       </div>
// // // //                       <div className="flex justify-between mt-3">
// // // //                         <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
// // // //                         <p className="font-bold">$99</p>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div> */}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ProductDetails;









// // // "use client";

// // // import { client } from "@/sanity/lib/client";
// // // import Image from "next/image";
// // // import React, { useEffect, useState } from "react";
// // // import { Montserrat } from "next/font/google";
// // // import { urlFor } from "@/sanity/lib/image";

// // // const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// // // type ProductDetails = {
// // //   _id: string;
// // //   title: string;
// // //   price: number;
// // //   imageUrl: string;
// // //   description: string;
// // //   priceWithoutDiscount?: number;
// // //   badge?: string;
// // // };

// // // const ProductDetails = ({ productId }: { productId: string }) => {
// // //   const [result, setResult] = useState<ProductDetails | null>(null);
// // //   const [loading, setLoading] = useState<boolean>(true);
// // //   const [cart, setCart] = useState<ProductDetails[]>([]); // Local cart state

// // //   useEffect(() => {
// // //     const fetchProductDetails = async () => {
// // //       setLoading(true);
// // //       const query = `
// // //         *[_type == "products"] {
// // //           _id,
// // //           title,
// // //           price,
// // //           "imageUrl": image.asset->url,
// // //           description,
// // //           priceWithoutDiscount,
// // //           badge
// // //         }
// // //       `;
// // //       const data = await client.fetch(query);

// // //       const product = data.find((item: ProductDetails) => item._id === productId);
// // //       setResult(product || null);

// // //       setLoading(false);
// // //     };

// // //     fetchProductDetails();
// // //   }, [productId]);

// // //   const addToCart = (product: ProductDetails) => {
// // //     setCart((prevCart) => [...prevCart, product]);
// // //     alert(`${product.title} has been added to your cart!`);
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="flex justify-center items-center min-h-screen">
// // //         <div
// // //           className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
// // //           aria-label="Loading..."
// // //         ></div>
// // //       </div>
// // //     );
// // //   }

// // //   if (!result) {
// // //     return (
// // //       <p
// // //         className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}
// // //       >
// // //         Product not found
// // //       </p>
// // //     );
// // //   }

// // //   return (
// // //     <section>
// // //       <div className="w-full lg:my-5 mt-3 md:my-10 px-4">
// // //         <div cla
  






// // "use client";

// // import { client } from "@/sanity/lib/client";
// // import Image from "next/image";
// // import React, { useEffect, useState } from "react";
// // import { Montserrat } from "next/font/google";
// // import { urlFor } from "@/sanity/lib/image";

// // const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// // type ProductDetails = {
// //   _id: string;
// //   title: string;
// //   price: number;
// //   imageUrl: string;
// //   description: string;
// //   priceWithoutDiscount?: number;
// //   badge?: string;
// // };

// // const ProductDetails = ({ productId }: { productId: string }) => {
// //   const [result, setResult] = useState<ProductDetails | null>(null);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [cart, setCart] = useState<ProductDetails[]>([]);

// //   // Fetch product details
// //   useEffect(() => {
// //     const fetchProductDetails = async () => {
// //       setLoading(true);
// //       const query = `
// //         *[_type == "products"] {
// //           _id,
// //           title,
// //           price,
// //           "imageUrl": image.asset->url,
// //           description,
// //           priceWithoutDiscount,
// //           badge
// //         }
// //       `;
// //       const data = await client.fetch(query);
// //       const product = data.find((item: ProductDetails) => item._id === productId);
// //       setResult(product || null);
// //       setLoading(false);
// //     };

// //     fetchProductDetails();
// //   }, [productId]);

// //   // Load cart from localStorage on component mount
// //   useEffect(() => {
// //     const savedCart = localStorage.getItem("cart");
// //     if (savedCart) {
// //       setCart(JSON.parse(savedCart));
// //     }
// //   }, []);

// //   // Update localStorage whenever cart changes
// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   // Add to Cart function
// //   const addToCart = (product: ProductDetails) => {
// //     setCart((prevCart) => [...prevCart, product]);
// //     alert(`${product.title} has been added to your cart!`);
// //   };

// //   // Remove from Cart function
// //   const removeFromCart = (productId: string) => {
// //     const updatedCart = cart.filter((item) => item._id !== productId);
// //     setCart(updatedCart);
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen">
// //         <div
// //           className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
// //           aria-label="Loading..."
// //         ></div>
// //       </div>
// //     );
// //   }

// //   if (!result) {
// //     return (
// //       <p
// //         className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}
// //       >
// //         Product not found
// //       </p>
// //     );
// //   }

// //   return (
// //     <section>
// //       {/* Product Details Section */}
// //       <div className="w-full lg:my-5 mt-3 md:my-10 px-4">
// //         <div className="flex max-w-screen-xl flex-col md:flex-row lg:flex-row justify-between mx-auto lg:mb-20 md:mb-16 mb-10 gap-0 md:gap-3">
// //           <div className="flex flex-col lg:flex-row md:flex-row items-center gap-8">
// //             {/* Product Image */}
// //             <div>
// //               <Image
// //                 src={urlFor(result.imageUrl).url()}
// //                 alt={result.title}
// //                 height={500}
// //                 width={500}
// //                 className="cursor-pointer sm:w-[300px] lg:w-[500px] md:w-[300px]"
// //               />
// //             </div>
// //             <div className="lg:w-[500px] sm:w-[300px] md:w-[300px]">
// //               <h1 className="lg:text-[50px] w-full text-[30px] md:w-full md:text-[30px] font-bold lg:mb-8 md:mb-3 mb-3 mt-0 lg:mt-0 md:mt-0">
// //                 {result.title}
// //               </h1>
// //               <span className="bg-[#029FAE] mb-2 w-fit px-4 text-white text-[14px] lg:text-[20px] md:text-[16px] py-2 rounded-full hover:bg-[#02a0aece]">
// //                 ${result.price}.00
// //               </span>
// //               {result.priceWithoutDiscount && (
// //                 <span className="text-xl text-gray-500 line-through ml-4">
// //                   ${result.priceWithoutDiscount}
// //                 </span>
// //               )}
// //               {result.badge && (
// //                 <div className="w-fit mt-4 bg-yellow-400 text-yellow-900 font-semibold px-3 py-1 rounded-full">
// //                   {result.badge}
// //                 </div>
// //               )}
// //               <div className="h-[2px] w-full bg-[#F0F2F3] lg:my-8 md:my-3 my-3"></div>
// //               <p className="lg:text-[22px] text-[16px] md:text-[16px] font-extralight text-[#636270]">
// //                 {result.description}
// //               </p>
// //               <button
// //                 className="text-[14px] lg:text-[18px] md:text-[14px] bg-[#029FAE] px-5 py-2 text-white rounded-md lg:mt-10 mt-3 md:mt-3 flex gap-2 items-center font-bold hover:bg-[#02a0aece]"
// //                 onClick={() => addToCart(result)}
// //               >
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Cart Section */}
// //       <div className="w-full px-4">
// //         <h2 className="text-2xl font-bold mb-4 text-center justify-center px-4 py-2">Cart Items</h2>
// //         {cart.length === 0 ? (
// //           <p>Your cart is empty.</p>
// //         ) : (
// //           <ul className="space-y-4">
// //             {cart.map((item) => (
// //               <li
// //                 key={item._id}
// //                 className="flex items-center justify-between bg-gray-100 p-4 rounded-md"
// //               >
// //                 <div className="flex items-center gap-4">
// //                   <Image
// //                     src={urlFor(item.imageUrl).url()}
// //                     alt={item.title}
// //                     height={50}
// //                     width={50}
// //                     className="rounded-md"
// //                   />
// //                   <div>
// //                     <h3 className="text-lg font-semibold">{item.title}</h3>
// //                     <p className="text-gray-600">${item.price}.00</p>
// //                   </div>
// //                 </div>
// //                 <button
// //                   onClick={() => removeFromCart(item._id)}
// //                   className="text-red-500 font-semibold hover:text-red-700"
// //                 >
// //                   Remove
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductDetails;






// "use client";

// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Montserrat } from "next/font/google";
// import { urlFor } from "@/sanity/lib/image";

// const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// type ProductDetails = {
//   _id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   description: string;
//   priceWithoutDiscount?: number;
//   badge?: string;
// };

// const ProductDetails = ({ productId }: { productId: string }) => {
//   const [result, setResult] = useState<ProductDetails | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [cart, setCart] = useState<ProductDetails[]>([]);

//   // Fetch product details
//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       setLoading(true);
//       const query = `
//         *[_type == "products"] {
//           _id,
//           title,
//           price,
//           "imageUrl": image.asset->url,
//           description,
//           priceWithoutDiscount,
//           badge
//         }
//       `;
//       const data = await client.fetch(query);
//       const product = data.find((item: ProductDetails) => item._id === productId);
//       setResult(product || null);
//       setLoading(false);
//     };

//     fetchProductDetails();
//   }, [productId]);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // Update localStorage whenever cart changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Add to Cart function
//   const addToCart = (product: ProductDetails) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} has been added to your cart!`);
//   };

//   // Remove from Cart function
//   const removeFromCart = (productId: string) => {
//     const updatedCart = cart.filter((item) => item._id !== productId);
//     setCart(updatedCart);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div
//           className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
//           aria-label="Loading..."
//         ></div>
//       </div>
//     );
//   }

//   if (!result) {
//     return (
//       <p
//         className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}
//       >
//         Product not found
//       </p>
//     );
//   }

//   return (
//     <section>
//       {/* Product Details Section */}
//       <div className="w-full lg:my-5 mt-3 md:my-10 px-4">
//         <div className="flex max-w-screen-xl flex-col md:flex-row lg:flex-row justify-between mx-auto lg:mb-20 md:mb-16 mb-10 gap-0 md:gap-3">
//           <div className="flex flex-col lg:flex-row md:flex-row items-center gap-8">
//             {/* Product Image */}
//             <div>
//               <Image
//                 src={urlFor(result.imageUrl).url()}
//                 alt={result.title}
//                 height={500}
//                 width={500}
//                 className="cursor-pointer sm:w-[300px] lg:w-[500px] md:w-[300px]"
//               />
//             </div>
//             <div className="lg:w-[500px] sm:w-[300px] md:w-[300px]">
//               <h1 className="lg:text-[50px] w-full text-[30px] md:w-full md:text-[30px] font-bold lg:mb-8 md:mb-3 mb-3 mt-0 lg:mt-0 md:mt-0">
//                 {result.title}
//               </h1>
//               <span className="bg-[#029FAE] mb-2 w-fit px-4 text-white text-[14px] lg:text-[20px] md:text-[16px] py-2 rounded-full hover:bg-[#02a0aece]">
//                 ${result.price}.00
//               </span>
//               {result.priceWithoutDiscount && (
//                 <span className="text-xl text-gray-500 line-through ml-4">
//                   ${result.priceWithoutDiscount}
//                 </span>
//               )}
//               {result.badge && (
//                 <div className="w-fit mt-4 bg-yellow-400 text-yellow-900 font-semibold px-3 py-1 rounded-full">
//                   {result.badge}
//                 </div>
//               )}
//               <div className="h-[2px] w-full bg-[#F0F2F3] lg:my-8 md:my-3 my-3"></div>
//               <p className="lg:text-[22px] text-[16px] md:text-[16px] font-extralight text-[#636270]">
//                 {result.description}
//               </p>
//               <button
//                 className="text-[14px] lg:text-[18px] md:text-[14px] bg-[#029FAE] px-5 py-2 text-white rounded-md lg:mt-10 mt-3 md:mt-3 flex gap-2 items-center font-bold hover:bg-[#02a0aece]"
//                 onClick={() => addToCart(result)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cart Section */}
//       <div className="w-full px-4">
//         <h2 className="text-2xl font-bold mb-4 text-center justify-center px-4 py-2">Cart Items</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul className="space-y-4">
//             {cart.map((item) => (
//               <li
//                 key={item._id}
//                 className="flex items-center justify-between bg-gray-100 p-4 rounded-md"
//               >
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src={urlFor(item.imageUrl).url()}
//                     alt={item.title}
//                     height={50}
//                     width={50}
//                     className="rounded-md"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold">{item.title}</h3>
//                     <p className="text-gray-600">${item.price}.00</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="text-red-500 font-semibold hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductDetails;











"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

type ProductDetails = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
};

const ProductDetails = ({ productId }: { productId: string }) => {
  const [result, setResult] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<ProductDetails[]>([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const query = `
          *[_type == "products"] {
            _id,
            title,
            price,
            "imageUrl": image.asset->url,
            description
          }
        `;
        const data = await client.fetch(query);
        const product = data.find((item: ProductDetails) => item._id === productId);
        setResult(product || null);
        console.log("Fetched Product:", product); // Debugging
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: ProductDetails) => {
    console.log("Adding to Cart:", product); // Debugging
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!result) {
    return (
      <p className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}>
        Product not found
      </p>
    );
  }

  return (
    <section>
      <div className="w-full lg:my-5 mt-3 md:my-10 px-4">
        <div className="flex flex-col lg:flex-row justify-between mx-auto gap-8">
          <Image
            src={urlFor(result.imageUrl).url()}
            alt={result.title}
            height={500}
            width={500}
            className="rounded-md"
          />
          <div>
            <h1 className="text-2xl font-bold">{result.title}</h1>
            <p className="text-lg">${result.price}.00</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => addToCart(result)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
