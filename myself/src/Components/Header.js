import React, { useState } from "react";
import { logos, socialMediaUrl } from "../Details";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;

  const toggleClass = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent">
      <div className="container mx-auto md:flex justify-between py-2 max-width">
        <div className="flex justify-between items-center py-2 md:py-4">
          <button onClick={() => scrollToSection("home")}>
            <img
              className="w-14 rounded-full bg-white p-1"
              src={logos.logogradient}
              alt="logo"
            />
          </button>

          <div onClick={toggleClass} className="cursor-pointer md:hidden">
            <svg
              className="stroke-dark-heading dark:stroke-white"
              width="25"
              height="20"
              viewBox="0 0 16 13"
            >
              <path
                d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625M1.4375 6.3125H14.5625"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <nav className={`${!isOpen ? "hidden" : ""} md:flex justify-between`}>
          <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-6 md:mr-10">
            {["home", "about", "technologies", "projects", "contact"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer capitalize"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </li>
              )
            )}
          </ul>


          <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
            <li>
              <a href={twitter} target="_blank" rel="noreferrer">
                <FaXTwitter className="text-lg dark:text-white hover:scale-110 transition" />
              </a>
            </li>
            <li>
              <a href={linkdein} target="_blank" rel="noreferrer">
                <FaLinkedinIn className="text-lg dark:text-white hover:scale-110 transition" />
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                <FaGithub className="text-xl dark:text-white hover:scale-110 transition" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
