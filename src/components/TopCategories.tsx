import { sanityFetchProducts } from "@/sanity/lib/productFetch";
import { category } from "@/sanity/lib/queries";
import Image from "next/image";


type Category = {
  _id: string;
  title: string;
  products: string;
  imageUrl: string;
};

export default async function TopCategories() {
  const allCategory: Category[] = await sanityFetchProducts({
    query: category,
  });
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allCategory.map((category) => (
          <div
            key={category._id}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={category.imageUrl}
              alt={category.title}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
           <div className="h-[80px] w-full bg-black opacity-70 absolute bottom-0 rounded-b-md shadow-md">
                <div className="text-white my-[18px] ml-4 hover:cursor-pointer ">
                  <p className="font-bold">{category.title}</p>
                  <p className="font-extralight text-[14px] ">
                    {category.products} <span className="ml-1">Products</span>{" "}
                  </p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}
