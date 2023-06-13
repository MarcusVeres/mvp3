import React from "react";
import bg from "../assets/island-translucent.webp";
import Tools from "../components/Tools";

const ToolsIUse = () => {
  return (
    <section
      className="relative w-full pt-6 pb-4 bg-fixed bg-center bg-cover border-gray-600 md:pt-14 md:pb-12 xl:h-screen xl:flex xl:items-center xl:justify-center border-y"
      style={{ backgroundImage: `url(${bg})` }} // directly use the imported image
    >
      <div className="container max-w-lg px-6 mx-auto lg:px-0 md:max-w-2xl xl:max-w-6xl xl:px-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-left border-b border-white md:pb-4 xl:text-6xl border-opacity-20">
          Tools I Use
        </h2>
        <Tools></Tools>
      </div>
    </section>
  );
};

export default ToolsIUse;
