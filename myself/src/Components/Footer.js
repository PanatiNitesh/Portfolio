import React from "react";
import { socialMediaUrl } from "../Details";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaCode } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { linkdein, github, twitter, leetcode } = socialMediaUrl;

  return (
    <footer className="w-full py-8 bg-[#F8F9FA] dark:bg-[#121214] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-stone-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#111827] dark:text-white">Panati Nitesh</span>
          <span>(P Nitesh) • © {currentYear}</span>
        </div>

        <div className="flex items-center gap-4 text-slate-500 dark:text-stone-400">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111827] dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={15} />
          </a>
          <a
            href={linkdein}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={15} />
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111827] dark:hover:text-white transition-colors"
            aria-label="Twitter / X"
          >
            <FaXTwitter size={14} />
          </a>
          <a
            href={leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFA116] transition-colors"
            aria-label="LeetCode"
          >
            <FaCode size={15} />
          </a>
        </div>

        <p className="text-slate-400 dark:text-stone-500">
          Bangalore Institute of Technology • Team Codex Creators
        </p>
      </div>
    </footer>
  );
}

export default Footer;


