import React from "react";

import island from "../assets/island.webp";

import cardinal from "../assets/portfolio/cardinal.jpg";
import fence from "../assets/portfolio/fence.jpg";
import flowers from "../assets/portfolio/flowers.jpg";
import glow from "../assets/portfolio/glow.jpg";
import grandpa from "../assets/portfolio/grandpa.jpg";
import knife from "../assets/portfolio/knife.jpg";
import knob from "../assets/portfolio/knob.jpg";
import lamp from "../assets/portfolio/lamp.jpg";
import miki from "../assets/portfolio/miki.jpg";
import pine from "../assets/portfolio/pine.jpg";
import pipes from "../assets/portfolio/pipes.jpg";
import shatters from "../assets/portfolio/shatters.jpg";
import spade from "../assets/portfolio/spade.jpg";
import streetlight from "../assets/portfolio/streetlight.jpg";
import tunnel from "../assets/portfolio/tunnel.jpg";
import trunk from "../assets/portfolio/trunk.jpg";
import wall from "../assets/portfolio/wall.jpg";

const PortfolioGrid = () => {
  return (
    <div className="container grid grid-cols-2 gap-2 p-2 mx-auto mt-12 text-white max-w-7xl sm:p-4 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {/* <div className="flex items-center justify-center col-span-2 bg-black border border-white rounded-lg shadow-inner bg-opacity-40 border-opacity-10 sm:col-span-3 md:col-span-2">
        <h1 className="p-0 m-0 text-6xl font-extrabold tracking-tighter text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Portfolio
        </h1>
      </div> */}
      <a
        href="https://marcusveres.artstation.com/projects/QXWlNd"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom md:col-span-2"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${island})` }}
        ></div>
        {/* <h3 className="hidden text-center uppercase text-md md:block md:text-2xl lg:text-3xl card-zoom-text xl:text-4xl">
          MODELING
        </h3> */}
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${pine})` }}
        ></div>
        {/* <h3 className="hidden text-center uppercase text-md md:block md:text-2xl lg:text-3xl card-zoom-text xl:text-4xl">
          Photo
        </h3> */}
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${cardinal})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${grandpa})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="row-span-2 card-zoom"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${lamp})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${knob})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="row-span-2 card-zoom"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${fence})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${trunk})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${pipes})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${flowers})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="md:col-span-2 card-zoom"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${knife})` }}
        ></div>
        {/* <h3 className="hidden text-center uppercase text-md md:block md:text-2xl lg:text-3xl card-zoom-text xl:text-4xl">
          Case Study II
        </h3> */}
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${tunnel})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="row-span-2 card-zoom"
      >
        <div
          className="card-zoom-image"
          style={{
            backgroundImage: `url(${streetlight})`,
          }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${wall})` }}
        ></div>
      </a>
      <a
        href="https://www.behance.net/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="row-span-2 card-zoom"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${spade})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${miki})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${glow})` }}
        ></div>
      </a>
      <a
        href="https://500px.com/p/marcusveres"
        target="_blank"
        rel="noopener noreferrer"
        className="card-zoom aspect-golden"
      >
        <div
          className="card-zoom-image"
          style={{ backgroundImage: `url(${shatters})` }}
        ></div>
      </a>
    </div>
  );
};

export default PortfolioGrid;
