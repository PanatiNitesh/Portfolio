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
      icon: <Binary className="text-white" size={24} />,
      desc: "Writing efficient and optimized code to solve complex problems using strong logical thinking and algorithmic design.",
      bg: "bg-purple-600",
      glow: "shadow-purple-500/20"
    },
    {
      title: "Full-Stack Development",
      icon: <Cpu className="text-white" size={24} />,
      desc: "Building complete end-to-end applications by integrating frontend interfaces with backend systems and databases.",
      bg: "bg-indigo-600",
      glow: "shadow-indigo-500/20"
    },
    {
      title: "Web Development",
      icon: <Globe className="text-white" size={24} />,
      desc: "Designing responsive, interactive, and user-friendly web interfaces with modern frontend technologies.",
      bg: "bg-blue-600",
      glow: "shadow-blue-500/20"
    },
    {
      title: "Machine Learning",
      icon: <BrainCircuit className="text-white" size={24} />,
      desc: "Developing intelligent systems that analyze data patterns to automate decisions and improve predictions.",
      bg: "bg-pink-600",
      glow: "shadow-pink-500/20"
    }
  ];

  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-500" size={20} />,
      color: "blue",
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
      icon: <Settings className="text-purple-500" size={20} />,
      color: "purple",
      items: [
        { src: node, title: "Node.js" },
        { src: express, title: "Express.js" },
        { src: python, title: "Python" },
        { src: java, title: "Java" },
        { title: "RESTful APIs" },
      ]
    },
    {
      title: "Database",
      icon: <Database className="text-pink-500" size={20} />,
      color: "pink",
      items: [
        { src: mongodb, title: "MongoDB" },
        { title: "SQL" },
        { title: "Prisma ORM" },
      ]
    },
    {
      title: "Tools & Software",
      icon: <ShieldCheck className="text-emerald-500" size={20} />,
      color: "emerald",
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
    <main className="min-h-screen bg-transparent pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 overflow-x-hidden">

      {/* --- HEADER SECTION --- */}
      <div className="container mx-auto max-w-6xl text-center mb-16 md:mb-24">
        <span className="text-blue-600 dark:text-blue-500 font-black tracking-[0.4em] uppercase text-[9px] md:text-[10px] block mb-3 md:mb-4">
          Technical Foundation
        </span>
        <h1 className="text-4xl md:text-7xl leading-tight md:leading-[1.15] pb-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-white/40 mb-4 md:mb-6">
          Technology Stack
        </h1>
        <p className="text-gray-500 dark:text-gray-500 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed mb-8 md:mb-10 px-2 md:px-0">
          An overview of the technologies and tools I work with to turn ideas into functional, real-world applications.
        </p>

        <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* --- EXPERTISE DOMAINS SECTION --- */}
      <section className="container mx-auto max-w-6xl mb-24 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {expertiseDomains.map((domain, idx) => (
            <div
              key={idx}
              className="group p-6 md:p-8 rounded-[2rem] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden shadow-sm dark:shadow-none flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-xl ${domain.bg} flex items-center justify-center mb-5 shadow-lg ${domain.glow} group-hover:scale-110 transition-transform duration-500`}>
                {domain.icon}
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white/90 transition-colors">
                  {domain.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed flex-grow">
                  {domain.desc}
                </p>
              </div>

              {/* Decorative background blur */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gray-400/5 dark:bg-white/5 blur-[60px] rounded-full group-hover:bg-gray-400/10 dark:group-hover:bg-white/10 transition-all"></div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE TOOLKIT --- */}
      <section className="container mx-auto max-w-7xl mb-12">
        <div className="flex items-center gap-3 md:gap-4 mb-10 md:mb-16 px-2 md:px-4">
          <Zap className="text-blue-600 dark:text-blue-500" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Technical Skillset</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-[2rem] bg-white dark:bg-white/[0.01] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all group relative overflow-hidden shadow-sm dark:shadow-none"
            >
              {/* Overlay color hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${cat.color}-500/[0.03] dark:from-${cat.color}-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className={`p-2 rounded-lg bg-${cat.color}-500/10 mr-4 group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white/80 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 px-3 py-2 bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-xl text-[11px] md:text-xs font-medium text-gray-600 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-300 group-hover:bg-white dark:group-hover:bg-white/[0.06] group-hover:border-gray-300 dark:group-hover:border-white/10 transition-all"
                    >
                      {item.src ? (
                        <img src={item.src} alt="" className="w-3.5 h-3.5 object-contain opacity-60 dark:opacity-60 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <Terminal size={12} className="text-gray-400 dark:text-gray-600" />
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