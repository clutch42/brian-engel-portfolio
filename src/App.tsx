import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './styles/App.css';
import Hero from './pages/Hero';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Nav from './components/Nav';
import HobbyDetails from './components/HobbyDetails';
import ScrollToTop from './components/ScrollToTop';
import CourseDetail from './components/CourseDetails';
import CertificationDetails from "./components/CertificationDetails";
import TopicDetails from './components/TopicDetails';

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

          {/* Route for Courses */}
          <Route path="/courses/:id" element={<CourseDetail />} />

          {/* Route for Certifications */}
          <Route path="/certifications/:id" element={<CertificationDetails />} />

          {/* Route for Learning */}
          <Route path="/topics/:topicId" element={<TopicDetails />} />

          {/* Reroute for unknown routes */}
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
