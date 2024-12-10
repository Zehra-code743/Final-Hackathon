'use client'; // If using Next.js 13 or later with app directory

import React from "react"; // Import React

import Image from "next/image"; // Import Image component from Next.js

const AboutUs = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Text Content */}
        <div className="bg-teal-700 text-white p-6 rounded-lg flex-1">
          <h2 className="text-3xl font-bold mb-3">About Us - Comforty</h2>
          <p className="text-gray-200 mb-4">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
        </div>
        {/* Image Section */}
        <div className="bg-gray-200 h-full rounded-lg overflow-hidden flex-1">
          <Image
            src="/image.png" // Correct the path to your image file (this should be relative to the "public" folder)
            alt="Comforty - About Us"
            width={500} // Specify the width of the image
            height={500} // Specify the height of the image
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Brand Differentiation Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">What Makes Our Brand Different</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Differentiation Cards */}
        <div className="bg-gray-100 p-4 rounded-lg text-center w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Next day as standard</h3>
          <p className="text-sm text-gray-600">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Made by true artisans</h3>
          <p className="text-sm text-gray-600">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Unbeatable prices</h3>
          <p className="text-sm text-gray-600">
            For our materials and quality, you won’t find better prices anywhere.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Recycled packaging</h3>
          <p className="text-sm text-gray-600">
            We use 100% recycled to ensure our footprint is more manageable.
          </p>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="text-center mt-8 mb-6">
        <h2 className="text-3xl font-bold">Our Popular Products</h2>
      </div>
      <div className="flex flex-wrap w-[630] justify-center gap-4">
        {/* Product Card - The Poplar suede sofa */}
        <div className="bg-gray-200 rounded-lg p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="h-48 rounded-lg mb-4">
            <Image
              src="/sofa.png" // Update with the actual path to your sofa image
              alt="The Poplar suede sofa"
              width={630} // Specify the width of the image
              height={375} // Specify the height of the image
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">The Poplar suede sofa</h3>
          <p className="text-gray-600">$99.00</p>
        </div>

        {/* Product Card - The Dandy chair */}
        <div className="bg-gray-200 rounded-lg p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="h-48 rounded-lg mb-4">
            <Image
              src="/chair.png" // Update with the actual path to your Dandy chair image
              alt="The Dandy chair"
              width={305} // Specify the width of the image
              height={375} // Specify the height of the image
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">The Dandy chair</h3>
          <p className="text-gray-600">$99.00</p>
        </div>

        {/* Product Card - The Dandy chair */}
        <div className="bg-gray-200 rounded-lg p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="h-48 rounded-lg mb-4">
            <Image
              src="/chair3.png" // Update with the actual path to your Dandy chair image
              alt="The Dandy chair"
              width={305} // Specify the width of the image
              height={375} // Specify the height of the image
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">The Dandy chair</h3>
          <p className="text-gray-600">$99.00</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
