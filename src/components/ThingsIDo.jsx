import React from "react";
import bg from "../assets/bg-phones.webp"; // import the image

const ThingsIDo = () => {
  return (
    <section
      id="things"
      className="xl:h-screen xl:flex xl:items-center xl:justify-center p-[5%] sm:p-12 lg:p-12 border-y border-gray-600 relative w-full bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }} // directly use the imported image
    >
      <div className="container py-0 px-[5%] mx-auto rounded-md md:px-10 lg:max-w-3xl xl:max-w-6xl pane xl:pt-4 xl:pb-2 xl:my-44 sm:rounded-3xl bg-opacity-70">
        <h2 className="pb-4 text-4xl font-extrabold tracking-tight text-left text-gray-300 border-b border-white xl:text-6xl border-opacity-20">
          Things I Do
        </h2>
        .. template "things". ..
      </div>
    </section>
  );
};

export default ThingsIDo;
