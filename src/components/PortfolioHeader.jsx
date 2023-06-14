import React from "react";

import logo from "../assets/logo.png";
import Socials from "../components/Socials";

const PortfolioHeader = () => {
  return (
    <div className="flex flex-col items-center pt-6 pb-0 mt-0 overflow-hidden border-t border-white shadow-2xl border-opacity-30">
      {/* <div className="mx-auto -mt-[140px] shadow-2xl h-[100px] w-full shadow-blue-500/50"></div> */}

      <div className="">
        <img
          className="max-w-[200px] lg:max-w-[200px] mt-2 filter"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="flex items-center justify-centerbg-opacity-40">
        <h1 className="px-2 py-0 m-0 text-6xl font-extrabold tracking-tighter text-transparent uppercase bg-clip-text bg-gradient-to-b from-yellow-400 to-pink-500">
          Portfolio
        </h1>
      </div>
      <div className="flex items-center pb-1 mt-8 overflow-visible">
        <div className="text-white social-icons">
          <Socials></Socials>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
