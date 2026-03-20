import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20 px-6">
      <section className="text-center">

        {/* Decorative top accent line */}
        <div className="flex justify-center mb-6">
          <span className="block h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 opacity-80" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-5">
          <span className="h-px w-12 bg-gray-200 dark:bg-gray-700" />
          <span className="w-2 h-2 rounded-full bg-indigo-400 dark:bg-indigo-500 opacity-70" />
          <span className="h-px w-12 bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Description */}
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-base">
          Here is a highlight of my most recent work where I applied my skills to
          build practical, real-world solutions and gain hands-on experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-6">
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

      </section>
    </main>
  );
}

export default Projects;