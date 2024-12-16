import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: "$20",
    imageUrl: "/Image.webp",
    tag: "New",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: "$20 $30",
    imageUrl: "/pinksofa.webp",
    tag: "Sale",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: "$20",
    imageUrl: "/Frame.webp",
    tag: "",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: "$20",
    imageUrl: "/Image2.webp",
    tag: "",
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: "$20",
    imageUrl: "/image5.webp",
    tag: "New",
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: "$20 $30",
    imageUrl: "/Image8.webp",
    tag: "Sale",
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: "$20",
    imageUrl: "/image1.webp",
    tag: "",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: "$20",
    imageUrl: "/Image.webp",
    tag: "",
  },
];

export default function ProductGrid() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg shadow-md overflow-hidden"
          >
            {/* Product Image */}
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />

            {/* Tag */}
            {product.tag && (
              <span
                className={`absolute top-2 left-2 text-xs font-bold text-white px-2 py-1 rounded ${
                  product.tag === "New" ? "bg-green-500" : "bg-orange-500"
                }`}
              >
                {product.tag}
              </span>
            )}

            {/* Product Info */}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-green-600 font-bold">{product.price.split(" ")[0]}</span>
                {product.price.includes(" ") && (
                  <span className="text-gray-400 line-through">
                    {product.price.split(" ")[1]}
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              🛒
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
