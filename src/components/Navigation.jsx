import React from "react";
import Logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-0 transition-all duration-300 bg-gradient-to-t lg:-mt-20 hover:mt-0 from-black to-slate-900">
      <input id="menu-toggle" className="hidden" type="checkbox" />
      <ul
        id="menu"
        className="relative flex items-center justify-between w-full overflow-hidden text-5xl font-extrabold tracking-tight capitalize transition-all duration-300 -translate-y-32 divide-white opacity-0 lg:opacity-100 lg:translate-y-0 max-h-0 lg:max-h-20 lg:mx-auto lg:divide-x lg:flex-row max-w-[1732px] divide-opacity-10"
      >
        <li className="w-full h-full text-center">
          <a
            className="block w-full h-full py-4 transition-all duration-500 bg-transparent hover:bg-white hover:text-gray-900"
            href="cv-landing-tpl.html"
          >
            About
          </a>
        </li>
        <li className="w-full h-full text-center">
          <a
            className="block w-full h-full py-4 transition-all duration-500 bg-transparent hover:bg-white hover:text-gray-900"
            href="portfolio.html"
          >
            Portfolio
          </a>
        </li>
        <li className="w-full h-full text-center">
          <a
            className="block w-full h-full py-4 transition-all duration-500 bg-transparent hover:bg-white hover:text-gray-900"
            href="contact.html"
          >
            Contact
          </a>
        </li>
        <li className="w-full h-full text-center">
          <a
            className="block w-full h-full py-4 transition-all duration-500 bg-transparent hover:bg-white hover:text-gray-900"
            href="#top"
          >
            🔝
          </a>
        </li>
      </ul>
      <div className="absolute left-0 right-0 h-20 bg-blue-400x -bottom-20">
        <div className="container mx-auto max-w-[1800px] px-8 bg-blue-500x flex flex-row justify-end">
          <div className="block w-24 h-16 transition-opacity duration-700 ease-in-out bg-black border-b border-l border-r border-white rounded-b-full shadow-xl cursor-pointer lg:h-24 lg:w-28 bg-opacity-80 rounded-xl border-opacity-20 opacity-40 hover:opacity-100">
            <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden">
              <img
                className="max-w-[64px] lg:max-w-[100px] mx-auto pt-1"
                src={Logo}
                alt="Logo"
              />
            </label>
            <img
              className="cursor-default hidden lg:block max-w-[64px] lg:max-w-[100px] mx-auto pt-1"
              src={Logo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
