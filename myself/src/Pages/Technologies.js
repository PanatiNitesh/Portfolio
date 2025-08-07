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
      <img
        key={index}
        src={src}
        alt={title}
        title={title}
        className="h-14 transition-transform duration-200 hover:scale-105"
        onError={(e) => (e.target.style.display = "none")}
      />
    ));

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Programming Languages */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold">
          Programming Languages
        </h1>
        <div className="flex flex-wrap items-center gap-8 pt-6">
          {renderTechIcons([
            { src: python, title: "Python" },
            { src: c, title: "C" },
            { src: java, title: "Java" },
          ])}
        </div>
      </section>

      {/* Web Development */}
      <section className="pt-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold">
          Web Development
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 items-center gap-10 pt-6">
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
      <section className="pt-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold">
          Tools
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
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
