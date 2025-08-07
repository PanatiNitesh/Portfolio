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

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Programming Languages */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Programming Languages
        </h1>
        <section className="flex flex-wrap items-center gap-8 pt-6">
          <img src={python} title="Python" alt="Python" className="h-14" />
          <img src={c} title="C" alt="C" className="h-14" />
          <img src={java} title="Java" alt="Java" className="h-14" />
        </section>
      </section>

      {/* Web Development */}
      <section className="pt-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Web Development
        </h1>
        <section className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 items-center gap-10 pt-6">
          <img src={react} title="React" alt="React" className="h-14" />
          <img src={next} title="Next.js" alt="Next.js" className="h-14" />
          <img src={mongodb} title="MongoDB" alt="MongoDB" className="h-14" />
          <img src={js} title="JavaScript" alt="JavaScript" className="h-14" />
          <img src={node} title="Node.js" alt="Node.js" className="h-14" />
          <img src={express} title="Express.js" alt="Express.js" className="h-14" />
          <img src={html} title="HTML5" alt="HTML5" className="h-14" />
          <img src={css} title="CSS3" alt="CSS3" className="h-14" />
          <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className="h-14" />
        </section>
      </section>

      {/* Tools */}
      <section className="pt-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
        <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={vscode} title="VS Code" alt="VS Code" className="h-14" />
          <img src={git} title="Git" alt="Git" className="h-14" />
          <img src={github} title="Github" alt="Github" className="h-14" />
          <img src={npm} title="NPM" alt="NPM" className="h-14" />
          <img src={postman} title="Postman" alt="Postman" className="h-14" />
          <img src={figma} title="Figma" alt="Figma" className="h-14" />
          <img src={canva} title="Canva" alt="Canva" className="h-14" />
          <img src={docker} title="Docker" alt="Docker" className="h-14" />
        </section>
      </section>
    </main>
  );
}

export default Technologies;
