import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="bg-black dark:bg-black min-h-screen">
      <div className="container mx-auto px-6 pt-20 pb-24">
        {/* About Me Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              About Me
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-16 rounded-full"></div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 md:p-12 hover:bg-gray-900/70 transition-all duration-300">
              <p className="text-xl text-gray-300 leading-relaxed">
                {personalDetails.about}
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Professional Experience
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid gap-6">
              {React.Children.toArray(
                workDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
                  <div className="group bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-8 hover:bg-gray-900/60 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <Work
                        position={Position}
                        company={Company}
                        location={Location}
                        type={Type}
                        duration={Duration}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Education
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid gap-6">
              {React.Children.toArray(
                eduDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
                  <div className="group bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-8 hover:bg-gray-900/60 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <Work
                        position={Position}
                        company={Company}
                        location={Location}
                        duration={Duration}
                        {...(Type && { type: Type })}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Subtle background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
    </main>
  );
}

export default About;