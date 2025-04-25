import React from 'react';
import './Hero.css'; // Assuming you're still using global styles or separate component styles
import ToggleImage from './ToggleImage';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      {/* Your Picture */}
      <ToggleImage />
      <div className="hero-text-container">
        {/* Your Name */}
        <h1 className="hero-title">Hey, I'm Brian</h1>

        {/* Short Introduction */}
        <p className="hero-intro">This isn't one of those sites where I hit you with 'I'm a passionate software engineer dedicated to scalable solutions' in 72pt font.</p>

        {/* Short Summary */}
        <p className="hero-summary">
        Not that I'm not, but this page is more about me—how I think, what I love, and some unusual hobbies.
        Click around if you're curious. If not, no worries—there's a nav bar up top for the other stuff, too. Go wild.
        </p>
      </div>
      <div className="hero-hobbies-container">
        <h2 className="hero-hobbies-title"></h2>
        
          <ul className="hero-hobbies-list">
            <li className="hobby-card">
              <Link to="hobby/bartending">
                <img src="/images/bartending.webp" alt="bartending" className="hobby-image" />
              </Link>
            </li>
            <li className="hobby-card">
              <Link to="hobby/hiking">
                <img src="/images/teddy_dinosaur.webp" alt="teddy and dinosaur" className="hobby-image" />
              </Link>
            </li>
            <li className="hobby-card">
              <Link to="hobby/darts">
                <img src="/images/darts.webp" alt="darts" className="hobby-image" />
              </Link>
            </li>
            <li className="hobby-card">
              <Link to="hobby/gaming">
                <img src="/images/gaming.webp" alt="gaming" className="hobby-image" />
              </Link>
            </li>
            <li className="hobby-card">
              <Link to="hobby/baseball">
                <img src="/images/baseball.webp" alt="baseball" className="hobby-image" />
              </Link>
            </li>
            <li className="hobby-card">
              <Link to="hobby/cooking">
                <img src="/images/cooking.webp" alt="cooking" className="hobby-image" />
              </Link>
            </li>
            <li className="hobby-card">
              <Link to="hobby/disc_golf">
                <img src="/images/disc_golf.webp" alt="disc golf" className="hobby-image" />
              </Link>
            </li>

          </ul>
        
      </div>
    </div>
  );
};

export default Hero;
