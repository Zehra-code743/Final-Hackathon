"use client"; // Ensures it's a Client Component
import Link from "next/link"; // Import Link
import Image from "next/image"; // Import Image
import { useState } from "react"; // Import useState for handling form

const Shop = () => {
  const products = [
    { id: 1, name: "Library Stool Chair", price: "$20", oldPrice: "$39", image: "/image.png" },
    { id: 2, name: "Pink Sofa", price: "$25", oldPrice: "$50", image: "/pinksofa.png" },
    { id: 3, name: "Wing Chair", price: "$30", oldPrice: "$60", image: "/Frame.png" },
    { id: 4, name: "Armchair", price: "$35", oldPrice: "$70", image: "/Product4.png" },
    { id: 5, name: "Dining Chair", price: "$40", oldPrice: "$80", image: "/image9.png" },
    { id: 6, name: "Recliner Chair", price: "$50", oldPrice: "$100", image: "/image8.png" },
    { id: 7, name: "Lounge Chair", price: "$45", oldPrice: "$90", image: "/chair.png" },
    { id: 8, name: "Office Chair", price: "$60", oldPrice: "$120", image: "/Frame1.png" },
    { id: 9, name: "Bean Bag", price: "$15", oldPrice: "$30", image: "/pinksofa.png" },
    { id: 10, name: "Rocking Chair", price: "$55", oldPrice: "$110", image: "/Frame.png" },
    { id: 11, name: "Cushioned Chair", price: "$20", oldPrice: "$40", image: "/image3.png" },
    { id: 12, name: "Leather Chair", price: "$75", oldPrice: "$150", image: "/image1.png" }
  ];

  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Our Products</h2>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {products.map(product => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="w-[312px] h-[380px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
              <div className="w-full h-[240px] bg-yellow-200 rounded-t-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-full h-10 bg-gray-400 mt-2"></div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium">{product.name}</h3>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold">{product.price}</p>
                  <p className="line-through text-sm text-gray-500">{product.oldPrice}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Instagram Follow Section */}
      <div className="flex justify-center items-center mt-8">
        <p className="text-lg sm:text-xl md:text-2xl mr-4">Follow us for products and discounts:</p>
        <a
          href="https://www.instagram.com/yourinstagramaccount"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-lg sm:text-xl md:text-2xl hover:underline"
        >
          @yourinstagramaccount
        </a>
      </div>

      {/* 6 Images Below Instagram Follow */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/image9.png"
            alt="Image 1"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/Frame1.png"
            alt="Image 2"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/pinksofa.png"
            alt="Image 3"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/image.png"
            alt="Image 4"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/Frame.png"
            alt="Image 5"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/image3.png"
            alt="Image 6"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
