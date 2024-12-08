import Image from "next/image";

const Cart = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Bag</h2>

          {/* Item 1 */}
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-orange-200 rounded">
                {/* Correct image path */}
                <Image src="/Frame.png" alt="Library Stool Chair" width={96} height={96} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">$99</p>
              <p className="text-sm text-gray-500">MRP</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142C18.098 20.403 17.11 21 16.052 21H7.948c-1.058 0-2.046-.597-2.081-1.858L5 7m2 0l1-3h8l1 3m-6 5v6m4-6v6M9 7h6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gray-300 rounded">
                {/* Correct image path */}
                <Image src="/Frame1.png" alt="Library Stool Chair" width={96} height={96} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">$99</p>
              <p className="text-sm text-gray-500">MRP</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142C18.098 20.403 17.11 21 16.052 21H7.948c-1.058 0-2.046-.597-2.081-1.858L5 7m2 0l1-3h8l1 3m-6 5v6m4-6v6M9 7h6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
