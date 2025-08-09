import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto px-6 pt-16 pb-24">
      {/* About Me Section */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-dark-heading dark:text-light-heading mb-8 tracking-tight">
            About Me
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>
          <p className="text-lg text-content text-center leading-relaxed">
            {personalDetails.about}
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-heading dark:text-light-heading mb-8 tracking-tight">
            Work Experience
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:gap-6">
            {React.Children.toArray(
              workDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
                <div 
                  className={`bg-white/80 dark:bg-[#1f1f1f]/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  } transform hover:-translate-y-1`}
                >
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
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-heading dark:text-light-heading mb-8 tracking-tight">
            Education
          </h1>
          <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {React.Children.toArray(
              eduDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
                <div className="bg-white/80 dark:bg-[#1f1f1f]/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
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
        </div>
      </section>
    </main>
  );
}

export default About;