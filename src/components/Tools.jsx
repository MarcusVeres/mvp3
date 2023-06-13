import React from "react";
import {
  SvgAdobe,
  SvgAffinity,
  SvgBlender,
  SvgCSS3,
  SvgCSharp,
  SvgFigma,
  SvgGo,
  SvgHtml,
  SvgJavascript,
  SvgNotion,
  SvgPython,
  SvgUnity,
} from "./SvgTools";

// Define your Tools data
const toolsData = [
  {
    name: "adobe",
    Svg: SvgAdobe,
    SvgColor: "#FF0000",
    Title: "Adobe Suite",
  },
  {
    name: "affinity",
    Svg: SvgAffinity,
    SvgColor: "#FFFFFF",
    Title: "Affinity Suite",
  },
  {
    Svg: SvgBlender,
    name: "blender",
    SvgColor: "#F5792A",
    Title: "Blender",
  },
  {
    Svg: SvgCSharp,
    name: "c-sharp",
    SvgColor: "#239120",
    Title: "C#",
  },
  {
    Svg: SvgCSS3,
    name: "css",
    SvgColor: "#1572B6",
    Title: "CSS",
  },
  {
    Svg: SvgFigma,
    name: "figma",
    SvgColor: "#F24E1E",
    Title: "Figma",
  },
  {
    Svg: SvgGo,
    name: "go",
    SvgColor: "#00ADD8",
    Title: "Go",
  },
  {
    Svg: SvgHtml,
    name: "html",
    SvgColor: "#E34F26",
    Title: "HTML",
  },
  {
    Svg: SvgJavascript,
    name: "javascript",
    SvgColor: "#F7DF1E",
    Title: "Javascript",
  },
  {
    Svg: SvgNotion,
    name: "notion",
    SvgColor: "#FFFFFF",
    Title: "Notion",
  },
  {
    Svg: SvgPython,
    name: "python",
    SvgColor: "#3776AB",
    Title: "Python",
  },
  {
    name: "unity",
    Svg: SvgUnity,
    SvgColor: "#FFFFFF",
    Title: "Unity 3D",
  },
];

const Tools = () => (
  <ul className="grid grid-cols-2 gap-12 mt-6 mb-20 text-lg text-white md:gap-16 lg:text-3xl sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 svg-child-icons-smol">
    {toolsData.map((tool) => (
      <li
        key={tool.Title} // ensure that each tool has a unique title
        className={`relative group aspect-square`}
      >
        <tool.Svg />
        <div
          className={`w-full h-full transition-all duration-300 justify-center flex items-center`}
        >
          {/* If Svg is a path, use <img src={tool.Svg} />. If Svg is a component, use <tool.Svg /> */}
          <tool.Svg />
          <div className="p-4 mx-8 text-lg font-medium text-center text-white uppercase transition-all duration-300 translate-y-12 bg-black rounded-sm opacity-0 group-hover:opacity-100 bg-opacity-20">
            {tool.Title}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default Tools;
