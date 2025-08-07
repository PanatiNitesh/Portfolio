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
      <div
        key={index}
        className="flex flex-col items-center justify-center bg-white dark:bg-[#1f1f1f] p-4 rounded-xl shadow-md dark:shadow-none hover:shadow-lg transition-shadow duration-300"
      >
        <img
          src={src}
          alt={title}
          title={title}
          className="h-12 md:h-14 lg:h-16 object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          onError={(e) => (e.target.style.display = "none")}
        />
        <p className="text-xs mt-2 text-center text-dark-subtext dark:text-light-subtext">
          {title}
        </p>
      </div>
    ));

  return (
    <main className="container mx-auto max-width pt-10 pb-20 px-4">
      {/* Programming Languages */}
      <section className="mb-12">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center text-dark-heading dark:text-light-heading">
          Programming Languages
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-8">
          {renderTechIcons([
            { src: python, title: "Python" },
            { src: c, title: "C" },
            { src: java, title: "Java" },
          ])}
        </div>
      </section>

      {/* Web Development */}
      <section className="mb-12">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center text-dark-heading dark:text-light-heading">
          Web Development
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-8">
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
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center text-dark-heading dark:text-light-heading">
          Tools
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-8">
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
    </main>
  );
}

export default Technologies;
