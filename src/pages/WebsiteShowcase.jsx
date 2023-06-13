import React, { useState } from 'react';

const WebsiteShowcase = () => {

  const [width, setWidth] = useState(340);
  const [height, setHeight] = useState(600);

  const resizePreview = (newWidth, newHeight) => {
    setWidth(newWidth);
    setHeight(newHeight);
  };

  // TODO :: Add fullscreen capability 
  // TODO :: Add "goto original" capability (may be the same thing?)

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div class="fixed top-0 right-0 flex flex-row space-x-2">
        <button className="px-4 py-2 duration-300 ease-in bg-slate-800 text-slate-100 hover:bg-slate-600 transition-color" onClick={() => resizePreview(340,600)}>Phone</button>
        <button className="px-4 py-2 duration-300 ease-in bg-slate-800 text-slate-100 hover:bg-slate-600 transition-color" onClick={() => resizePreview(480,700)}>Tablet</button>
        <button className="px-4 py-2 duration-300 ease-in bg-slate-800 text-slate-100 hover:bg-slate-600 transition-color" onClick={() => resizePreview(840,500)}>Laptop</button>
        <button className="px-4 py-2 duration-300 ease-in bg-slate-800 text-slate-100 hover:bg-slate-600 transition-color" onClick={() => resizePreview(1080,640)}>Desktop</button>
        <button className="px-4 py-2 duration-300 ease-in bg-slate-800 text-slate-100 hover:bg-slate-600 transition-color" onClick={() => resizePreview(1600,768)}>Widescreen</button>
      </div>
      <iframe
        src="https://marcusveres.github.io/web-layouts/marketing-app.html" // "http://example.com"
        width={width}
        height={height}
        style={{ border: 'none' }}
        title="showcase"
      />
    </div>
  );
};

export default WebsiteShowcase;
