import React, { useState } from 'react';

const WebsiteShowcase = () => {
  const [width, setWidth] = useState(800);

  const handleButtonClick = (newWidth) => {
    setWidth(newWidth);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <iframe
        src="http://example.com"
        width={width}
        height="500"
        style={{ border: 'none' }}
        title="showcase"
      />

      <div>
        <button onClick={() => handleButtonClick(800)}>800px</button>
        <button onClick={() => handleButtonClick(600)}>600px</button>
        <button onClick={() => handleButtonClick(400)}>400px</button>
        <button onClick={() => handleButtonClick(200)}>200px</button>
      </div>
    </div>
  );
};

export default WebsiteShowcase;
