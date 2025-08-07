import React from "react";
import { contactDetails } from "../Details";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  const { email, instagram } = contactDetails;

  return (
    <main className="container mx-auto px-4 pt-8 pb-16 max-w-4xl text-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-dark-heading dark:text-white relative inline-block after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2">
        Let's Connect 🌐
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl mt-4 text-gray-700 dark:text-gray-300 italic">
        Open to collaborations, opportunities, or just a casual chat. Feel free to reach out!
      </p>

      {/* Email */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-dark-heading dark:text-white mb-1">
          📬 Drop me an email
        </h3>
        <a
          href={`mailto:${email}`}
          className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline transition-all"
        >
          {email}
        </a>
      </div>

      {/* Instagram */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-dark-heading dark:text-white mb-1">
          📸 Let's vibe on Instagram
        </h3>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-pink-600 dark:text-pink-400 text-lg font-medium hover:underline transition-colors"
        >
          <FaInstagram className="text-2xl" />
          @nitesh_reddy_
        </a>
      </div>

      {/* Footer Message */}
      <div className="mt-12 text-sm md:text-base text-gray-500 dark:text-gray-400 italic">
  Whether it's code or conversation — I'm just a message away. <br />
  Let's spark ideas and build something extraordinary 🚀
</div>

    </main>
  );
}

export default Contact;
