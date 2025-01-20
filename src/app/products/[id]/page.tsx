import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { GrCart } from "react-icons/gr";

type ProductDetails = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  priceWithoutDiscount?: number;
  badge?: string;
};

const getProduct = async (id: string) => {
  const query = `
    *[_type == "products" && _id == $id][0]{
      _id,
      title,
      price,
      "imageUrl": image.asset->url,
      description,
      priceWithoutDiscount,
      badge
    }
  `;
  return await client.fetch(query, { id });
};

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product: ProductDetails = await getProduct(params.id);

  if (!product) {
    return (
      <div className="text-center mt-20">
        <p className="text-2xl font-semibold text-red-500">Product not found</p>
      </div>
    );
  }

  return (
    <section>
      <div className="w-full lg:my-5 mt-3 md:my-10 px-4 ">
        <div className="flex max-w-screen-xl flex-col md:flex-row lg:flex-row justify-between mx-auto lg:mb-20 md:mb-16 mb-10 gap-0 md:gap-3">
          <div className="flex flex-col lg:flex-row md:flex-row items-center gap-8">
            
            {/* Product Image */}
            <div>
              <Image
                src={product.imageUrl}
                alt={product.title}
                height={500}
                width={500}
                className="cursor-pointer  sm:w-[300px] lg:w-[500px]  md:w-[300px]"
              />
            </div>
            <div className="lg:w-[500px] sm:w-[300px] md:w-[300px] ">
              <h1 className="lg:text-[50px] w-full text-[30px] md:w-full md:text-[30px] font-bold 
              lg:mb-8 md:mb-3 mb-3 mt-0  lg:mt-0 md:mt-0">
                {product.title}
              </h1>
              <span className="bg-[#029FAE] mb-2 w-fit px-4 text-white text-[14px] lg:text-[20px] md:text-[16px]  py-2 rounded-full  hover:bg-[#02a0aece]">
                ${product.price}.00
              </span>
              {product.priceWithoutDiscount && (
                  <span className="text-xl text-gray-500 line-through ml-4">
                    ${product.priceWithoutDiscount}
                  </span>
                )}
                {product.badge && (
                <div className="w-fit mt-4 bg-yellow-400 text-yellow-900 font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              )}
              <div className="h-[2px] w-full bg-[#F0F2F3] lg:my-8 md:my-3 my-3"></div>
              <p className="lg:text-[22px] text-[16px] md:text-[16px] font-extralight text-[#636270]">
                {product.description}
              </p>
              <button className="text-[14px] lg:text-[18px] md:text-[14px] bg-[#029FAE] px-5 py-2 text-white rounded-md lg:mt-10 mt-3 md:mt-3 flex gap-2 items-center font-bold hover:bg-[#02a0aece]">
                <GrCart className="text-md" />
                Add to Cart
              </button>
            </div>
            
          </div>
          
        </div>
        {/* <div className="max-w-screen-xl mx-auto ">
                  <div className="flex justify-between lg:mb-11 md:mb-10 mb-7">
                    <p className="lg:text-3xl sm:text-[30px] md:text-[30px] font-bold">FEATURED PRODUCTS</p>
                    <p className="hover:border-b-2 cursor-pointer border-black ">View All</p>
                  </div>
                  <div className=" grid grid-col lg:grid-cols-5 md:grid-cols-3 cursor-pointer gap-5 lg:gap-8 md:gap-3 mx-auto">
                    <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
                      <div>
                        <Image
                          src={require("@/public/all-product/product_7.png")}
                          alt="chair"
                          height={240}
                          width={240}
                          className="w-[300px] lg:w-[240px] md:w-[230px]"
                        />
                      </div>
                      <div className="flex justify-between mt-3 cursor-pointer">
                        <p className="hover:text-[#029FAE]">Library Stool Chair</p>
                        <p className="font-bold ">$99</p>
                      </div>
                    </div>
                    <div className="lg:w-[230px] w-[300px]  md:w-[230px] mx-auto">
                      <div>
                        <Image
                          src={require("@/public/all-product/product_1.png")}
                          alt="chair"
                          height={240}
                          width={240}
                          className="w-[300px] lg:w-[240px] md:w-[230px]"
                        />
                      </div>
                      <div className="flex justify-between mt-3">
                        <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
                        <p className="font-bold">$99</p>
                      </div>
                    </div>
                    <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
                      <div>
                        <Image
                          src={require("@/public/all-product/product_12.png")}
                          alt="chair"
                          height={240}
                          width={240}
                          className="w-[300px] lg:w-[240px] md:w-[230px]"
                        />
                      </div>
                      <div className="flex justify-between mt-3">
                        <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
                        <p className="font-bold">$99</p>
                      </div>
                    </div>
                    <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
                      <div>
                        <Image
                          src={require("@/public/all-product/product_2.png")}
                          alt="chair"
                          height={240}
                          width={240}
                          className="w-[300px] lg:w-[240px] md:w-[230px]"
                        />
                      </div>
                      <div className="flex justify-between mt-3">
                        <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
                        <p className="font-bold">$99</p>
                      </div>
                    </div>
                    <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
                      <div>
                        <Image
                          src={require("@/public/all-product/product_9.png")}
                          alt="chair"
                          height={240}
                          width={240}
                          className="w-[300px] lg:w-[240px] md:w-[230px]"
                        />
                      </div>
                      <div className="flex justify-between mt-3">
                        <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
                        <p className="font-bold">$99</p>
                      </div>
                    </div>
                  </div>
                </div> */}
      </div>
    </section>
  );
};

export default ProductDetail;
