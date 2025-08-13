import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Project Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      {/* Title */}
      <h2 className="text-lg font-semibold text-dark-heading dark:text-light-heading mb-2">
        {title}
      </h2>

      {/* Description */}
      <p className="text-sm text-dark-content dark:text-light-content mb-4">
        {description}
      </p>

      {/* Tech Stack */}
      {techstack && (
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
          Tech Stack: {techstack}
        </p>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {previewLink && (
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        )}

        {/* Only show if githubLink exists */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
