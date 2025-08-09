import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-32 relative z-10">
        {/* About Me Section */}
        <section className="mb-20">
          <div className="text-center mb-8 transform hover:scale-105 transition-all duration-500">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
              ✨ About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="backdrop-blur-xl bg-white/30 dark:bg-black/30 p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 max-w-4xl mx-auto hover:shadow-purple-500/25 transition-all duration-500 hover:-translate-y-2">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium text-center">
              {personalDetails.about}
            </p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-20">
          <div className="text-center mb-12 transform hover:scale-105 transition-all duration-500">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
              💼 Work Experience
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8 max-w-5xl mx-auto">
            {React.Children.toArray(
              workDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
                <div 
                  className="group backdrop-blur-xl bg-gradient-to-br from-white/40 to-white/20 dark:from-gray-800/40 dark:to-gray-900/20 p-8 rounded-3xl shadow-2xl border border-white/30 dark:border-gray-600/30 hover:shadow-emerald-500/25 transition-all duration-700 hover:-translate-y-3 hover:rotate-1 transform"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
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
        </section>

        {/* Education Section */}
        <section>
          <div className="text-center mb-12 transform hover:scale-105 transition-all duration-500">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
              🎓 Education
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8 max-w-5xl mx-auto">
            {React.Children.toArray(
              eduDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
                <div 
                  className="group backdrop-blur-xl bg-gradient-to-br from-white/40 to-white/20 dark:from-gray-800/40 dark:to-gray-900/20 p-8 rounded-3xl shadow-2xl border border-white/30 dark:border-gray-600/30 hover:shadow-orange-500/25 transition-all duration-700 hover:-translate-y-3 hover:-rotate-1 transform"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
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
        </section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom gradient text selection */
        ::selection {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
      `}</style>
    </main>
  );
}

export default About;