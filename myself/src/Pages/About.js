import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* About Section */}
      <section className="mb-20 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
          🚀 About Me
        </h1>
        <div className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-lg bg-white/10 dark:bg-black/10 p-6 rounded-2xl shadow-lg">
          {personalDetails.about}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mb-16" />

      {/* Work Experience */}
      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-center text-dark-heading dark:text-light-heading mb-10">
          💼 Work Experience
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {React.Children.toArray(
            workDetails.map((props) => (
              <div className="rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md p-5 shadow-xl border border-gray-300/10 dark:border-white/10 hover:scale-[1.02] transition-transform duration-300">
                <Work {...props} />
              </div>
            ))
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-16" />

      {/* Education */}
      <section>
        <h2 className="text-4xl font-semibold text-center text-dark-heading dark:text-light-heading mb-10">
          🎓 Education
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {React.Children.toArray(
            eduDetails.map((props) => (
              <div className="rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md p-5 shadow-xl border border-gray-300/10 dark:border-white/10 hover:scale-[1.02] transition-transform duration-300">
                <Work {...props} />
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default About;
