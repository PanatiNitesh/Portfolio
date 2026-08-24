import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

function Header({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Technologies", id: "technologies" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#F7F5EE]/85 dark:bg-[#121214]/85 border-b border-stone-200/60 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 flex justify-between items-center h-20">
        
        {/* Left Spacer / Empty brand space */}
        <div className="flex-1"></div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-7 font-medium text-sm text-[#57534E] dark:text-[#A1A1AA]">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-[#1E1E1E] dark:hover:text-white transition-colors duration-200 py-1 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1E1E1E] dark:bg-white transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full bg-stone-200/70 hover:bg-stone-300/80 dark:bg-white/10 dark:hover:bg-white/15 text-[#1E1E1E] dark:text-white transition-all duration-200 hover:scale-110 active:scale-95"
          >
            {isDarkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-stone-700" />}
          </button>
        </nav>

        {/* Mobile Hamburger & Theme Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full bg-stone-200/70 dark:bg-white/10 text-[#1E1E1E] dark:text-white"
          >
            {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-stone-700" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#1E1E1E] dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-[#F7F5EE] dark:bg-[#121214] border-b border-stone-200 dark:border-white/10 shadow-xl animate-fadeIn">
          <ul className="flex flex-col space-y-4 font-medium text-base text-[#57534E] dark:text-[#A1A1AA]">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-2 hover:text-[#1E1E1E] dark:hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

