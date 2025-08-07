import React from "react";
import { personalDetails, workDetails, eduDetails } from "../Details";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import avatar from "../assets/avatar.svg"; // your image path

function About() {
  return (
    <main className="container mx-auto max-width px-6 pt-10 pb-20">
      {/* Intro Section */}
      <section className="text-center mb-16">
        <img
          src={avatar}
          alt="Avatar"
          className="mx-auto w-32 h-32 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-dark-heading dark:text-light-heading">
          👋 Hi, I’m <span className="text-primary">Nitesh</span>
        </h1>
        <p className="text-lg mt-4 text-content max-w-2xl mx-auto">
          {personalDetails.about}
        </p>
      </section>

      {/* Work Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-dark-heading dark:text-light-heading mb-8 flex items-center gap-2">
          <FaBriefcase className="text-primary" /> Work Experience
        </h2>
        <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
          {workDetails.map(({ Position, Company, Location, Type, Duration }, idx) => (
            <div key={idx} className="mb-8 relative">
              <div className="w-3 h-3 bg-primary rounded-full absolute -left-1.5 top-2.5"></div>
              <h3 className="text-xl font-semibold">{Position} @ {Company}</h3>
              <p className="text-sm text-muted">
                {Location} • {Type} • {Duration}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      <section>
        <h2 className="text-3xl font-bold text-dark-heading dark:text-light-heading mb-8 flex items-center gap-2">
          <FaGraduationCap className="text-primary" /> Education
        </h2>
        <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
          {eduDetails.map(({ Position, Company, Location, Type, Duration }, idx) => (
            <div key={idx} className="mb-8 relative">
              <div className="w-3 h-3 bg-primary rounded-full absolute -left-1.5 top-2.5"></div>
              <h3 className="text-xl font-semibold">{Position} @ {Company}</h3>
              <p className="text-sm text-muted">
                {Location} • {Type} • {Duration}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
