import React from "react";
import { Mail, Instagram, ArrowRight, MessageSquare, Send } from "lucide-react";

// Contact details embedded locally to ensure the component is self-contained and runnable
const contactDetails = {
  email: "niteshreddy242005@gmail.com",
  instagram: "https://instagram.com/nitesh_reddy_"
};

const Contact = () => {
  const { email, instagram } = contactDetails;

  return (
    <main className="min-h-screen bg-transparent pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 overflow-x-hidden">
      
      {/* --- CINEMATIC HEADER --- */}
      <section className="container mx-auto max-w-4xl text-center mb-16 md:mb-32">
        <div className="space-y-3 md:space-y-4">
          <span className="text-blue-600 dark:text-blue-500 font-black tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] block">
            Connect With Me
          </span>
          <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-white/40 tracking-tighter leading-tight">
            Get in Touch
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl mx-auto pt-2 md:pt-4 px-2">
            I'd love to hear from you! Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </div>
        <div className="mt-8 md:mt-12 inline-flex items-center gap-3 text-black/10 dark:text-white/20 animate-bounce">
           <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="container mx-auto max-w-5xl px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Email Card */}
          <a 
            href={`mailto:${email}`}
            className="group relative p-6 md:p-10 rounded-3xl md:rounded-[3rem] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <Mail size={24} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Drop me an email</h3>
              <p className="text-gray-500 dark:text-gray-500 text-xs md:text-sm mb-6 md:mb-8">Available for freelance and full-time opportunities.</p>
              
              <div className="mt-auto flex items-center justify-between gap-2">
                <span className="text-sm md:text-lg font-mono text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                  {email}
                </span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                   <Send size={14} className="md:w-4 md:h-4" />
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-blue-500/5 blur-[60px] md:blur-[80px] rounded-full group-hover:bg-blue-500/10 transition-all"></div>
          </a>

          {/* Instagram Card */}
          <a 
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 md:p-10 rounded-3xl md:rounded-[3rem] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-pink-500/30 transition-all duration-500 overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <Instagram size={24} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Social Connection</h3>
              <p className="text-gray-500 dark:text-gray-500 text-xs md:text-sm mb-6 md:mb-8">Follow my journey and see behind-the-scenes work.</p>
              
              <div className="mt-auto flex items-center justify-between gap-2">
                <span className="text-sm md:text-lg font-mono text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors truncate">
                  @nitesh_reddy_
                </span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white group-hover:bg-pink-500 group-hover:border-pink-500 group-hover:text-white transition-all duration-300 shrink-0">
                   <ArrowRight size={14} className="md:w-4 md:h-4" />
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-pink-500/5 blur-[60px] md:blur-[80px] rounded-full group-hover:bg-pink-500/10 transition-all"></div>
          </a>

        </div>
      </section>

      {/* --- FOOTER STATEMENT --- */}
      <section className="container mx-auto max-w-4xl mt-16 md:mt-32 px-2 md:px-0">
        <div className="p-8 md:p-12 rounded-3xl md:rounded-[3.5rem] bg-gradient-to-br from-gray-50 dark:from-white/[0.03] to-transparent border border-gray-200 dark:border-white/5 text-center relative overflow-hidden group">
          <MessageSquare className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-black/[0.02] dark:text-white/[0.02] scale-[3] md:scale-[5] rotate-12" size={80} />
          <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed relative z-10 font-light italic">
            "Whether it's code or conversation — I'm just a message away. <br className="hidden md:block" />
            Let's spark ideas and build <span className="text-gray-900 dark:text-white font-medium not-italic">something extraordinary.</span>"
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;