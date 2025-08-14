// Project.js
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <div className="project-card">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      {/* Title */}
      <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{techstack}</p>

      {/* Links */}
      <div className="flex gap-4 mt-4">
        {previewLink && (
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            <FiExternalLink /> Live Preview
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300"
          >
            <FaGithub /> View Code
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
