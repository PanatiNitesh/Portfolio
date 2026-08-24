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
      icon: <Binary className="text-[#1E1E1E] dark:text-white" size={24} />,
      desc: "Writing efficient and optimized algorithms to solve complex problems with strong logical rigor.",
      bg: "bg-[#EAE5D8] dark:bg-white/10",
    },
    {
      title: "Full-Stack Development",
      icon: <Cpu className="text-[#1E1E1E] dark:text-white" size={24} />,
      desc: "Building scalable end-to-end applications by integrating reactive UI architectures with robust backend services.",
      bg: "bg-[#EAE5D8] dark:bg-white/10",
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-[#1E1E1E] dark:text-white" size={24} />,
      desc: "Designing responsive, accessible, and delightful interactive web applications with modern ecosystems.",
      bg: "bg-[#EAE5D8] dark:bg-white/10",
    },
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit className="text-[#1E1E1E] dark:text-white" size={24} />,
      desc: "Developing deep learning models and predictive intelligence systems with PyTorch, TensorFlow, and Python.",
      bg: "bg-[#EAE5D8] dark:bg-white/10",
    }
  ];

  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="text-[#6B7E63] dark:text-[#8BA87E]" size={20} />,
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
    <main className="min-h-screen bg-transparent pt-12 md:pt-16 pb-12 md:pb-16 px-4 md:px-8 overflow-x-hidden">

      {/* --- HEADER SECTION --- */}
      <div className="container mx-auto max-w-5xl text-center mb-16 md:mb-24">
        <span className="text-[#6B7E63] dark:text-[#8BA87E] font-mono tracking-[0.3em] uppercase text-[10px] font-bold block mb-3">
          Technical Toolkit
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1E1E1E] dark:text-white mb-4">
          Skills & Technologies
        </h1>
        <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-6 px-2 md:px-0">
          The languages, frameworks, and developer tools I leverage to build production-grade software and intelligent applications.
        </p>

        <div className="w-12 h-1 bg-[#6B7E63] dark:bg-[#8BA87E] mx-auto rounded-full"></div>
      </div>

      {/* --- EXPERTISE DOMAINS SECTION --- */}
      <section className="container mx-auto max-w-6xl mb-20 md:mb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseDomains.map((domain, idx) => (
            <div
              key={idx}
              className="group p-7 rounded-[2.5rem] bg-[#FDFBF7] dark:bg-[#18181B] border border-stone-300/70 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/20 hover:shadow-xl shadow-sm transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${domain.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {domain.icon}
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-3 text-[#1E1E1E] dark:text-white transition-colors">
                  {domain.title}
                </h3>

                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed flex-grow">
                  {domain.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE TOOLKIT --- */}
      <section className="container mx-auto max-w-6xl mb-12">
        <div className="flex items-center gap-3 mb-10 px-2">
          <Zap className="text-[#6B7E63] dark:text-[#8BA87E]" size={22} />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1E1E1E] dark:text-white">Technical Skillset</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[2.5rem] bg-[#FDFBF7] dark:bg-[#18181B] border border-stone-300/70 dark:border-white/10 shadow-sm transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-2.5 rounded-xl bg-[#EAE5D8] dark:bg-white/5 mr-3 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#1E1E1E] dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-[#F4EFE6] dark:bg-white/[0.04] border border-stone-300/60 dark:border-white/5 rounded-xl text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-black dark:hover:text-white transition-all"
                    >
                      {item.src ? (
                        <img src={item.src} alt="" className="w-4 h-4 object-contain" />
                      ) : (
                        <Terminal size={12} className="text-stone-500" />
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