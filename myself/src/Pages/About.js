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
  ExternalLink
} from "lucide-react";

const About = () => {
  const summaryCards = [
    {
      title: "Core Stack",
      icon: <Code className="text-blue-500 dark:text-blue-400" size={20} />,
      desc: "React, Node.js, Python, Java, SQL",
      color: "blue"
    },
    {
      title: "Technical Expertise",
      icon: <Layers className="text-purple-500 dark:text-purple-400" size={20} />,
      desc: "Full-Stack Architecture & UI/UX Design",
      color: "purple"
    },
    {
      title: "Project Portfolio",
      icon: <Briefcase className="text-emerald-500 dark:text-emerald-400" size={20} />,
      desc: `${projectDetails?.length || 0} Professional & Academic Projects`,
      color: "emerald"
    }
  ];

  return (
    <main className="min-h-screen bg-transparent pt-24 pb-16 px-6">

      {/* --- ABOUT ME SECTION --- */}
      <section className="container mx-auto max-w-6xl mb-40">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[2.5rem] overflow-hidden
          border border-gray-200 dark:border-white/10
          bg-white dark:bg-white/[0.02]
          shadow-2xl shadow-gray-200/80 dark:shadow-black/40">

          {/* Left: Cinematic Image Area */}
          <div className="lg:w-2/5 relative min-h-[500px] overflow-hidden">
            <img
              src={personalDetails.aboutImg}
              alt={personalDetails.name}
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"; }}
            />

            <div className="absolute inset-0
              bg-gradient-to-t from-white via-white/20 to-transparent
              lg:bg-gradient-to-r lg:from-transparent lg:to-white
              dark:bg-gradient-to-t dark:from-black dark:via-transparent dark:to-transparent
              lg:dark:bg-gradient-to-r lg:dark:from-transparent lg:dark:to-black">
            </div>

            {/* Status Overlay */}
            <div className="absolute bottom-8 left-8 p-4
              backdrop-blur-xl
              bg-white/80 dark:bg-white/5
              rounded-2xl
              border border-gray-200 dark:border-white/10
              flex items-center gap-3
              shadow-lg dark:shadow-none">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-600 dark:text-gray-300">Active Developer</span>
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-center space-y-10
            bg-white dark:bg-black">

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-500 dark:text-blue-400">
                <Sparkles size={18} />
                <span className="uppercase tracking-[0.4em] text-[10px] font-black">Digital Architect</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter text-gray-900 dark:text-gray-100">
                {personalDetails.tagline?.split("meets")[0]}
                <span className="block text-gray-400 dark:text-gray-600 italic font-light text-4xl md:text-6xl mt-2">
                  meets {personalDetails.tagline?.split("meets")[1]}
                </span>
              </h1>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed font-light max-w-2xl
              border-l-2 border-gray-200 dark:border-white/10 pl-6">
              {personalDetails.about}
            </p>

            {/* Introduction Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {summaryCards.map((card, idx) => (
                <div key={idx} className="group p-6 rounded-2xl
                  border border-gray-100 dark:border-white/5
                  bg-gray-50 dark:bg-white/[0.03]
                  hover:bg-gray-100 dark:hover:bg-white/[0.06]
                  hover:border-gray-200 dark:hover:border-white/20
                  transition-all shadow-sm dark:shadow-none">
                  <div className="mb-4 group-hover:-translate-y-1 transition-transform">{card.icon}</div>
                  <h3 className="text-sm font-bold mb-1.5 text-gray-800 dark:text-white/90">{card.title}</h3>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CAREER EVOLUTION --- */}
      <section className="container mx-auto max-w-4xl mb-40">
        <div className="text-center mb-20">
          <span className="text-purple-500 dark:text-purple-400 font-black tracking-[0.3em] uppercase text-[10px] block mb-4">Milestones</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">Career Evolution</h2>
          <div className="mt-6 w-12 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-[-20px] top-4 bottom-4 w-[1px] hidden md:block
            bg-gradient-to-b
            from-blue-400/40 via-purple-400/40 to-transparent
            dark:from-blue-500/30 dark:via-purple-500/30">
          </div>

          {workDetails.map((work, index) => (
            <div
              key={index}
              className="relative p-10 rounded-[2.5rem]
                border border-gray-200 dark:border-white/10
                bg-white dark:bg-white/[0.01]
                hover:bg-gray-50/80 dark:hover:bg-white/[0.03]
                shadow-md shadow-gray-100/80 dark:shadow-none
                hover:shadow-lg hover:shadow-gray-200/60 dark:hover:shadow-none
                transition-all group overflow-hidden"
            >
              <div className="absolute left-[-24px] top-12 w-2 h-2 rounded-full bg-blue-500 hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    {work.Type || "Experience"}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                    {work.Position}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">{work.Company}</p>
                </div>
                <div className="mt-6 md:mt-0 md:text-right space-y-2">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs font-mono md:justify-end">
                    <Calendar size={12} className="mr-2 text-blue-500" />
                    {work.Duration}
                  </div>
                  <div className="flex items-center text-gray-400 dark:text-gray-500 text-xs md:justify-end">
                    <MapPin size={12} className="mr-2 text-purple-500" />
                    {work.Location}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {(work.Desc || [
                  "Developed responsive and scalable web interfaces using modern frontend technologies, ensuring smooth performance and clean user interaction.",
                  "Collaborated with the team to improve dashboard usability by optimizing workflows and enhancing overall user experience.",
                  "Built reusable components and optimized code to support cross-platform compatibility and maintainable application structure."
                ]).map((bullet, bIndex) => (
                  <div
                    key={bIndex}
                    className="flex items-start text-gray-500 dark:text-gray-400 text-base leading-relaxed"
                  >
                    <ArrowRight
                      size={16}
                      className="text-blue-400 dark:text-blue-500/50 mt-1.5 mr-3 shrink-0"
                    />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {(work.Tags || ["Full Stack", "Dashboard Architecture", "System Design"]).map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 text-[9px] font-black tracking-[0.2em] uppercase rounded-xl
                    border border-gray-200 dark:border-white/5
                    bg-gray-100 dark:bg-white/5
                    text-gray-500 dark:text-gray-500
                    group-hover:text-blue-600 dark:group-hover:text-blue-300
                    group-hover:border-blue-200 dark:group-hover:border-blue-500/20
                    group-hover:bg-blue-50 dark:group-hover:bg-transparent
                    transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ACADEMIC MILESTONES --- */}
      <section className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20
          border-b border-gray-200 dark:border-white/10 pb-10 gap-6 text-center md:text-left">
          <div>
            <span className="text-emerald-500 dark:text-emerald-400 font-black tracking-[0.3em] uppercase text-[10px] block mb-2">Knowledge Base</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">Academic Path</h2>
          </div>
          <BookOpen className="text-emerald-400/20 dark:text-emerald-500/10 hidden lg:block" size={100} strokeWidth={1} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {eduDetails.map((edu, index) => (
            <div
              key={index}
              className="relative group p-12 rounded-[3rem]
                bg-white dark:bg-white/[0.01]
                border border-gray-200 dark:border-white/5
                hover:border-emerald-400 dark:hover:border-emerald-500/40
                hover:bg-emerald-50/30 dark:hover:bg-emerald-500/[0.02]
                shadow-md shadow-gray-100 dark:shadow-none
                hover:shadow-xl hover:shadow-emerald-100/60 dark:hover:shadow-none
                transition-all duration-700"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="w-16 h-16 rounded-[1.5rem]
                  bg-emerald-50 dark:bg-emerald-500/10
                  border border-emerald-200 dark:border-emerald-500/20
                  flex items-center justify-center
                  text-emerald-500 dark:text-emerald-400
                  group-hover:rotate-6 transition-transform">
                  <Terminal size={30} />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold py-1.5 px-4 rounded-full
                    bg-gray-100 dark:bg-white/5
                    text-gray-500 dark:text-gray-500
                    tracking-tighter block mb-1">
                    {edu.Duration}
                  </span>
                  <span className="text-[9px] text-gray-400 dark:text-gray-600 uppercase tracking-widest">{edu.Location}</span>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold leading-[1.2]
                  text-gray-900 dark:text-white
                  group-hover:text-emerald-600 dark:group-hover:text-emerald-300
                  transition-colors tracking-tight">
                  {edu.Position}
                </h3>

                <p className="text-gray-500 dark:text-gray-500 text-lg font-medium">{edu.Company}</p>

                <div className="pt-8 flex items-center justify-between
                  border-t border-gray-100 dark:border-white/5 mt-8">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase text-gray-400 dark:text-gray-600 tracking-[0.2em] font-black mb-1.5">Achievement</span>
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-emerald-500" />
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.Score || "Honors List"}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full
                    border border-gray-200 dark:border-white/10
                    flex items-center justify-center
                    text-gray-500 dark:text-gray-400
                    group-hover:bg-gray-900 dark:group-hover:bg-white
                    group-hover:text-white dark:group-hover:text-black
                    group-hover:border-gray-900 dark:group-hover:border-white
                    transition-all">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40
                bg-emerald-400/5 dark:bg-emerald-500/5
                blur-[100px] rounded-full pointer-events-none
                group-hover:bg-emerald-400/10 dark:group-hover:bg-emerald-500/10
                transition-all">
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default About;