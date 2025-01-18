// components/FeaturedProducts.js

import { sanityFetchProducts } from "@/sanity/lib/productFetch";
import { products } from "@/sanity/lib/queries";
import Image from "next/image";

type Products = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  badge: string;
  imageUrl: string;
};
export default async function FeaturedProducts() {
  const allProduct: Products[] = await sanityFetchProducts({
    query: products,
  });
  return (
    <div className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        {
          allProduct.map((product)=>(
            <div key={product._id} className="border rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image src={product.imageUrl}alt={product.title} width={300} height={300} className=""/>
            <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-sm rounded">
              {
                product.badge
              }
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{product.title}</h3>
            <p className="text-gray-700 font-semibold">${product.price}</p>
          </div>
        </div>
          ))
        }
        

      </div>
    </div>
  );
}
