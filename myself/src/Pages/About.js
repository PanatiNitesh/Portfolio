import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto px-6 pt-16 pb-24 bg-black min-h-screen">
      {/* About Me Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white dark:text-light-heading mb-6 tracking-tight">
          ✨ About Me
        </h1>
        <p className="text-lg text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
          {personalDetails.about}
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white dark:text-light-heading mb-10 tracking-tight">
          💼 Work Experience
        </h1>
        <div className="space-y-8">
          {React.Children.toArray(
            workDetails.map(({ Position, Company, Location, Type, Duration }) => (
              <div className="bg-gray-900/80 dark:bg-[#1f1f1f]/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white dark:text-light-heading mb-10 tracking-tight">
          🎓 Education
        </h1>
        <div className="space-y-8">
          {React.Children.toArray(
            eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
              <div className="bg-gray-900/80 dark:bg-[#1f1f1f]/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  duration={Duration}
                  {...(Type && { type: Type })}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default About;