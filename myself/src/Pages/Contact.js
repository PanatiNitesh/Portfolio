import React from "react";
import { contactDetails } from "../Details";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  const { email, instagram } = contactDetails;

  return (
    <main className="container mx-auto px-6 pt-16 pb-24">
      {/* Page Header */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-heading dark:text-light-heading mb-6 tracking-tight">
            Let's Connect
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-content leading-relaxed max-w-2xl mx-auto">
            Open to collaborations, opportunities, or just a casual chat. Feel free to reach out!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:gap-6">
          {/* Email Card */}
          <div className="bg-white/80 dark:bg-[#1f1f1f]/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-dark-heading dark:text-light-heading mb-4 text-center">
              Drop me an email
            </h3>
            <div className="text-center">
              <a
                href={`mailto:${email}`}
                className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline transition-all inline-block"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-white/80 dark:bg-[#1f1f1f]/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-dark-heading dark:text-light-heading mb-4 text-center">
              Let's connect on Instagram
            </h3>
            <div className="text-center">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-pink-600 dark:text-pink-400 text-xl font-medium hover:underline transition-colors"
              >
                <FaInstagram className="text-2xl" />
                @nitesh_reddy_
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/80 dark:bg-[#1f1f1f]/80 p-6 rounded-2xl shadow-lg">
            <p className="text-lg text-content leading-relaxed">
              Whether it's code or conversation — I'm just a message away.
              <br />
              Let's spark ideas and build something extraordinary
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;