import React, { useState, useEffect } from "react";
import { socialMediaUrl, contactDetails } from "../Details";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram, FaCode } from "react-icons/fa6";
import { ArrowDown } from "lucide-react";
import Rotating3DBox from "../Components/Rotating3DBox";

// Dynamic Typewriter Roles
const roles = [
  "AI & Deep Learning",
  "Full-Stack Web Architect",
  "SIH 2025 Winner",
  "Team codeXcreators Member",
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

          {/* Headline (Panati Nitesh.) - Single semantic h1 for 1000/10 SEO */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#111827] dark:text-[#FAFAFA] leading-[1.03] space-y-1">
            <span className="block">Panati</span>
            <span className="flex items-baseline">
              <span>Nitesh</span>
              <span className="text-blue-600 dark:text-blue-400 ml-1">.</span>
            </span>
          </h1>

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

        {/* Right 3D Rotating Showcase ("Available to Build") */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <Rotating3DBox />
        </div>

      </div>
    </div>
  );
}

export default Home;