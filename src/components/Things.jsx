import React from "react";

import {
  AdTech,
  BizDev,
  Coaching,
  CustomerInteraction,
  GameDev,
  GraphicDesign,
  Leadership,
  ProductDesign,
  Prototyping,
  UI,
  UX,
  WebDev,
} from "../components/SvgThings";

const thingsData = [
  {
    Svg: AdTech,
    Title: "Advertising Technology",
  },
  {
    Svg: BizDev,
    Title: "Business Development",
  },
  {
    Svg: Coaching,
    Title: "Coaching/ Training",
  },
  {
    Svg: CustomerInteraction,
    Title: "Customer Interaction",
  },
  {
    Svg: GameDev,
    Title: "Game Development",
  },
  {
    Svg: GraphicDesign,
    Title: "Graphic Design",
  },
  {
    Svg: Leadership,
    Title: "Leadership",
  },
  {
    Svg: ProductDesign,
    Title: "Product Design",
  },
  {
    Svg: Prototyping,
    Title: "Prototyping",
  },
  {
    Svg: UI,
    Title: "User Interfaces",
  },
  {
    Svg: UX,
    Title: "User Experience",
  },
  {
    Svg: WebDev,
    Title: "Web Development",
  },
];

const Things = () => {
  return (
    <ul className="grid grid-cols-2 gap-8 mt-6 mb-10 text-3xl text-white md:gap-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 svg-child-icons">
      {thingsData.map((thing) => (
        <li
          key={thing.Title}
          className="relative group aspect-square group-hover:fill-green-500 fill-white fs_fill-[{{ $t.SvgColor }}]"
        >
          <div className="relative flex items-center justify-center w-full h-full transition-all duration-300 rounded-md">
            <thing.Svg />
            <div className="p-4 mx-8 text-lg font-medium text-center text-white uppercase transition-all duration-300 translate-y-12 bg-black rounded-sm opacity-0 group-hover:opacity-100 bg-opacity-20">
              <h3 className="">{thing.Title}</h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Things;
