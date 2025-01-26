// import Company from '@/components/company'
// import FeaturedProducts from '@/components/FeatureProduct'
// import Header from '@/components/header'
// import HeroSection from '@/components/hero'
// import Style from '@/components/style'
// import React from 'react'
// import ProductsPage from "@/components/OurProducts";
// import TopCategories from '@/components/TopCategories'

// const page = () => {
//   return (
//     <div>
//        <Header/>
//        <HeroSection/>
//        <Company/>
//        <FeaturedProducts/>
//        <TopCategories/>
//        <Style/>
//        <ProductsPage
//        />

//     </div>
//   )
// }

// export default page









import React from "react";
import { CartProvider } from"@/app/context/Cartcontext"; // Adjust the path if needed
import Company from "@/components/company";
import FeaturedProducts from "@/components/FeatureProduct";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import Style from "@/components/style";
import ProductsPage from "@/components/OurProducts";
import TopCategories from "@/components/TopCategories";

const page = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <HeroSection />
        <Company />
        <FeaturedProducts />
        <TopCategories />
        <Style />
        <ProductsPage />
      </div>
    </CartProvider>
  );
};

export default page;
