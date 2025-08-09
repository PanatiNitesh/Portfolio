import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    python,
    c,
    java,
    react,
    next,
    mongodb,
    js,
    node,
    express,
    html,
    css,
    tailwind,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    canva,
    docker,
  } = techStackDetails;

  const renderTechIcons = (techArray) =>
    techArray.map(({ src, title }, index) => (
      <div key={index} className="group flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
        <img
          src={src}
          alt={title}
          title={title}
          className="h-12 mb-3 transition-transform duration-200 group-hover:scale-110"
          onError={(e) => (e.target.style.display = "none")}
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {title}
        </span>
      </div>
    ));

  return (
    <main className="container mx-auto max-width pt-16 pb-24 px-6">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark-heading dark:text-light-heading mb-6 tracking-tight">
          Technologies & Skills
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My technical arsenal for building modern, scalable applications
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Programming Languages */}
        <section className="bg-white/80 dark:bg-[#1f1f1f]/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-blue-500 rounded-full mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading">
              Programming Languages
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {renderTechIcons([
              { src: python, title: "Python" },
              { src: c, title: "C" },
              { src: java, title: "Java" },
            ])}
          </div>
        </section>

        {/* Web Development */}
        <section className="bg-white/80 dark:bg-[#1f1f1f]/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-blue-500 rounded-full mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading">
              Web Development
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {renderTechIcons([
              { src: react, title: "React" },
              { src: next, title: "Next.js" },
              { src: mongodb, title: "MongoDB" },
              { src: js, title: "JavaScript" },
              { src: node, title: "Node.js" },
              { src: express, title: "Express.js" },
              { src: html, title: "HTML5" },
              { src: css, title: "CSS3" },
              { src: tailwind, title: "Tailwind CSS" },
            ])}
          </div>
        </section>

        {/* Tools */}
        <section className="bg-white/80 dark:bg-[#1f1f1f]/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-blue-500 rounded-full mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading">
              Tools & Platforms
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {renderTechIcons([
              { src: vscode, title: "VS Code" },
              { src: git, title: "Git" },
              { src: github, title: "GitHub" },
              { src: npm, title: "NPM" },
              { src: postman, title: "Postman" },
              { src: figma, title: "Figma" },
              { src: canva, title: "Canva" },
              { src: docker, title: "Docker" },
            ])}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Technologies;