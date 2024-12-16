// pages/index.js

import Image from "next/image";
import Header from "@/components/header"; // Adjust the import path as necessary
import Footer from "@/components/footer"; // Adjust the import path as necessary

const products = [
  {
    id: 1,
    name: "The Poplar Suede Sofa",
    price: "$99.00",
    image: "/sofa.webp", // Replace with actual image path
  },
  {
    id: 2,
    name: "The Dandy Chair",
    price: "$89.00",
    image: "/chair.webp", // Replace with actual image path
  },
  {
    id: 3,
    name: "The Dandy Chair (Dark)",
    price: "$89.00",
    image: "/chair3.webp", // Replace with actual image path
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* About Us Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div className="bg-teal-600 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About Us - Comforty</h2>
          <p className="leading-relaxed mb-4">
            At Comforty, we believe that the right chair can transform your space
            and elevate your comfort. Inspired by ergonomic design, premium
            materials, and modern aesthetics, we craft chairs that seamlessly
            blend style with functionality.
          </p>
          <button className="bg-white text-teal-600 py-2 px-4 rounded font-semibold hover:bg-gray-100 transition">
            View Collection
          </button>
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/image.webp" // Replace with actual path
            alt="White Chair"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Brand Difference Section */}
      <section className="py-12 bg-gray-50">
        <h3 className="text-center text-2xl font-bold mb-6">
          What Makes Our Brand Different
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {/* Feature 1 */}
          <div className="text-center space-y-3">
            <div className="text-teal-600 text-4xl">🚚</div>
            <h4 className="font-semibold text-gray-800">
              Next day as standard
            </h4>
            <p className="text-sm text-gray-600">
              Order before 3pm and get your order the next day.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-center space-y-3">
            <div className="text-teal-600 text-4xl">🛠️</div>
            <h4 className="font-semibold text-gray-800">Made by true artisans</h4>
            <p className="text-sm text-gray-600">
              Handmade crafted goods made with premium materials.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-center space-y-3">
            <div className="text-teal-600 text-4xl">💸</div>
            <h4 className="font-semibold text-gray-800">Unbeatable prices</h4>
            <p className="text-sm text-gray-600">
              Fair prices without sacrificing quality.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="text-center space-y-3">
            <div className="text-teal-600 text-4xl">♻️</div>
            <h4 className="font-semibold text-gray-800">
              Recycled packaging
            </h4>
            <p className="text-sm text-gray-600">
              We use 100% recycled materials for packaging.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-12 px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Our Popular Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Product Info */}
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold">{product.name}</h4>
                <p className="text-teal-600 font-bold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
