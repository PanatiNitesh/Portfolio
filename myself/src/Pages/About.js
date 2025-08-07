import React from "react";
import { personalDetails, workDetails, eduDetails } from "../Details";
import { FaUserAstronaut } from "react-icons/fa";

function About() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl text-light-paragraph dark:text-white">
      <section className="text-center mb-12">
        <FaUserAstronaut className="text-4xl mx-auto mb-4 text-blue-500 animate-pulse" />
        <h1 className="text-4xl font-bold dark:text-blue-400">About Me</h1>
        <p className="text-lg mt-4 dark:text-gray-300">
          Hello! I’m <span className="font-semibold text-blue-400">{personalDetails.name}</span>, a passionate developer
          with a background in {personalDetails.background}. I enjoy turning complex problems into
          simple, beautiful solutions.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-dark-secondary p-6 rounded-xl shadow-md border border-blue-500">
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Education</h2>
          {eduDetails.map((edu, index) => (
            <div key={index}>
              <h3 className="font-medium">{edu.degree}</h3>
              <p className="text-sm text-gray-400">{edu.institution}</p>
              <p className="text-sm">{edu.year}</p>
            </div>
          ))}
        </div>

        <div className="bg-dark-secondary p-6 rounded-xl shadow-md border border-blue-500">
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Work Experience</h2>
          {workDetails.map((work, index) => (
            <div key={index}>
              <h3 className="font-medium">{work.role}</h3>
              <p className="text-sm text-gray-400">{work.company}</p>
              <p className="text-sm">{work.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
