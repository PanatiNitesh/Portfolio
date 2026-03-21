import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="min-h-screen bg-transparent pt-20 md:pt-28 pb-16 md:pb-24 px-4 md:px-8 overflow-x-hidden">
      <section className="container mx-auto max-w-7xl text-center">

        {/* Header Section */}
        <div className="space-y-4 md:space-y-6 mb-16 md:mb-24">
          <div className="flex justify-center items-center gap-3">
             <span className="h-px w-8 bg-indigo-500/30" />
             <span className="h-px w-8 bg-indigo-500/30" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tighter leading-[1.1]">
            Featured{" "}
             <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg px-2 md:px-0 font-light italic">
            "Turning complex logic into elegant digital solutions, one project at a time."
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14 mt-6">
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
        <div className="mt-24 md:mt-32 flex flex-col items-center gap-4">
           <div className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-transparent rounded-full opacity-20" />
           <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 dark:text-gray-600 font-bold">End of Gallery</p>
        </div>

      </section>
    </main>
  );
}

export default Projects;