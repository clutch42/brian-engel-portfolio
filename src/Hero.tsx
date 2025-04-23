import React from 'react';
import './Hero.css'; // Assuming you're still using global styles or separate component styles
import ToggleImage from './ToggleImage';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      {/* Your Picture */}
      <ToggleImage />
      <div className="hero-text-container">
        {/* Your Name */}
        <h1 className="hero-title">Hey, I'm Brian</h1>

        {/* Short Introduction */}
        <p className="hero-intro">This isn't one of those sites where I hit you with 'I'm a passionate software engineer' in 72pt font.</p>

        {/* Short Summary */}
        <p className="hero-summary">
        This page is more about me—how I think, what I love, and some unusual hobbies.
        Click around if you're curious. If not, no hard feelings—there's a nav bar up top for the other stuff, go wild.
        </p>
      </div>
      <div className="hero-hobbies-container">
        <h2 className="hero-hobbies-title">Stuff I Like</h2>
        
          <ul className="hero-hobbies-list">
            <li className="hobby-card">
              <img src="/images/guitar.jpg" alt="Guitar" className="hobby-image" />
              <p>Playing Guitar</p>
            </li>
            <li className="hobby-card">
              <img src="/images/chess.jpg" alt="Chess" className="hobby-image" />
              <p>Chess</p>
            </li>
            {/* Add more <li> elements here for additional hobbies */}
          </ul>
        
      </div>
    </div>
  );
};

export default Hero;
