import React from "react";

export default function Search() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Search Tires By Size
        </h2>

        {/* Search Form */}
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Tire Width */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Width
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Width</option>
                <option value="185">185</option>
                <option value="195">195</option>
                <option value="205">205</option>
                <option value="215">215</option>
                <option value="225">225</option>
              </select>
            </div>

            {/* Aspect Ratio */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Aspect Ratio
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Ratio</option>
                <option value="55">55</option>
                <option value="60">60</option>
                <option value="65">65</option>
                <option value="70">70</option>
                <option value="75">75</option>
              </select>
            </div>

            {/* Diameter */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Diameter
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Diameter</option>
                <option value="15">15"</option>
                <option value="16">16"</option>
                <option value="17">17"</option>
                <option value="18">18"</option>
                <option value="19">19"</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
