import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-[#F8F9FA] dark:bg-[#121214] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-stone-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#111827] dark:text-white">Panati Nitesh.</span>
          <span>© {currentYear} • All rights reserved.</span>
        </div>
        <p>
          Crafted with care, precision & curiosity.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

