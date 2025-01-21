"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Result } from "postcss";
import { useParams } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

type Category = {
  _id: string;
  title: string;
  image: string;
  products: number;
};
const CategoryListPage = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
console.log(id);

  const fetchTopCategories = async () => {
    try {
      const result = await client.fetch(`
       *[_id == "${id}"]
        
      `);
      console.log(result);
      setCategories(result);
    } catch (error) {
      console.error("Error fetching top categories:", error);
    }
  };

  useEffect(() => {
    fetchTopCategories();
  }, []);

  

  return (
    <section>
      <div className="px-4 my-10">
        <h2 className="max-w-screen-xl mx-auto text-3xl font-bold mt-20 mb-10 text-[#272343] text-center lg:text-start">
          Top Categories
        </h2>
        {categories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
            {categories.map((category, index) => (
              <div
                key={category._id || index} // Use index as fallback key if _id is missing
                className="relative shadow-md rounded-md hover:scale-105 active:scale-100 duration-500"
              >
                {/* <Link href={`/products/${category._id}`}> */}
                  <img
                    src={urlFor(category.image).url()}
                    alt={category.title}
                    className="w-full object-cover"
                    height={400}
                    width={400}
                  />
                  <div className="h-[80px] w-full bg-black opacity-70 absolute bottom-0 rounded-b-md shadow-md">
                    <div className="text-white my-[18px] ml-4">
                      <p className="font-bold">{category.title}</p>
                      <p>{category.products} products</p>
                    </div>
                  </div>
                  sirf schema me name price he is liye masla a raha he tu schema ma description bhi add kardein
                  me karo 
                  apka code dekh kar mujhy chakar a rahe he q
                {/* </Link> */}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No categories found.</p>
        )}
      </div>
    </section>
  );
};

export default CategoryListPage;
