import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-[#F7F5EE] dark:bg-[#121214] border-t border-stone-200/60 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500 dark:text-stone-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#1E1E1E] dark:text-white">Nitesh.</span>
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

