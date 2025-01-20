import React from 'react';
import { FaCcMastercard, FaCcVisa, FaPaypal } from 'react-icons/fa'; // Importing icons

const Checkout = () => {
  return (
    <div className="font-sans bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 inline-block border-b-[4px] border-blue-600 pb-2 tracking-tight">
            Checkout
          </h2>
        </div>

        <div className="mt-12">
          {/* Personal Details Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-gray-600">01</h3>
              <h3 className="text-2xl font-semibold text-gray-800 mt-1">Personal Details</h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Phone number"
                      className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Shopping Address Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-4xl font-bold text-gray-600">02</h3>
              <h3 className="text-2xl font-semibold text-gray-800 mt-1">Shopping Address</h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Street address"
                      className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Zip Code"
                      className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-4xl font-bold text-gray-600">03</h3>
              <h3 className="text-2xl font-semibold text-gray-800 mt-1">Payment Method</h3>
            </div>

            <div className="md:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-center">
                  <input type="radio" className="w-6 h-6 cursor-pointer" id="card" />
                  <label htmlFor="card" className="ml-4 flex gap-2 items-center cursor-pointer">
                    <FaCcMastercard className="w-16 h-16 text-gray-800 hover:text-blue-600 transition-all" />
                    <FaCcVisa className="w-16 h-16 text-gray-800 hover:text-blue-600 transition-all" />
                  </label>
                </div>

                <div className="flex items-center">
                  <input type="radio" className="w-6 h-6 cursor-pointer" id="paypal" />
                  <label htmlFor="paypal" className="ml-4 flex gap-2 items-center cursor-pointer">
                    <FaPaypal className="w-20 h-16 text-gray-800 hover:text-blue-600 transition-all" />
                  </label>
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-6 mt-6">
                <div className="col-span-2">
                  <input
                    type="number"
                    placeholder="Card number"
                    className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="EXP."
                    className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="CVV"
                    className="px-6 py-4 bg-white text-gray-800 w-full text-lg border-2 rounded-lg focus:border-blue-500 outline-none shadow-sm hover:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox for Terms */}
          <div className="flex items-center mt-8">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-6 mt-12">
            <button
              type="button"
              className="px-8 py-4 text-lg font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100 transition-all"
            >
              Pay later
            </button>
            <button
              type="button"
              className="px-8 py-4 text-lg font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
