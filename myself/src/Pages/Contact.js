import React from "react";
import { contactDetails } from "../Details";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  const { email, instagram } = contactDetails;

  return (
    <main className="container mx-auto px-4 py-10 max-w-3xl">
      <div className="bg-white dark:bg-[#1f1f1f] shadow-md dark:shadow-lg rounded-xl p-8 md:p-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-heading dark:text-light-heading mb-4">
          Let's Connect 🌐
        </h1>
        <p className="text-lg md:text-xl text-content dark:text-gray-300 italic max-w-xl mx-auto mb-6">
          I'm always open to ideas, collaborations, or just a friendly hello.
        </p>

        {/* Email Section */}
        <div className="mt-6">
          <h3 className="text-xl md:text-2xl text-gradient font-semibold mb-1">
            📬 Drop me a mail
          </h3>
          <a
            href={`mailto:${email}`}
            className="text-base md:text-lg underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {email}
          </a>
        </div>

        {/* Instagram Section */}
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl text-gradient font-semibold mb-1">
            📸 Let's vibe on Instagram
          </h3>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition-colors text-base md:text-lg"
          >
            <FaInstagram className="text-2xl" />
            @nitesh_reddy_
          </a>
        </div>

        {/* Footer Vibe Quote */}
        <div className="mt-10 text-sm md:text-base text-gray-500 dark:text-gray-400 italic">
          Creating. Connecting. Collaborating. <br />
          Let's build something amazing together 🚀
        </div>
      </div>
    </main>
  );
}

export default Contact;
