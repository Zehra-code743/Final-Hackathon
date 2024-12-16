// components/FeaturedProducts.js

export default function FeaturedProducts() {
  return (
    <div className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <img src="/Image.webp" alt="Library Stool Chair" className="w-full h-60 object-cover" />
            <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-sm rounded">
              New
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
            <p className="text-gray-700 font-semibold">$20</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <img src="/pinksofa.webp" alt="Library Stool Chair" className="w-full h-60 object-cover" />
            <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-sm rounded">
              Sale
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
            <p className="text-gray-700 font-semibold">
              $20 <span className="text-gray-500 line-through">$30</span>
            </p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <img src="/Frame.webp" alt="Library Stool Chair" className="w-full h-60 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
            <p className="text-gray-700 font-semibold">$20</p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <img src="/Image2.webp" alt="Library Stool Chair" className="w-full h-60 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
            <p className="text-gray-700 font-semibold">$20</p>
          </div>
        </div>
      </div>
    </div>
  );
}
