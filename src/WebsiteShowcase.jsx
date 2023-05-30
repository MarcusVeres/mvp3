import React, { useState } from 'react';

const WebsiteShowcase = () => {

  const [width, setWidth] = useState(340);
  const [height, setHeight] = useState(600);

  const handleButtonClick = (newWidth, newHeight) => {
    setWidth(newWidth);
    setHeight(newHeight);
  };

  // TODO :: Add fullscreen capability 

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <button onClick={() => handleButtonClick(340,600)}>Phone</button>
        <button onClick={() => handleButtonClick(480,700)}>Tablet</button>
        <button onClick={() => handleButtonClick(840,500)}>Laptop</button>
        <button onClick={() => handleButtonClick(1080,640)}>Desktop</button>
        <button onClick={() => handleButtonClick(1600,768)}>Widescreen</button>
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
