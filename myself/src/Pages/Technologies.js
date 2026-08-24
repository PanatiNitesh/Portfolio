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
      title: "Data Structures & Algorithms",
      icon: <Binary className="text-emerald-600 dark:text-emerald-400" size={24} />,
      desc: "Writing efficient and optimized algorithms to solve complex problems with strong logical rigor.",
      accent: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
      borderHover: "hover:border-emerald-300 dark:hover:border-emerald-500/30"
    },
    {
      title: "Full-Stack Development",
      icon: <Cpu className="text-blue-600 dark:text-blue-400" size={24} />,
      desc: "Building scalable end-to-end applications by integrating reactive UI architectures with robust backend services.",
      accent: "from-blue-500 to-indigo-500",
      bg: "bg-blue-50 dark:bg-blue-500/10",
      borderHover: "hover:border-blue-300 dark:hover:border-blue-500/30"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-indigo-600 dark:text-indigo-400" size={24} />,
      desc: "Designing responsive, accessible, and delightful interactive web applications with modern ecosystems.",
      accent: "from-indigo-500 to-purple-500",
      bg: "bg-indigo-50 dark:bg-indigo-500/10",
      borderHover: "hover:border-indigo-300 dark:hover:border-indigo-500/30"
    },
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit className="text-purple-600 dark:text-purple-400" size={24} />,
      desc: "Developing deep learning models and predictive intelligence systems with PyTorch, TensorFlow, and Python.",
      accent: "from-purple-500 to-pink-500",
      bg: "bg-purple-50 dark:bg-purple-500/10",
      borderHover: "hover:border-purple-300 dark:hover:border-purple-500/30"
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
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] dark:text-white mb-4">
          Skills & Technologies
        </h1>
        <p className="text-slate-600 dark:text-stone-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          The languages, frameworks, and developer tools I leverage to build production-grade software and intelligent applications.
        </p>

        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-6"></div>
      </div>

      {/* --- 4 CORE DOMAIN CARDS --- */}
      <section className="container mx-auto max-w-6xl mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseDomains.map((domain, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-[2.5rem] bg-white dark:bg-[#18181B] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden ${domain.borderHover}`}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.accent}`} />

              <div>
                <div className={`w-14 h-14 rounded-2xl ${domain.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {domain.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#111827] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {domain.title}
                </h3>

                <p className="text-slate-600 dark:text-stone-400 text-sm leading-relaxed">
                  {domain.desc}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${domain.accent}`} />
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-stone-500">Core Domain</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE TOOLKIT --- */}
      <section className="container mx-auto max-w-6xl mb-12">
        <div className="flex items-center gap-3 mb-10 px-2">
          <Zap className="text-blue-600 dark:text-blue-400" size={22} />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] dark:text-white">Technical Skillset</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[2.5rem] bg-white dark:bg-[#18181B] border border-slate-200/90 dark:border-white/10 shadow-sm transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 mr-3 group-hover:scale-110 transition-transform">
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
                      className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 rounded-xl text-xs font-medium text-slate-700 dark:text-stone-300 hover:text-black dark:hover:text-white transition-all"
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