import React from "react";

export default function Hero() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Text content */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-white mb-4">
            Premium Tires for Every Journey
          </h1>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Shop Tires
          </button>
        </div>

        {/* Right side - Image */}
        <div className="flex-1">
          <img
            src="/tire.png.jpg"
            alt="Premium tire"
            className="w-80 h-80 object-cover rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
