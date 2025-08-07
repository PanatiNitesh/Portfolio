import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
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

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center relative">

      {/* Dark/Light Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 text-2xl p-2 rounded-full transition duration-300 hover:scale-110"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-11.66l-.71.71M4.05 19.95l-.71.71m16.97 0l-.71-.71M4.05 4.05l-.71-.71M21 12h1M3 12H2m10-9a9 9 0 100 18 9 9 0 000-18z" />
  </svg>
) : (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)}

      </button>

      <div>
        {/* Line 1: Hi 👋 */}
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold"
          ref={h11}
        >
          Hi 👋
        </h1>

        {/* Line 2: I'm {name} (FIXED) */}
        <h1
          ref={h12}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold"
        >
          I'm{" "}
          <span className="bg-clip-text bg-gradient text-transparent">
            {name}
          </span>
        </h1>

        {/* Line 3: Tagline */}
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
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-lg border-4 border-white"
          src={img}
          alt={name}
        />
      </div>
    </main>
  );
}

export default Home;
