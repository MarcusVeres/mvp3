import React from "react";

import logo from "../assets/logo.png";
import portrait from "../assets/smile-transparent-no-crop.webp";
import Socials from "../components/Socials";

const LandingHeader = () => {
  return (
    <section className="flex flex-col w-full 2xl:h-screen">
      <div className="flex flex-col items-center justify-end lg:h-[50%] border-b border-gray-600 shadow-lg overflow-hidden bg-bottom bg-fixed bg-cover bg-[url('https://hdwallpaperim.com/wp-content/uploads/2017/08/22/413919-planet-Earth-space.jpg')]">
        <img
          className="-mb-10 w-full max-w-[512px]"
          src={portrait}
          alt="Like a Marcus ready to be shot into outer space... Space Marcus!"
        ></img>
      </div>
      <div className="relative flex-1 w-full bg-fixed bg-center border-t border-gray-600">
        <div className="container relative flex-col gap-10 px-10 mx-auto xl:max-w-6xl mt-14 lg:mt-8 xl:gap-8">
          <div className="flex flex-col max-w-lg gap-12 mx-auto lg:w-full lg:max-w-none lg:flex-row rounded-3xl">
            <div className="flex-1 text-base lg:text-lg">
              <h2 className="pb-4 mr-4 text-4xl font-extrabold tracking-tight text-left border-b border-white 2xl:text-6xl xl:text-6xl text-gray-50 border-opacity-20">
                Hello<span className="">&#9786;</span>
              </h2>
              <p className="pt-6">
                I'm Marcus. I am adaptable, creative, and relentless. I work
                intensely and learn quickly to overcome obstacles and achieve my
                objectives.
              </p>
              <p className="pt-6">
                I believe that odds don't matter if you are tenacious, crazy, or
                stupid enough to see your ideas through to the end. I love what
                I do, and I am grateful I get to do it.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between text-center">
              <div className="flex flex-wrap items-center justify-center mt-6 -ml-1 space-x-2 lg:mb-0 lg:pt-6 lg:mt-4">
                <Socials></Socials>
              </div>
              <img
                className="max-w-[200px] lg:max-w-[300px] mt-8 filter "
                src={logo}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <a
          className="flex items-center justify-center w-full h-32 group"
          href="#things"
        >
          <svg className="text-white w-14 h-14 opacity-40 animate-bounce group-hover:opacity-100">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default LandingHeader;
