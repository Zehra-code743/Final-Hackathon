import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Wing Chair",
    imageUrl: "/image5.png", // Replace with actual path
    products: "3,542 Products",
  },
  {
    id: 2,
    name: "Wooden Chair",
    imageUrl: "/image9.png", // Replace with actual path
    products: "137 Products",
  },
  {
    id: 3,
    name: "Desk Chair",
    imageUrl: "/image3.png", // Replace with actual path
    products: "154 Products",
  },
];

export default function TopCategories() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={category.imageUrl}
              alt={category.name}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white font-bold text-lg">{category.name}</h3>
              <p className="text-gray-300">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
