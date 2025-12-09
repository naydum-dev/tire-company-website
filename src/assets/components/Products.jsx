import React from "react";

export default function Products() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="/All season tires.jpg"
              alt="All-Season Tire"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                All-Season Tire
              </h3>
              <p className="text-gray-600 mb-4">
                Perfect for year-round driving with excellent grip in all
                weather conditions.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  ₦129,999
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="/Performace tires.jpg"
              alt="Performance Tire"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Performance Tire
              </h3>
              <p className="text-gray-600 mb-4">
                High-performance tires designed for sports cars and aggressive
                driving.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  ₦189,999
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="/All teraiin tires.jpg"
              alt="Winter Tire"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Winter Tire
              </h3>
              <p className="text-gray-600 mb-4">
                Superior traction on snow and ice for safe winter driving.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  ₦159,999
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
