import React from "react";
import { ExternalLink, Github } from "lucide-react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  const techArray = typeof techstack === 'string' ? techstack.split(',') : techstack;

  return (
    <div className="group flex flex-col bg-[#FDFBF7] dark:bg-[#18181B] rounded-[2.25rem] overflow-hidden border border-stone-300/70 dark:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-stone-300/50 dark:hover:shadow-black/50 hover:-translate-y-1.5 text-left">
      {/* Thumbnail */}
      <div className="relative h-56 overflow-hidden bg-stone-200 dark:bg-stone-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] dark:from-[#18181B] via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow p-7 md:p-8">
        <h3 className="text-xl font-bold text-[#1E1E1E] dark:text-white mb-2 group-hover:text-[#6B7E63] dark:group-hover:text-[#8BA87E] transition-colors leading-snug">
          {title}
        </h3>
        
        <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {techArray.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[9px] font-mono font-semibold uppercase tracking-wider rounded-lg bg-[#F4EFE6] dark:bg-white/[0.04] text-stone-700 dark:text-stone-300 border border-stone-300/50 dark:border-white/5"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 pt-4 border-t border-stone-200 dark:border-white/5">
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E1E1E] dark:text-white hover:text-[#6B7E63] dark:hover:text-[#8BA87E] transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;