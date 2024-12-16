// pages/contact.js (or wherever your ContactForm component is)

import Header from "@/components/header"; // Adjust the path as per your project structure
import Footer from "@/components/footer"; // Adjust the path as per your project structure

export default function ContactForm() {
  return (
    <div>
      {/* Render Header */}
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-center mb-4">Get In Touch With Us</h2>
          <p className="text-gray-500 text-center mb-8">
            For more information about our product or services, drop us an email. Our staff will be happy to help you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left Section */}
            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">📍 Address</h3>
                <p className="text-gray-600">230, 3rd St, Demo, New York 123456, United States</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">📞 Phone</h3>
                <p className="text-gray-600">Main: +1 234 567 890</p>
                <p className="text-gray-600">Helper: +1 234 567 891</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🕒 Working Time</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 - 21:00</p>
                <p className="text-gray-600">Saturday - Sunday: 10:00 - 21:00</p>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium text-gray-700" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@email.com"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="This is an optional field"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message here..."
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#029FAE] text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Render Footer */}
      <Footer />
    </div>
  );
}
