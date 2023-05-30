import React, { useState } from 'react';

const WebsiteShowcase = () => {
  const [width, setWidth] = useState(960);

  const handleButtonClick = (newWidth) => {
    setWidth(newWidth);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <iframe
        src="https://marcusveres.github.io/web-layouts/marketing-app.html" // "http://example.com"
        width={width}
        height="500"
        style={{ border: 'none' }}
        title="showcase"
      />

      <div>
        <button onClick={() => handleButtonClick(320)}>Phone</button>
        <button onClick={() => handleButtonClick(640)}>Tablet</button>
        <button onClick={() => handleButtonClick(960)}>Laptop</button>
        <button onClick={() => handleButtonClick(1280)}>Desktop</button>
        <button onClick={() => handleButtonClick(1440)}>Widescreen</button>
      </div>
    </div>
  );
};

export default WebsiteShowcase;
