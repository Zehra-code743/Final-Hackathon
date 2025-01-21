import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { FaFacebook, FaGithub } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 font-sans">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-2xl flex">
        {/* Left Side (Form) */}
        <div className="w-full sm:w-1/2 px-6">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Sign in to access your account
          </p>
          <form className="mt-6 space-y-4">
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email address"
              required
            />
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
              required
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 rounded border-gray-300" />
                Remember me
              </label>
              <Link href="/forgot-password">
                <span className="text-sm text-indigo-600 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link href="/register">
              <span className="text-indigo-600 hover:underline cursor-pointer">Register</span>
            </Link>
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <Link href="https://www.facebook.com" passHref>
              <span className="cursor-pointer">
                <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-800 transition duration-300" />
              </span>
            </Link>
            <Link href="https://github.com" passHref>
              <span className="cursor-pointer">
                <FaGithub className="w-8 h-8 text-gray-800 hover:text-black transition duration-300" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side (Simple Image using Next.js Image) */}
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <Image
            src="/product2.webp" // Replace with your actual image path
            alt="Login Illustration"
            width={400} // Set the width of the image
            height={400} // Set the height of the image
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
