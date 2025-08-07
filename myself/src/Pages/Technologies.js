import React, { useState } from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const categories = {
    Languages: ["python", "c", "java"],
    "Web Development": ["react", "next", "mongodb", "js", "node", "express", "html", "css", "tailwind"],
    Tools: ["vscode", "git", "github", "npm", "postman", "figma", "canva", "docker"],
  };

  const [activeTab, setActiveTab] = useState("Languages");

  const renderTech = (keys) =>
    keys.map((key, i) => {
      const { src, title } = techStackDetails[key];
      return (
        <div
          key={i}
          className="flex flex-col items-center justify-center p-4 rounded-xl backdrop-blur-md bg-white/30 dark:bg-[#1f1f1f]/40 shadow-md hover:shadow-xl transition-transform hover:scale-105"
        >
          <img
            src={src}
            alt={title}
            title={title}
            className="h-12 md:h-14 lg:h-16 object-contain"
            onError={(e) => (e.target.style.display = "none")}
          />
          <p className="text-sm mt-2 text-center text-dark-subtext dark:text-light-subtext">
            {title}
          </p>
        </div>
      );
    });

  return (
    <main className="container mx-auto max-width pt-10 pb-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-dark-heading dark:text-light-heading">
        🧠 My Tech Stack
      </h1>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full font-semibold border transition-all ${
              activeTab === category
                ? "bg-primary text-white shadow-md"
                : "bg-transparent text-primary border-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {renderTech(categories[activeTab])}
      </section>
    </main>
  );
}

export default Technologies;
