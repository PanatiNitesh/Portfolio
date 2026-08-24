import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="min-h-screen bg-transparent pt-12 md:pt-16 pb-16 md:pb-24 px-4 md:px-8 overflow-x-hidden">
      <section className="container mx-auto max-w-7xl text-center">

        {/* Header Section */}
        <div className="space-y-4 mb-16 md:mb-20">
          <span className="text-blue-600 dark:text-blue-400 font-mono tracking-[0.3em] uppercase text-[10px] font-bold block">
            Selected Works
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#111827] dark:text-white tracking-tight leading-[1.1]">
            Featured Projects
          </h1>

          <p className="text-slate-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base px-2 md:px-0">
            "Transforming complex technical requirements into elegant, high-impact digital experiences."
          </p>

          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectDetails.map(
            (
              { title, image, description, techstack, previewLink, githubLink },
              index
            ) => (
              <Project
                key={index}
                title={title}
                image={image}
                description={description}
                techstack={techstack}
                previewLink={previewLink}
                githubLink={githubLink}
              />
            )
          )}
        </div>

        {/* Footer Accent */}
        <div className="mt-20 flex flex-col items-center gap-4">
           <div className="w-[1px] h-12 bg-slate-300 dark:bg-stone-700" />
           <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-slate-400 dark:text-stone-500 font-bold">End of Gallery</p>
        </div>

      </section>
    </main>
  );
}

export default Projects;