import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 pt-16 pb-24">
        {/* About Me Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              About Me
            </h1>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 md:p-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {personalDetails.about}
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Professional Experience
            </h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              {React.Children.toArray(
                workDetails.map(({ Position, Company, Location, Type, Duration }) => (
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200">
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Education
            </h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              {React.Children.toArray(
                eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200">
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
      </div>
    </main>
  );
}

export default About;