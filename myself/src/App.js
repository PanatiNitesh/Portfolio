import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Technologies from "./Pages/Technologies";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { Analytics } from "@vercel/analytics/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // ✅ GLOBAL THEME STATE
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // ✅ APPLY THEME TO <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // GSAP reveal animation (UNCHANGED)
  useEffect(() => {
    const sections = gsap.utils.toArray(".reveal-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Router>
      <Header />

      {/* ✅ IMPORTANT: NO FORCED DARK BACKGROUND */}
      <div className="transition-colors duration-300 bg-white dark:bg-[#0b0b0b] text-black dark:text-white">
        <section id="home" className="min-h-screen flex items-center pt-20">
          <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </section>

        <section id="about" className="reveal-section py-20 border-t border-white/5">
          <About />
        </section>

        <section id="technologies" className="reveal-section py-20 border-t border-white/5">
          <Technologies />
        </section>

        <section id="projects" className="reveal-section py-20 border-t border-white/5">
          <Projects />
        </section>

        <section id="contact" className="reveal-section py-20 border-t border-white/5">
          <Contact />
        </section>
      </div>

      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
