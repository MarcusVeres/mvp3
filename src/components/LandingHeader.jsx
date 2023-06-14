import React from "react";

import logo from "../assets/logo.png";
import portrait from "../assets/smile-transparent-no-crop.webp";

const LandingHeader = () => {
  return (
    <section className="flex flex-col w-full 2xl:h-screen">
      <div className="flex flex-col items-center lg:h-[60%] border-b border-gray-600 shadow-lg overflow-hidden bg-bottom bg-fixed bg-cover bg-[url('https://hdwallpaperim.com/wp-content/uploads/2017/08/22/413919-planet-Earth-space.jpg')]">
        <img
          className="-mb-10 w-full max-w-[600px]"
          src={portrait}
          alt="Like a Marcus ready to be shot into outer space... Space Marcus!"
        ></img>
      </div>
      <div className="relative flex-1 w-full bg-fixed bg-center border-t border-gray-600">
        <div className="container relative flex-col gap-10 px-10 mx-auto xl:max-w-6xl mt-14 xl:gap-8">
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
              <ul className="flex flex-wrap items-center justify-center -ml-1 space-x-2 lg:mb-0 lg:pt-6">
                <li className="block mb-2 text-sm text-blue-300 duration-500 bg-transparent border border-blue-400 rounded-full hover:bg-blue-600 group group-hover:text-white hover:border-transparent">
                  <a
                    className="flex items-center justify-center px-2 py-1 font-medium"
                    href="https://github.com/marcusveres"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-3 h-3 mr-1 fill-green-400 group-hover:fill-blue-300"
                      role="img"
                      viewBox="0 0 24 24"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    GitHub
                  </a>
                </li>
                <li className="block mb-2 text-sm text-blue-300 duration-500 bg-transparent border border-blue-400 rounded-full hover:bg-blue-600 group group-hover:text-white hover:border-transparent">
                  <a
                    className="flex items-center justify-center px-2 py-1 font-medium"
                    href="https://www.linkedin.com/in/marcus-veres-60b30638/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-3 h-3 mr-1 fill-green-400 group-hover:fill-blue-300"
                      role="img"
                      viewBox="0 0 24 24"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li className="block mb-2 text-sm text-blue-300 duration-500 bg-transparent border border-blue-400 rounded-full hover:bg-blue-600 group group-hover:text-white hover:border-transparent">
                  <a
                    className="flex items-center justify-center px-2 py-1 font-medium"
                    href="https://www.dropbox.com/s/fedt4ra6xevi46j/2022-05-04-marcus-veres-resume.pdf?dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-3 h-3 mr-1 fill-green-400 group-hover:fill-blue-300"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 66 66"
                      enableBackground="new 0 0 66 66"
                    >
                      <g>
                        <path d="M44.2,14.5h10.3L41.6,1.6v10.3C41.6,13.3,42.8,14.5,44.2,14.5z"></path>
                        <path d="M44.2,16.5c-2.6,0-4.7-2.1-4.7-4.7V1h-24c-2.6,0-4.7,2.1-4.7,4.6v54.7c0,2.6,2.1,4.7,4.7,4.7h34.9c2.6,0,4.6-2.1,4.6-4.7   V16.5H44.2z M19.3,35.3h16.7c0.6,0,1,0.4,1,1s-0.4,1-1,1H19.3c-0.6,0-1-0.4-1-1S18.8,35.3,19.3,35.3z M18.3,29.4c0-0.6,0.4-1,1-1   h16.7c0.6,0,1,0.4,1,1s-0.4,1-1,1H19.3C18.8,30.4,18.3,29.9,18.3,29.4z M46.7,58.1H19.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h27.4   c0.6,0,1,0.4,1,1S47.3,58.1,46.7,58.1z M46.7,51.1H19.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h27.4c0.6,0,1,0.4,1,1S47.3,51.1,46.7,51.1z    M46.7,44.2H19.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h27.4c0.6,0,1,0.4,1,1S47.3,44.2,46.7,44.2z M46.7,23.4H19.3c-0.6,0-1-0.4-1-1   s0.4-1,1-1h27.4c0.6,0,1,0.4,1,1S47.3,23.4,46.7,23.4z"></path>
                      </g>
                    </svg>
                    Resume
                  </a>
                </li>
              </ul>
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
