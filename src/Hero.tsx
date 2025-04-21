import React from 'react';
import './Hero.css'; // Assuming you're still using global styles or separate component styles

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated background */}
      <div className="animated-bg" />
      
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center">
          Hey, I'm Brian
        </h1>
        <p className="mt-4 text-lg text-center">
          A passionate Software Engineer focused on frontend technologies.
        </p>
        <div className="mt-8">
          {/* Call to Action buttons */}
          <button className="mr-4">View Projects</button>
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
