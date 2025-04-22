import React from 'react';
import './Hero.css'; // Assuming you're still using global styles or separate component styles

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Your Picture */}
        <img className="hero-image" src="/path-to-your-image.jpg" alt="Brian Engel" />

        {/* Your Name */}
        <h1 className="hero-title">Hey, I'm Brian</h1>

        {/* Short Introduction */}
        <p className="hero-intro">A passionate Software Engineer focused on frontend technologies.</p>

        {/* Short Summary */}
        <p className="hero-summary">
          I'm always exploring new ways to make the web more interactive, intuitive, and user-friendly.
        </p>
      </div>
    </div>
  );
};

export default Hero;
