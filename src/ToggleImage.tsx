import React, { useState } from 'react';
import './ToggleImage.css'; // Make sure the CSS file is imported

const ToggleImage: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped); // Flip between the two images on click
  };

  return (
    <div className="image-flip-container" onClick={handleClick}>
      <div className={`flip-image-container ${flipped ? 'flipped' : ''}`}>
        {/* First Image (Formal Image) */}
        <img
          src="/images/ProfilePic.webp"  // Path to the formal image
          alt="Formal Image"
          className="flip-image"
        />
        {/* Second Image (Casual Image) */}
        <img
          src="/images/alligators.webp"  // Path to the casual image
          alt="Casual Image"
          className="flip-image"
        />
      </div>
    </div>
  );
};

export default ToggleImage;
