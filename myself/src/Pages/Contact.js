import React from "react";
import { contactDetails } from "../Details";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  const { email, instagram } = contactDetails;

  return (
    <main className="container mx-auto max-width section text-center">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-dark-heading dark:text-light-heading">
        Let's Connect 🌐
      </h1>
      <p className="text-xl md:text-2xl text-content dark:text-light-content mt-4 max-w-xl mx-auto italic">
        I'm always open to ideas, collaborations, or just a friendly hello.
      </p>

      {/* Email Section */}
      <div className="mt-10">
        <h3 className="text-2xl md:text-3xl text-gradient font-semibold mb-2">
          📬 Drop me a mail
        </h3>
        <a
          href={`mailto:${email}`}
          className="text-xl md:text-2xl underline hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          {email}
        </a>
      </div>

      {/* Instagram Section */}
      <div className="mt-10">
        <h3 className="text-2xl md:text-3xl text-gradient font-semibold mb-2">
          📸 Let's vibe on Instagram
        </h3>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xl md:text-2xl text-pink-600 hover:text-pink-400 transition-colors"
        >
          <FaInstagram className="text-3xl" /> @my.insta.handle
        </a>
      </div>

      {/* Cool Quote / Aesthetic Vibe */}
      <div className="mt-12 text-sm md:text-base text-gray-500 dark:text-gray-400 italic">
        Creating. Connecting. Collaborating. <br />
        Let's build something amazing together 🚀
      </div>
    </main>
  );
}

export default Contact;
