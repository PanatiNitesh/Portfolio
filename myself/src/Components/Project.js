// Project.js
import React from "react";
import { FaGithub, FaFileAlt } from "react-icons/fa";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <div className="project-card">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-sm text-gray-500 mt-1">{techstack}</p>

      <div className="flex gap-4 mt-4">
        {previewLink && (
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaFileAlt /> Live Preview
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaGithub /> View Code
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
