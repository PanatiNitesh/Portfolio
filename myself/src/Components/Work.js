import React from "react";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="group">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h1 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {position}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-400 font-medium">{company}</span>
            {type && (
              <span className="bg-blue-500/10 text-blue-400 text-[10px] px-2 py-0.5 rounded-full border border-blue-500/20 uppercase tracking-wider font-bold">
                {type}
              </span>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-blue-500 font-bold text-sm tracking-tight">{duration}</p>
          <p className="text-gray-500 text-xs mt-1">{location}</p>
        </div>
      </div>
    </article>
  );
}

export default Work;