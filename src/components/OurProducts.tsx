"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

interface Products {
  _id: string;
  title: string;
  price: string;
  image: any;
  tags?: string;
}

export default function ProductGrid() {
  const [allproducts, setallproducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const QueryProduct = `*[_type == "products"]`;
        const productsResponse = await client.fetch(QueryProduct);
        setallproducts(productsResponse);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();

    return () => {
      setallproducts([]); // Reset state when component unmounts
    };
  }, []);

  console.log(allproducts);

  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
      {allproducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allproducts.map((product) => (
            <div
              key={product._id}
              className="relative rounded-lg shadow-md overflow-hidden"
            >
              {/* Product Image */}
              <Image
                src={urlFor(product.image).url()}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />

              {/* Tag */}
              {product.tags && (
                <span
                  className={`absolute top-2 left-2 text-xs font-bold text-white px-2 py-1 rounded`}
                >
                  {product.tags}
                </span>
              )}

              {/* Product Info */}
              <div className="p-4 bg-white">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 font-bold">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <button className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                🛒
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h1>Products not found</h1>
      )}
    </section>
  );
}
