import React, { useState, useEffect } from "react";
import { personalDetails, socialMediaUrl, contactDetails } from "../Details";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram, FaCode } from "react-icons/fa6";
import { ArrowDown } from "lucide-react";

// Dynamic Typewriter Roles
const roles = [
  "AI & Deep Learning",
  "Full-Stack Web Architect",
  "SIH 2025 Winner",
  "PyTorch & Machine Learning",
  "Data Science Specialist"
];

function Home() {
  const { homeImg } = personalDetails;
  const { linkdein, github, twitter, instagram } = socialMediaUrl;
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
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36 py-12 md:py-0 w-full">
      
      {/* --- LEFT SIDEBAR RAIL (Desktop) --- */}
      <div className="hidden lg:flex fixed left-6 xl:left-8 bottom-10 flex-col items-center gap-5 z-40">
        <div className="flex flex-col items-center gap-4 text-stone-500 dark:text-stone-400">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-white/10 hover:text-[#1E1E1E] dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={linkdein}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-blue-100/50 dark:hover:bg-blue-500/10 hover:text-[#0A66C2] hover:-translate-y-0.5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={17} />
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-white/10 hover:text-[#1E1E1E] dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Twitter / X"
          >
            <FaXTwitter size={16} />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-pink-100/50 dark:hover:bg-pink-500/10 hover:text-[#E4405F] hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={17} />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-amber-100/50 dark:hover:bg-amber-500/10 hover:text-[#FFA116] hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Coding Profile"
          >
            <FaCode size={17} />
          </a>
        </div>

        {/* Vertical Divider Line */}
        <div className="w-[1px] h-12 bg-stone-300 dark:bg-stone-700" />

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollTo("about")}
          className="flex flex-col items-center gap-1.5 text-[9px] uppercase font-mono tracking-widest text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors group"
        >
          <div className="w-6 h-6 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center group-hover:border-stone-500 transition-colors">
            <ArrowDown size={10} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[8px]">SCROLL</span>
        </button>
      </div>

      {/* --- RIGHT SIDEBAR RAIL (Email Desktop) --- */}
      <div className="hidden lg:flex fixed right-6 xl:right-8 bottom-12 flex-col items-center gap-4 z-40">
        <a
          href={`mailto:${email}`}
          className="writing-mode-vertical text-[11px] font-mono tracking-widest text-stone-400 dark:text-stone-500 hover:text-[#1E1E1E] dark:hover:text-white transition-colors duration-200 hover:-translate-y-1"
        >
          {email}
        </a>
        <div className="w-[1px] h-12 bg-stone-300 dark:bg-stone-700" />
      </div>

      {/* --- HERO MAIN CONTENT --- */}
      <div className="container mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center z-10">
        
        {/* Left Text Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Subtitle / Single Sleek Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEBE0] dark:bg-white/5 border border-stone-300/80 dark:border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#6B7E63] dark:bg-[#8BA87E] animate-pulse"></span>
            <span className="font-mono text-[11px] font-bold tracking-widest text-stone-700 dark:text-stone-300 uppercase">
              Full Stack & AI Engineer
            </span>
          </div>

          {/* Headline (Panati Nitesh.) */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1E1E1E] dark:text-[#FAFAFA] leading-[1.03]">
              Panati
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1E1E1E] dark:text-[#FAFAFA] leading-[1.03] flex items-baseline">
              <span>Nitesh</span>
              <span className="text-[#6B7E63] dark:text-[#8BA87E] ml-1">.</span>
            </h1>
          </div>

          {/* Typewriter Dynamic Line */}
          <div className="min-h-[3rem] flex items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-700 dark:text-stone-200 tracking-tight">
              {currentText}
            </span>
            <span className="cursor-blink text-2xl sm:text-3xl md:text-4xl text-[#6B7E63] dark:text-[#8BA87E] font-light ml-0.5">|</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide bg-[#1E1E1E] text-white hover:bg-black dark:bg-white dark:text-[#121214] dark:hover:bg-stone-100 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Explore Work
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide bg-[#ECE7DC] text-[#1E1E1E] hover:bg-[#E2DCCE] dark:bg-white/10 dark:text-stone-200 dark:hover:bg-white/15 border border-stone-300/60 dark:border-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Socials */}
          <div className="flex lg:hidden items-center gap-5 pt-4 text-stone-600 dark:text-stone-400">
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
          </div>

        </div>

        {/* Right Visual Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group w-full max-w-sm sm:max-w-md">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#6B7E63]/20 via-amber-200/15 to-transparent dark:from-[#6B7E63]/15 dark:via-purple-500/10 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Main Rounded Card */}
            <div className="relative w-full aspect-[4/5] rounded-[3rem] bg-[#EFEBE0] dark:bg-[#18181C] border-2 border-stone-300/80 dark:border-white/10 shadow-2xl overflow-hidden flex items-center justify-center p-8 transition-all duration-500 group-hover:scale-[1.02]">
              
              {/* Subtle background decorative grid pattern in card */}
              <div className="absolute inset-0 bg-[radial-gradient(#1E1E1E_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.04] dark:opacity-[0.06]" />
              
              {/* Authentic Tom and Jerry Transparent Image */}
              <img
                src={homeImg}
                alt="Tom and Jerry"
                className="w-full h-full object-contain animate-float-slow drop-shadow-xl z-10"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;