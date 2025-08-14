import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-extrabold mt-4 mb-10 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-500 to-purple-500 
                 border-b-4 border-blue-500 w-max pb-2">
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
