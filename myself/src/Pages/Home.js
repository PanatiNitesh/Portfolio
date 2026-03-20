import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { BsSun, BsMoon } from "react-icons/bs";

function Home() {
  const { name, tagline, homeImg } = personalDetails;

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  // ✅ Global theme state (synced with localStorage)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // GSAP animations (UNCHANGED)
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h11.current, {
      x: "-100%",
      delay: 0.8,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    })
      .from(
        h12.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  // ✅ Apply theme globally to <html> (ALL pages)
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

  // ✅ Sync theme if changed from another page/tab
  useEffect(() => {
    const syncTheme = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };
    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* Floating sticky theme toggle — fixed to bottom-right, always visible */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        className="fixed bottom-8 right-8 z-50
          w-12 h-12
          flex items-center justify-center
          rounded-full
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          shadow-lg hover:shadow-xl
          transition-all duration-300 hover:scale-110 active:scale-95
          group"
      >
        {isDarkMode ? (
          <BsSun className="text-yellow-400 h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <BsMoon className="text-gray-500 h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </button>

      <main className="container mx-auto max-width md:flex justify-between items-center relative">
        <div>
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold"
          >
            Hi 👋
          </h1>

          <h1
            ref={h12}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold"
          >
            I'm{" Nitesh Reddy"}
            <span className="bg-clip-text bg-gradient text-transparent">
              {name}
            </span>
          </h1>

          <h2
            ref={h13}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold"
          >
            {tagline}
          </h2>
        </div>

        <div className="mt-5 md:mt-0 flex justify-center md:justify-end">
          <img
            ref={myimageref}
            src={homeImg}
            alt={name}
            className="w-40 h-40 md:w-52 md:h-52 object-cover object-[50%_20%] rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </main>
    </>
  );
}

export default Home;