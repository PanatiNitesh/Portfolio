import React, { useState } from "react";
import { technologies } from "../Details";
import { FaWrench } from "react-icons/fa";

function Technology() {
  const [category, setCategory] = useState("Web");

  const categories = ["Languages", "Web", "Tools"];

  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl text-center">
      <FaWrench className="text-4xl text-blue-500 mx-auto mb-3 animate-spin-slow" />
      <h1 className="text-3xl font-bold text-blue-400 mb-4">Technologies I Use</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full border-2 font-medium transition ${
              category === cat
                ? "bg-blue-500 text-white border-blue-500"
                : "border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {technologies[category].map((tech, index) => (
          <div
            key={index}
            className="bg-dark-secondary p-5 rounded-lg shadow hover:scale-105 transition duration-300 border border-gray-600"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 mx-auto mb-2 object-contain"
            />
            <p className="text-white font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technology;
