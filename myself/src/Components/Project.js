import React from "react";
import { ExternalLink, Github } from "lucide-react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  // Convert techstack string to array if needed for cleaner badge rendering
  const techArray = typeof techstack === 'string' ? techstack.split(',') : techstack;

  return (
    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
      {/* Thumbnail */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-4 flex-grow">
          {description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techArray.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;