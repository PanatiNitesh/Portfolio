import React, { useState, useEffect } from "react";
import { socialMediaUrl, contactDetails } from "../Details";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram, FaCode } from "react-icons/fa6";
import { ArrowDown, Copy, Check, Terminal, FileCode, Trophy, Sparkles } from "lucide-react";

// Dynamic Typewriter Roles
const roles = [
  "AI & Deep Learning",
  "Full-Stack Web Architect",
  "SIH 2025 Winner",
  "PyTorch & Machine Learning",
  "Data Science Specialist"
];

function Home() {
  const { linkdein, github, twitter, instagram, leetcode } = socialMediaUrl;
  const { email } = contactDetails;

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Terminal active tab state
  const [activeTab, setActiveTab] = useState("developer");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(75);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleCopy = () => {
    const codeSnippet = `const developer = {
  name: "Panati Nitesh",
  role: "Full-Stack & AI Engineer",
  location: "Bengaluru, India",
  stack: ["React", "Node.js", "PyTorch", "Python"],
  status: "Available for innovative opportunities"
};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 md:py-0 w-full">
      
      {/* --- LEFT SIDEBAR RAIL (Desktop) --- */}
      <div className="hidden lg:flex fixed left-6 xl:left-8 bottom-10 flex-col items-center gap-5 z-40">
        <div className="flex flex-col items-center gap-4 text-slate-400 dark:text-stone-400">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-slate-200/70 dark:hover:bg-white/10 hover:text-[#111827] dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={linkdein}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-blue-100/60 dark:hover:bg-blue-500/10 hover:text-[#0A66C2] hover:-translate-y-0.5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={17} />
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-slate-200/70 dark:hover:bg-white/10 hover:text-[#111827] dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Twitter / X"
          >
            <FaXTwitter size={16} />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-pink-100/60 dark:hover:bg-pink-500/10 hover:text-[#E4405F] hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={17} />
          </a>
          <a
            href={leetcode || "https://leetcode.com/u/Niteshreddydev/"}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-amber-100/60 dark:hover:bg-amber-500/10 hover:text-[#FFA116] hover:-translate-y-0.5 transition-all duration-200"
            aria-label="LeetCode Profile"
          >
            <FaCode size={17} />
          </a>
        </div>

        {/* Vertical Divider Line */}
        <div className="w-[1px] h-12 bg-slate-300 dark:bg-stone-700" />

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollTo("about")}
          className="flex flex-col items-center gap-1.5 text-[9px] uppercase font-mono tracking-widest text-slate-400 hover:text-slate-800 dark:hover:text-stone-200 transition-colors group"
        >
          <div className="w-6 h-6 rounded-full border border-slate-300 dark:border-stone-700 flex items-center justify-center group-hover:border-slate-600 transition-colors">
            <ArrowDown size={10} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[8px]">SCROLL</span>
        </button>
      </div>

      {/* --- RIGHT SIDEBAR RAIL (Email Desktop) --- */}
      <div className="hidden lg:flex fixed right-6 xl:right-8 bottom-12 flex-col items-center gap-4 z-40">
        <a
          href={`mailto:${email}`}
          className="writing-mode-vertical text-[11px] font-mono tracking-widest text-slate-400 dark:text-stone-500 hover:text-[#111827] dark:hover:text-white transition-colors duration-200 hover:-translate-y-1"
        >
          {email}
        </a>
        <div className="w-[1px] h-12 bg-slate-300 dark:bg-stone-700" />
      </div>

      {/* --- HERO MAIN CONTENT --- */}
      <div className="container mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center z-10">
        
        {/* Left Text Column */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Subtitle / Single Sleek Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
            <span className="font-mono text-[11px] font-bold tracking-widest text-slate-700 dark:text-stone-300 uppercase">
              Full Stack & AI Engineer
            </span>
          </div>

          {/* Headline (Panati Nitesh.) */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#111827] dark:text-[#FAFAFA] leading-[1.03]">
              Panati
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#111827] dark:text-[#FAFAFA] leading-[1.03] flex items-baseline">
              <span>Nitesh</span>
              <span className="text-blue-600 dark:text-blue-400 ml-1">.</span>
            </h1>
          </div>

          {/* Typewriter Dynamic Line */}
          <div className="min-h-[3rem] flex items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 dark:text-stone-200 tracking-tight">
              {currentText}
            </span>
            <span className="cursor-blink text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl md:text-4xl" aria-hidden="true" />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide bg-[#111827] text-white hover:bg-black dark:bg-white dark:text-[#121214] dark:hover:bg-stone-100 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Explore Work
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide bg-white text-[#111827] hover:bg-slate-50 dark:bg-white/10 dark:text-stone-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Socials */}
          <div className="flex lg:hidden items-center gap-5 pt-4 text-slate-500 dark:text-stone-400">
            <a href={github} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white" aria-label="GitHub">
              <FaGithub size={19} />
            </a>
            <a href={linkdein} target="_blank" rel="noreferrer" className="hover:text-blue-600" aria-label="LinkedIn">
              <FaLinkedinIn size={19} />
            </a>
            <a href={twitter} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white" aria-label="Twitter">
              <FaXTwitter size={18} />
            </a>
            <a href={instagram} target="_blank" rel="noreferrer" className="hover:text-pink-600" aria-label="Instagram">
              <FaInstagram size={19} />
            </a>
            <a href={leetcode || "https://leetcode.com/u/Niteshreddydev/"} target="_blank" rel="noreferrer" className="hover:text-[#FFA116]" aria-label="LeetCode">
              <FaCode size={19} />
            </a>
          </div>

        </div>

        {/* Right Interactive Developer Terminal Card */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative group w-full max-w-lg">
            
            {/* Luminous Ambient Backlight Glow (Tuned for balanced contrast) */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-purple-600/25 dark:from-blue-500/12 dark:via-indigo-500/10 dark:to-purple-500/10 rounded-[3.5rem] blur-2xl opacity-75 dark:opacity-45 group-hover:opacity-100 dark:group-hover:opacity-70 transition-opacity duration-700" />

            {/* Floating Top Badge */}
            <div className="absolute -top-3.5 right-6 z-30 flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 dark:bg-[#1E1E22]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="font-mono text-[10px] font-semibold text-slate-700 dark:text-stone-300">Available to Build</span>
            </div>

            {/* Main Rounded Terminal Container */}
            <div className="relative w-full rounded-[2.5rem] bg-white dark:bg-[#16161A] border-2 border-slate-200/90 dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-blue-400/60 dark:group-hover:border-blue-400/40 group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]">
              
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-100/90 dark:bg-[#1A1A20] border-b border-slate-200/80 dark:border-white/5">
                
                {/* Traffic Lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/40" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/40" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/40" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab("developer")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                      activeTab === "developer"
                        ? "bg-white dark:bg-[#16161A] text-[#111827] dark:text-white shadow-sm"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-stone-200"
                    }`}
                  >
                    <FileCode size={13} className="text-blue-600 dark:text-blue-400" />
                    <span>engineer.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("milestones")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                      activeTab === "milestones"
                        ? "bg-white dark:bg-[#16161A] text-[#111827] dark:text-white shadow-sm"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-stone-200"
                    }`}
                  >
                    <Trophy size={13} className="text-amber-500" />
                    <span>awards.json</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                      activeTab === "terminal"
                        ? "bg-white dark:bg-[#16161A] text-[#111827] dark:text-white shadow-sm"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-stone-200"
                    }`}
                  >
                    <Terminal size={13} className="text-purple-600 dark:text-purple-400" />
                    <span>bash</span>
                  </button>
                </div>

                {/* Copy Snippet Button */}
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors"
                  aria-label="Copy snippet"
                  title="Copy snippet"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto min-h-[300px] flex flex-col justify-center">
                
                {activeTab === "developer" && (
                  <div className="space-y-1 animate-fadeIn text-left">
                    <p className="text-slate-400 dark:text-stone-500">{"// TypeScript configuration"}</p>
                    <p>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">interface </span>
                      <span className="text-blue-600 dark:text-blue-300">SoftwareArchitect </span>
                      <span>{"{"}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-blue-400">name</span>: <span className="text-amber-600 dark:text-amber-300">"Panati Nitesh"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-blue-400">role</span>: <span className="text-amber-600 dark:text-amber-300">"Full-Stack & AI Engineer"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-blue-400">coreStack</span>: [
                      <span className="text-amber-600 dark:text-amber-300">"React"</span>,{" "}
                      <span className="text-amber-600 dark:text-amber-300">"PyTorch"</span>,{" "}
                      <span className="text-amber-600 dark:text-amber-300">"Node.js"</span>
                      ];
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-blue-400">specialty</span>: <span className="text-amber-600 dark:text-amber-300">"AI Architecture & UI/UX"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-blue-400">status</span>: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">true</span>;
                    </p>
                    <p>{"};"}</p>
                    <p className="pt-2 text-slate-400 dark:text-stone-500">{"// Ready to ship impactful solutions 🚀"}</p>
                  </div>
                )}

                {activeTab === "milestones" && (
                  <div className="space-y-1 animate-fadeIn text-left">
                    <p className="text-slate-400 dark:text-stone-500">{"// Key Milestones & Recognitions"}</p>
                    <p>{"{"}</p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-blue-300">"2026_Hackathon"</span>: <span className="text-amber-600 dark:text-amber-300">"Meta × PyTorch Grand Finalist"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-blue-300">"2026_Quantathon"</span>: <span className="text-amber-600 dark:text-amber-300">"Runner-Up (National Level)"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-blue-300">"2025_SIH"</span>: <span className="text-amber-600 dark:text-amber-300">"Smart India Hackathon Winner 🏆"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-blue-300">"Experience"</span>: <span className="text-amber-600 dark:text-amber-300">"Full Stack Developer Intern @ JB Portals"</span>
                    </p>
                    <p>{"}"}</p>
                  </div>
                )}

                {activeTab === "terminal" && (
                  <div className="space-y-2 animate-fadeIn text-left">
                    <p className="text-slate-400 dark:text-stone-500">$ npx build-future --innovative</p>
                    <p className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                      <Sparkles size={13} />
                      <span>Optimizing full-stack reactive engines... [DONE]</span>
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                      <Sparkles size={13} />
                      <span>Integrating PyTorch deep learning models... [DONE]</span>
                    </p>
                    <p className="text-slate-800 dark:text-stone-300 pt-1">
                      ➜ <span className="text-blue-600 dark:text-blue-400 font-bold">System Online:</span> Panati Nitesh portfolio initialized.
                    </p>
                  </div>
                )}

              </div>

              {/* Terminal Bottom Status Bar */}
              <div className="px-6 py-2.5 bg-slate-100/70 dark:bg-[#121216] border-t border-slate-200/70 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  <span>main • UTF-8</span>
                </div>
                <span>React 18 & Tailwind</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;