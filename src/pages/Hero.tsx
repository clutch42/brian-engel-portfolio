import React from 'react';
import '../styles/Hero.css'; // Assuming you're still using global styles or separate component styles
import ToggleImage from '../components/ToggleImage';
import { hobbies } from '../data/hobbies';
import HobbyCard from "../components/HobbyCard";

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
          {hobbies.map(hobby => (
            <li key={hobby.id}>
              <HobbyCard hobby={hobby} />
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Hero;
