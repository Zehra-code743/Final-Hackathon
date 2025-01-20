import Image from "next/image";
import Header from "@/components/header"; // Adjust the path as needed
import Footer from "@/components/footer"; // Adjust the path as needed
import Link from "next/link";
// ProductDetails Component
function ProductDetails() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12 bg-gray-50">
      {/* Product Image */}
      <div className="relative w-full lg:w-1/2">
        <Image
          src="/pinksofa.webp" // Replace with the correct path
          alt="Library Stool Chair"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
        {/* Optional Badge */}
        <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          New
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Library Stool Chair</h2>

        {/* Price */}
        <div className="flex items-center space-x-4">
          <span className="text-[#029FAE] text-2xl font-bold">$20.00 USD</span>
        </div>

        {/* Product Description */}
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>

        {/* Add to Cart Button */}
        <button className="bg-[#029FAE] text-white font-semibold py-2 px-6 rounded hover:bg-green-600 transition duration-300">
          Add To Cart
        </button>
      </div>
    </section>
  );
}

// FeaturedProducts Component
function FeaturedProducts() {
  const products = [
    { id: 1, name: "Library Stool Chair", price: "$20", imageUrl: "/image1.webp" },
    { id: 2, name: "Library Stool Chair", price: "$20", imageUrl: "/Image.webp" },
    { id: 3, name: "Library Stool Chair", price: "$20", imageUrl: "/Image3.webp" },
    { id: 4, name: "Library Stool Chair", price: "$20", imageUrl: "/Frame.webp" },
    { id: 5, name: "Library Stool Chair", price: "$20", imageUrl: "/Frame1.webp" },
  ];

  return (
    <section className="px-6 py-12 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 uppercase">
          Featured Products
        </h2>
        <a
          href="#"
          className="text-blue-500 text-sm font-semibold hover:underline"
        >
          View All
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-40">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className="text-gray-700 text-sm font-semibold">
                {product.name}
              </h3>
              <p className="text-gray-900 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Main Page Component (Combining ProductDetails, Header, and Footer)
export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Product Details Section */}
      <ProductDetails />

      {/* Spacer */}
      <div className="w-full border-t border-gray-200 my-8"></div>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Footer */}
      <Footer />
    </div>
  );
}
