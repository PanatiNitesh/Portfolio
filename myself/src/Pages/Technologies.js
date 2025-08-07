import React, { useState } from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const categories = {
    Languages: ["python", "c", "java"],
    Web: ["react", "next", "js", "node", "express", "html", "css", "tailwind", "mongodb"],
    Tools: ["vscode", "git", "github", "npm", "postman", "figma", "canva", "docker"],
  };

  const [active, setActive] = useState("Languages");

  const renderCards = (keys) =>
    keys.map((key, i) => {
      const { src, title } = techStackDetails[key];
      return (
        <div
          key={i}
          className="flex flex-col items-center p-5 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl border border-gray-300/10 dark:border-white/10 shadow-lg transition-all duration-300 hover:scale-105"
        >
          <img
            src={src}
            alt={title}
            className="h-14 w-14 object-contain"
            onError={(e) => (e.target.style.display = "none")}
          />
          <p className="mt-3 text-sm font-medium text-center text-dark-subtext dark:text-light-subtext">
            {title}
          </p>
        </div>
      );
    });

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">
        🛠️ Technologies I Use
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded-full border-2 font-medium transition-all ${
              active === key
                ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                : "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Tech Cards */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {renderCards(categories[active])}
      </section>
    </main>
  );
}

export default Technologies;
