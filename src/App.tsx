import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Hero from './Hero';
import Contact from './Contact';
import Projects from './Projects';
import Education from './Education';
import Nav from './Nav';
import HobbyDetails from './HobbyDetails';
import ScrollToTop from './ScrollToTop';

function AppWrapper() {
  const location = useLocation();

  return (
    <>
      <Nav />

      {/* Apply animated-bg class to all pages except Contact */}
      <div className={`page-container ${location.pathname === "/contact" ? "contact-bg" : "animated-bg"}`}>
        <ScrollToTop />
        <Routes>
          {/* Route for Home (Index) */}
          <Route path="/" element={<Hero />} />

          {/* Route for Education */}
          <Route path="/education" element={<Education />} />
          
          {/* Route for Projects */}
          <Route path="/projects" element={<Projects />} />
          
          {/* Route for Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Route for Hobbies */}
          <Route path="/hobby/:id" element={<HobbyDetails />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
