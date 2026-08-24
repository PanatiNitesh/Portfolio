import React from "react";
import {
  personalDetails,
  workDetails,
  eduDetails,
  projectDetails
} from "../Details";
import {
  Code,
  Briefcase,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  Layers,
  Terminal,
  ExternalLink,
  Trophy
} from "lucide-react";

const About = () => {
  const summaryCards = [
    {
      title: "Core Stack",
      icon: <Code className="text-[#6B7E63] dark:text-[#8BA87E]" size={20} />,
      desc: "React, Node.js, Python, Java, SQL",
    },
    {
      title: "Technical Expertise",
      icon: <Layers className="text-purple-600 dark:text-purple-400" size={20} />,
      desc: "Full-Stack Architecture & AI Integration",
    },
    {
      title: "Project Portfolio",
      icon: <Briefcase className="text-amber-600 dark:text-amber-400" size={20} />,
      desc: `${projectDetails?.length || 0} Production & Research Projects`,
    }
  ];

  return (
    <main className="min-h-screen bg-transparent pt-12 md:pt-16 pb-12 md:pb-16 px-4 md:px-8 overflow-x-hidden">

      {/* --- ABOUT ME HERO CARD --- */}
      <section className="container mx-auto max-w-6xl mb-24 md:mb-36">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden
          border border-stone-300/70 dark:border-white/10
          bg-[#FDFBF7] dark:bg-[#18181B]
          shadow-xl shadow-stone-200/50 dark:shadow-none">

          {/* Left: Cinematic Image Area */}
          <div className="lg:w-2/5 relative h-80 md:h-auto lg:min-h-[500px] overflow-hidden">
            <img
              src={personalDetails.aboutImg}
              alt={personalDetails.name}
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"; }}
            />

            <div className="absolute inset-0
              bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/20 to-transparent
              lg:bg-gradient-to-r lg:from-transparent lg:to-[#FDFBF7]
              dark:bg-gradient-to-t dark:from-[#18181B] dark:via-transparent dark:to-transparent
              lg:dark:bg-gradient-to-r lg:dark:from-transparent lg:dark:to-[#18181B]">
            </div>

            {/* Status Overlay */}
            <div className="absolute bottom-6 left-6 p-3 md:p-4
              backdrop-blur-xl
              bg-[#FDFBF7]/90 dark:bg-black/60
              rounded-2xl
              border border-stone-300/80 dark:border-white/10
              flex items-center gap-2 md:gap-3
              shadow-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-[#6B7E63] animate-pulse shadow-[0_0_10px_rgba(107,126,99,0.8)]"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-stone-700 dark:text-stone-300">Active Innovator</span>
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="lg:w-3/5 p-8 md:p-14 lg:p-16 flex flex-col justify-center space-y-8
            bg-[#FDFBF7] dark:bg-[#18181B]">

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#6B7E63] dark:text-[#8BA87E]">
                <Sparkles size={16} />
                <span className="uppercase tracking-[0.3em] font-mono text-[10px] font-bold">About Me</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#1E1E1E] dark:text-[#FAFAFA]">
                Where innovation
                <span className="block text-stone-400 dark:text-stone-500 italic font-normal text-3xl md:text-4xl lg:text-5xl mt-1">
                  meets full-stack execution
                </span>
              </h1>
            </div>

            <p className="text-stone-600 dark:text-stone-300 text-base md:text-lg leading-relaxed font-light max-w-2xl
              border-l-2 border-[#6B7E63]/40 dark:border-[#8BA87E]/30 pl-5">
              {personalDetails.about}
            </p>

            {/* Introduction Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {summaryCards.map((card, idx) => (
                <div key={idx} className="group p-5 rounded-2xl
                  border border-stone-200 dark:border-white/5
                  bg-[#F5F1E6] dark:bg-white/[0.03]
                  hover:bg-[#EFE9DC] dark:hover:bg-white/[0.06]
                  transition-all duration-300">
                  <div className="mb-3 group-hover:-translate-y-1 transition-transform">{card.icon}</div>
                  <h3 className="text-sm font-bold mb-1 text-stone-900 dark:text-white">{card.title}</h3>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CAREER EVOLUTION --- */}
      <section className="container mx-auto max-w-4xl mb-24 md:mb-36 px-2 md:px-0">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#6B7E63] dark:text-[#8BA87E] font-mono tracking-[0.3em] uppercase text-[10px] font-bold block mb-3">Milestones</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1E1E1E] dark:text-white">Career Evolution</h2>
          <div className="mt-4 w-12 h-1 bg-[#6B7E63] dark:bg-[#8BA87E] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 md:space-y-10 relative">
          <div className="absolute left-[-20px] top-4 bottom-4 w-[1px] hidden md:block
            bg-gradient-to-b from-[#6B7E63]/40 via-purple-400/30 to-transparent">
          </div>

          {workDetails.map((work, index) => (
            <div
              key={index}
              className="relative p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem]
                border border-stone-300/70 dark:border-white/10
                bg-[#FDFBF7] dark:bg-[#18181B]
                hover:shadow-xl hover:shadow-stone-200/60 dark:hover:shadow-none
                transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute left-[-24px] top-12 w-2 h-2 rounded-full bg-[#6B7E63] hidden md:block shadow-[0_0_12px_rgba(107,126,99,0.8)]"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4 md:gap-0">
                <div className="space-y-2">
                  <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] md:text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold border ${
                    work.Type === "Achievement"
                      ? "bg-purple-100/80 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-300/60 dark:border-purple-500/20"
                      : "bg-[#EAE5D8] dark:bg-[#6B7E63]/15 text-stone-800 dark:text-[#8BA87E] border-stone-300 dark:border-[#6B7E63]/30"
                  }`}>
                    {work.Type === "Achievement" ? <Trophy size={12} className="text-purple-600 dark:text-purple-400" /> : <Briefcase size={12} className="text-[#6B7E63] dark:text-[#8BA87E]" />}
                    {work.Type || "Experience"}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] dark:text-white group-hover:text-[#6B7E63] dark:group-hover:text-[#8BA87E] transition-colors tracking-tight">
                    {work.Position}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-base md:text-lg font-medium">{work.Company}</p>
                </div>
                <div className="md:text-right space-y-1.5">
                  <div className="flex items-center text-stone-600 dark:text-stone-400 text-xs font-mono md:justify-end">
                    <Calendar size={12} className="mr-2 text-[#6B7E63]" />
                    {work.Duration}
                  </div>
                  <div className="flex items-center text-stone-500 dark:text-stone-500 text-xs md:justify-end">
                    <MapPin size={12} className="mr-2 text-stone-400" />
                    {work.Location}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {(work.Desc || []).map((bullet, bIndex) => (
                  <div
                    key={bIndex}
                    className="flex items-start text-stone-600 dark:text-stone-300 text-sm md:text-base leading-relaxed"
                  >
                    <ArrowRight
                      size={14}
                      className="text-[#6B7E63] dark:text-[#8BA87E] mt-1 mr-3 shrink-0"
                    />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {(work.Tags || []).map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 text-[9px] font-mono font-semibold tracking-wider uppercase rounded-xl
                    border border-stone-200 dark:border-white/5
                    bg-[#F4EFE6] dark:bg-white/5
                    text-stone-600 dark:text-stone-400
                    transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ACADEMIC PATH --- */}
      <section className="container mx-auto max-w-5xl mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12
          border-b border-stone-200 dark:border-white/10 pb-8 gap-6 text-center md:text-left">
          <div className="w-full">
            <span className="text-[#6B7E63] dark:text-[#8BA87E] font-mono tracking-[0.3em] uppercase text-[10px] font-bold block mb-2">Knowledge Base</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1E1E1E] dark:text-white">Academic Path</h2>
          </div>
          <BookOpen className="text-stone-300 dark:text-white/10 hidden lg:block shrink-0" size={60} strokeWidth={1.5} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-0">
          {eduDetails.map((edu, index) => (
            <div
              key={index}
              className="relative group p-8 md:p-10 rounded-[2.5rem]
                bg-[#FDFBF7] dark:bg-[#18181B]
                border border-stone-300/70 dark:border-white/10
                hover:border-[#6B7E63] dark:hover:border-[#8BA87E]/50
                shadow-md shadow-stone-200/50 dark:shadow-none
                hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl
                  bg-[#EAE5D8] dark:bg-white/5
                  border border-stone-300 dark:border-white/10
                  flex items-center justify-center
                  text-[#6B7E63] dark:text-[#8BA87E]
                  group-hover:rotate-6 transition-transform">
                  <Terminal size={24} />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold py-1 px-3.5 rounded-full
                    bg-[#EFEAE0] dark:bg-white/5
                    text-stone-700 dark:text-stone-300
                    block mb-1">
                    {edu.Duration}
                  </span>
                  <span className="text-[10px] text-stone-400 dark:text-stone-500 uppercase tracking-widest">{edu.Location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold leading-snug
                  text-[#1E1E1E] dark:text-white
                  group-hover:text-[#6B7E63] dark:group-hover:text-[#8BA87E]
                  transition-colors tracking-tight">
                  {edu.Position}
                </h3>

                <p className="text-stone-600 dark:text-stone-400 text-base font-medium">{edu.Company}</p>

                <div className="pt-6 flex items-center justify-between
                  border-t border-stone-200 dark:border-white/5 mt-6">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase text-stone-400 dark:text-stone-500 tracking-[0.2em] font-mono font-bold mb-1">Achievement</span>
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-[#6B7E63] dark:text-[#8BA87E]" />
                      <span className="text-lg font-bold text-[#1E1E1E] dark:text-white">
                        {edu.Score || "Honors"}
                      </span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full
                    border border-stone-300 dark:border-white/10
                    flex items-center justify-center
                    text-stone-600 dark:text-stone-400
                    group-hover:bg-[#1E1E1E] dark:group-hover:bg-white
                    group-hover:text-white dark:group-hover:text-black
                    transition-all">
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default About;