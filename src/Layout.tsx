// Layout.tsx
import { useRef, useState, useEffect } from 'react';
import Nav from './Nav';  // Import the Navbar component

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight); // Get the navbar height
    }

    // Update the height when the window is resized
    const handleResize = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Pass the navbarRef to the Nav component */}
      <div ref={navbarRef}>
        <Nav />
      </div>

      {/* Apply paddingTop dynamically based on navbarHeight */}
      <div style={{ paddingTop: `${navbarHeight}px` }}>
        {children}  {/* This is where the page content (Hero, Projects, etc.) will go */}
      </div>
    </div>
  );
};

export default Layout;
