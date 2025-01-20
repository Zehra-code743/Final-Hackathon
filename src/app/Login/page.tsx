import React from "react";

const Login = () => {
  return (
    <div className="font-[sans-serif] max-sm:px-4">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          {/* Form Section */}
          <div className="md:max-w-md w-full px-4 py-4">
            <form>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4 text-gray-800">
                  Don't have an account?
                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </a>
                </p>
              </div>

              {/* Email Input */}
              <div>
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <input
                  name="email"
                  type="text"
                  required
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>

              {/* Password Input */}
              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <div className="mt-12">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>

              {/* Divider */}
              <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              {/* Social Login Buttons */}
              <div className="space-x-6 flex justify-center">
                <button type="button" className="text-blue-600 hover:underline">Google</button>
                <button type="button" className="text-blue-400 hover:underline">Twitter</button>
                <button type="button" className="text-blue-800 hover:underline">Facebook</button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full h-full flex items-center bg-[#000842] rounded-xl p-8">
            <img
              src="/sofa.webp"
              className="w-full aspect-[12/12] object-contain"
              alt="login-image"
            />
          </div>
        </div>

        {/* Footer Social Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Facebook
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800"
          >
            Google
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
