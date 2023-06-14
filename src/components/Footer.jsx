import React from "react";

import logo from "../assets/logo.png";
import Socials from "../components/Socials";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-6 pb-16 mt-0 overflow-hidden border-t border-white shadow-2xl border-opacity-30">
      <div className="mx-auto -mt-[140px] shadow-2xl h-[100px] w-full shadow-blue-500/50"></div>

      <div className="">
        <img
          className="max-w-[200px] lg:max-w-[300px] mt-8 filter"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="flex items-center pb-1 mt-8 overflow-visible">
        <div className="text-white social-icons">
          <Socials></Socials>
        </div>
      </div>
      <p className="px-4 mt-4 text-sm text-center text-white transition-all duration-300 shadow-lg opacity-30 hover:opacity-100">
        Copyright &copy; 2023 Marcus Arcadius Veres. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
