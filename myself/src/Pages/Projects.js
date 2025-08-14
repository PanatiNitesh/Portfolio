import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-6">
          {projectDetails.map(
            ({ title, image, description, techstack, previewLink, githubLink }, index) => (
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
