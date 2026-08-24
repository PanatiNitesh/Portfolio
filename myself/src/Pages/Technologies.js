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
  BrainCircuit
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
};

function Technologies() {
  const {
    python, java, react, next, mongodb, js, node, express, html, tailwind,
    vscode, git, postman, figma, docker
  } = techStackDetails;

  const expertiseDomains = [
    {
      num: "01",
      badge: "Algorithms & Logic",
      title: "Data Structures & Algorithms",
      icon: <Binary className="text-emerald-600 dark:text-emerald-400" size={26} />,
      desc: "Writing efficient and optimized algorithms to solve complex problems with strong logical rigor.",
      accent: "from-emerald-500 to-teal-500",
      bgGlow: "group-hover:from-emerald-500/10 group-hover:to-teal-500/5",
      iconBg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200/80 dark:border-emerald-500/20",
      badgeStyle: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-500/20",
      tags: ["Algorithmic Rigor", "Time Complexity", "Optimization"]
    },
    {
      num: "02",
      badge: "Full-Stack Systems",
      title: "Full-Stack Development",
      icon: <Cpu className="text-blue-600 dark:text-blue-400" size={26} />,
      desc: "Building scalable end-to-end applications by integrating reactive UI architectures with robust backend services.",
      accent: "from-blue-500 to-indigo-500",
      bgGlow: "group-hover:from-blue-500/10 group-hover:to-indigo-500/5",
      iconBg: "bg-blue-50 dark:bg-blue-500/10 border-blue-200/80 dark:border-blue-500/20",
      badgeStyle: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-500/20",
      tags: ["React & Node.js", "RESTful APIs", "Scalable Systems"]
    },
    {
      num: "03",
      badge: "Interactive UX",
      title: "Web Technologies",
      icon: <Globe className="text-indigo-600 dark:text-indigo-400" size={26} />,
      desc: "Designing responsive, accessible, and delightful interactive web applications with modern ecosystems.",
      accent: "from-indigo-500 to-purple-500",
      bgGlow: "group-hover:from-indigo-500/10 group-hover:to-purple-500/5",
      iconBg: "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200/80 dark:border-indigo-500/20",
      badgeStyle: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-500/20",
      tags: ["Tailwind & Next.js", "Responsive Design", "Modern Web"]
    },
    {
      num: "04",
      badge: "Deep Intelligence",
      title: "Machine Learning & AI",
      icon: <BrainCircuit className="text-purple-600 dark:text-purple-400" size={26} />,
      desc: "Developing deep learning models and predictive intelligence systems with PyTorch, TensorFlow, and Python.",
      accent: "from-purple-500 to-pink-500",
      bgGlow: "group-hover:from-purple-500/10 group-hover:to-pink-500/5",
      iconBg: "bg-purple-50 dark:bg-purple-500/10 border-purple-200/80 dark:border-purple-500/20",
      badgeStyle: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-500/20",
      tags: ["PyTorch & Python", "Neural Networks", "Predictive AI"]
    }
  ];

  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-600 dark:text-blue-400" size={20} />,
      items: [
        { src: react, title: "React.js" },
        { src: next, title: "Next.js" },
        { src: tailwind, title: "Tailwind CSS" },
        { src: js, title: "JavaScript" },
        { src: html, title: "HTML5 & CSS3" },
      ]
    },
    {
      title: "Backend",
      icon: <Settings className="text-purple-600 dark:text-purple-400" size={20} />,
      items: [
        { src: node, title: "Node.js" },
        { src: express, title: "Express.js" },
        { src: python, title: "Python" },
        { src: java, title: "Java" },
        { title: "REST APIs" },
      ]
    },
    {
      title: "Database",
      icon: <Database className="text-amber-600 dark:text-amber-400" size={20} />,
      items: [
        { src: mongodb, title: "MongoDB" },
        { title: "SQL" },
        { title: "Prisma ORM" },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <ShieldCheck className="text-emerald-600 dark:text-emerald-400" size={20} />,
      items: [
        { src: git, title: "Git & GitHub" },
        { src: docker, title: "Docker" },
        { src: postman, title: "Postman" },
        { src: vscode, title: "VS Code" },
        { src: figma, title: "Figma" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-transparent pt-12 md:pt-16 pb-16 md:pb-24 px-4 md:px-8 overflow-x-hidden">

      {/* --- HEADER SECTION --- */}
      <div className="container mx-auto max-w-5xl text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#111827] dark:text-white mb-4">
          Skills & Technologies
        </h1>
        <p className="text-slate-600 dark:text-stone-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          The languages, frameworks, and developer tools I leverage to build production-grade software and intelligent applications.
        </p>

        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-6"></div>
      </div>

      {/* --- 4 CORE DOMAIN CARDS (Crisp Modern Rectangles) --- */}
      <section className="container mx-auto max-w-6xl mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseDomains.map((domain, idx) => (
            <div
              key={idx}
              className="group relative p-7 rounded-2xl bg-white dark:bg-[#18181B] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-black/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[340px]"
            >
              {/* Ambient Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.accent}`} />

              <div className="relative z-10">
                {/* Header Row: Icon + Monospace Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${domain.iconBg} border flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                    {domain.icon}
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-300 dark:text-stone-600 select-none">
                    {domain.num}
                  </span>
                </div>

                {/* Domain Pill Badge */}
                <div className="mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase border ${domain.badgeStyle}`}>
                    {domain.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2.5 text-[#111827] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {domain.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-stone-400 text-xs md:text-sm leading-relaxed font-normal">
                  {domain.desc}
                </p>
              </div>

              {/* Sub-skills micro tags */}
              <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1.5 mt-4">
                {domain.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[10px] font-mono text-slate-500 dark:text-stone-400 bg-slate-50 dark:bg-white/[0.03] rounded-md border border-slate-200/60 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE TOOLKIT --- */}
      <section className="container mx-auto max-w-6xl mb-12">
        <div className="flex items-center gap-3 mb-8 px-2">
          <Zap className="text-blue-600 dark:text-blue-400" size={22} />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] dark:text-white">Technical Skillset</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#18181B] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="flex items-center mb-5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 mr-3 group-hover:scale-105 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#111827] dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 rounded-lg text-xs font-medium text-slate-700 dark:text-stone-300 hover:text-black dark:hover:text-white transition-all"
                    >
                      {item.src ? (
                        <img src={item.src} alt="" className="w-4 h-4 object-contain" />
                      ) : (
                        <Terminal size={12} className="text-slate-500" />
                      )}
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Technologies;