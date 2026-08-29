import React from "react";
import { Mail, ArrowRight, MessageSquare, Send } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { contactDetails } from "../Details";

const Contact = () => {
  const { email, twitter } = contactDetails;

  return (
    <main className="min-h-screen bg-transparent pt-12 md:pt-16 pb-12 md:pb-16 px-4 md:px-8 overflow-x-hidden">
      
      {/* --- CINEMATIC HEADER --- */}
      <section className="container mx-auto max-w-4xl text-center mb-16 md:mb-24">
        <div className="space-y-3">
          <span className="text-blue-600 dark:text-blue-400 font-mono tracking-[0.3em] uppercase text-[10px] font-bold block">
            Let's Talk
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#111827] dark:text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="text-slate-600 dark:text-stone-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto pt-2 px-2">
            Whether you have an opportunity, a technical collaboration, or simply want to connect, my inbox is always open.
          </p>
        </div>
        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-6"></div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="container mx-auto max-w-5xl px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Email Card */}
          <a 
            href={`mailto:${email}`}
            className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#18181B] border border-slate-200/90 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#111827] dark:text-white">Direct Email</h3>
              <p className="text-slate-500 dark:text-stone-400 text-xs md:text-sm mb-8">Available for software engineering roles & exciting collaborations.</p>
              
              <div className="mt-auto flex items-center justify-between gap-2">
                <span className="text-sm md:text-base font-mono text-slate-800 dark:text-stone-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                  {email}
                </span>
                <div className="w-9 h-9 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-stone-300 group-hover:bg-[#111827] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300 shrink-0">
                   <Send size={13} />
                </div>
              </div>
            </div>
          </a>

          {/* Twitter / X Card */}
          <a 
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#18181B] border border-slate-200/90 dark:border-white/10 hover:border-slate-800 dark:hover:border-white/40 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#111827] dark:text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaXTwitter size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#111827] dark:text-white">X (Twitter)</h3>
              <p className="text-slate-500 dark:text-stone-400 text-xs md:text-sm mb-8">Follow for project updates, tech thoughts, hackathons, and announcements.</p>
              
              <div className="mt-auto flex items-center justify-between gap-2">
                <span className="text-sm md:text-base font-mono text-slate-800 dark:text-stone-200 group-hover:text-[#111827] dark:group-hover:text-white transition-colors truncate">
                  @Nitesh_Reddy_
                </span>
                <div className="w-9 h-9 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-stone-300 group-hover:bg-[#111827] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300 shrink-0">
                   <ArrowRight size={13} />
                </div>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* --- FOOTER STATEMENT --- */}
      <section className="container mx-auto max-w-4xl mt-16 md:mt-24 px-2 md:px-0">
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-100 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/5 text-center relative overflow-hidden group">
          <MessageSquare className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-slate-400/[0.1] dark:text-white/[0.02] scale-[3] md:scale-[5] rotate-12" size={80} />
          <p className="text-base md:text-xl text-slate-600 dark:text-stone-300 leading-relaxed relative z-10 font-normal">
            "Whether it's code, architecture, or deep learning — I'm just a message away. <br className="hidden md:block" />
            Let's build <span className="text-[#111827] dark:text-white font-bold">something impactful together.</span>"
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;