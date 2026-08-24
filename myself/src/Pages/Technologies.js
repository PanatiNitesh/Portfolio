import React from "react";
import {
  Terminal,
  Database,
  Cpu,
  Layout,
  Settings,
  ShieldCheck,
  Zap,
  Globe,
  Binary,
  BrainCircuit,
  Sparkles
} from "lucide-react";

const techStackDetails = {
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  npm: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  canva: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
};

function Technologies() {
  const [activeFilter, setActiveFilter] = useState("all");

  const {
    python, java, react, next, mongodb, js, node, express, html, tailwind,
    vscode, git, postman, figma, docker, pytorch
  } = techStackDetails;

  const allSkills = [
    { name: "React.js", category: "frontend", icon: react, level: "Advanced", glow: "hover:border-cyan-400 hover:shadow-cyan-500/10" },
    { name: "Next.js", category: "frontend", icon: next, level: "Intermediate", glow: "hover:border-slate-400 hover:shadow-slate-500/10" },
    { name: "JavaScript", category: "frontend", icon: js, level: "Advanced", glow: "hover:border-yellow-400 hover:shadow-yellow-500/10" },
    { name: "Tailwind CSS", category: "frontend", icon: tailwind, level: "Advanced", glow: "hover:border-teal-400 hover:shadow-teal-500/10" },
    { name: "HTML5 & CSS3", category: "frontend", icon: html, level: "Advanced", glow: "hover:border-orange-400 hover:shadow-orange-500/10" },

    { name: "Node.js", category: "backend", icon: node, level: "Advanced", glow: "hover:border-emerald-400 hover:shadow-emerald-500/10" },
    { name: "Express.js", category: "backend", icon: express, level: "Advanced", glow: "hover:border-stone-400 hover:shadow-stone-500/10" },
    { name: "Python", category: "backend", icon: python, level: "Advanced", glow: "hover:border-blue-400 hover:shadow-blue-500/10" },
    { name: "Java", category: "backend", icon: java, level: "Intermediate", glow: "hover:border-red-400 hover:shadow-red-500/10" },
    { name: "REST APIs", category: "backend", level: "Advanced", glow: "hover:border-purple-400 hover:shadow-purple-500/10" },

    { name: "PyTorch & AI", category: "ai", icon: pytorch, level: "Specialist", glow: "hover:border-orange-500 hover:shadow-orange-500/10" },
    { name: "Deep Learning", category: "ai", level: "Specialist", glow: "hover:border-indigo-400 hover:shadow-indigo-500/10" },
    { name: "Data Science", category: "ai", level: "Advanced", glow: "hover:border-blue-500 hover:shadow-blue-500/10" },

    { name: "MongoDB", category: "data", icon: mongodb, level: "Advanced", glow: "hover:border-green-500 hover:shadow-green-500/10" },
    { name: "SQL", category: "data", level: "Advanced", glow: "hover:border-sky-500 hover:shadow-sky-500/10" },
    { name: "Git & GitHub", category: "tools", icon: git, level: "Advanced", glow: "hover:border-orange-500 hover:shadow-orange-500/10" },
    { name: "Docker", category: "tools", icon: docker, level: "Intermediate", glow: "hover:border-blue-500 hover:shadow-blue-500/10" },
    { name: "Postman", category: "tools", icon: postman, level: "Advanced", glow: "hover:border-amber-500 hover:shadow-amber-500/10" },
    { name: "VS Code", category: "tools", icon: vscode, level: "Advanced", glow: "hover:border-blue-400 hover:shadow-blue-500/10" },
    { name: "Figma", category: "tools", icon: figma, level: "Intermediate", glow: "hover:border-pink-500 hover:shadow-pink-500/10" },
  ];

  const filteredSkills = activeFilter === "all" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeFilter);

  const pillars = [
    {
      num: "01",
      title: "Full-Stack Architecture",
      icon: <Layout className="text-blue-600 dark:text-blue-400" size={24} />,
      desc: "Architecting high-performance web applications with reactive React components, robust Node/Express backends, and reliable API layers.",
      highlights: ["Component-Driven UI", "RESTful Systems", "State Management"]
    },
    {
      num: "02",
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="text-purple-600 dark:text-purple-400" size={24} />,
      desc: "Engineering predictive intelligence pipelines and neural models with PyTorch and Python for real-world automation.",
      highlights: ["Model Training", "Deep Learning", "Predictive Analytics"]
    },
    {
      num: "03",
      title: "Data & Systems Design",
      icon: <Database className="text-amber-600 dark:text-amber-400" size={24} />,
      desc: "Structuring optimal database schemas, SQL queries, and NoSQL documents for scalability, speed, and strict consistency.",
      highlights: ["MongoDB & SQL", "Schema Optimization", "Data Pipelines"]
    },
    {
      num: "04",
      title: "Problem Solving & DSA",
      icon: <Binary className="text-emerald-600 dark:text-emerald-400" size={24} />,
      desc: "Applying rigorous algorithmic patterns, graph theory, dynamic programming, and data structures to deliver high efficiency.",
      highlights: ["Algorithm Optimization", "Time Complexity", "Competitive Coding"]
    }
  ];

  return (
    <main className="min-h-screen bg-transparent pt-12 md:pt-16 pb-16 md:pb-24 px-4 md:px-8 overflow-x-hidden">

      {/* --- HEADER SECTION --- */}
      <div className="container mx-auto max-w-5xl text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm mb-4">
          <Sparkles size={13} className="text-blue-600 dark:text-blue-400" />
          <span className="font-mono text-[10px] font-bold tracking-widest text-slate-700 dark:text-stone-300 uppercase">
            Technical Stack & Ecosystem
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] dark:text-white mb-4">
          Skills & Technologies
        </h1>
        <p className="text-slate-600 dark:text-stone-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          The battle-tested technologies, languages, and frameworks I utilize to craft scalable software and AI-driven solutions.
        </p>

        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-6"></div>
      </div>

      {/* --- ENGINEERING PILLARS --- */}
      <section className="container mx-auto max-w-6xl mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-[#18181B] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-stone-600">{pillar.num}</span>
                </div>

                <h3 className="text-lg font-bold mb-3 text-[#111827] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 dark:text-stone-400 text-xs md:text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-slate-100 dark:border-white/5">
                {pillar.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-stone-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE TOOLKIT MATRIX --- */}
      <section className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 px-2">
          <div className="flex items-center gap-3">
            <Zap className="text-blue-600 dark:text-blue-400" size={22} />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] dark:text-white">
              Interactive Toolkit
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#18181B] border border-slate-200 dark:border-white/10 shadow-sm">
            {[
              { id: "all", label: "All Skills" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "ai", label: "AI & ML" },
              { id: "data", label: "Data" },
              { id: "tools", label: "Tools" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeFilter === tab.id
                    ? "bg-[#111827] text-white dark:bg-white dark:text-[#111827] shadow-sm"
                    : "text-slate-500 hover:text-slate-900 dark:text-stone-400 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`group p-5 rounded-2xl bg-white dark:bg-[#18181B] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between gap-3 ${skill.glow}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                ) : (
                  <Terminal size={20} className="text-blue-600 dark:text-blue-400" />
                )}
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#111827] dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h4>
                <span className="text-[10px] font-mono text-slate-400 dark:text-stone-500 uppercase tracking-wider">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Technologies;