import { projects } from '../data/projects';
import '../styles/Projects.css'; 
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="projects-container">
      <div className="projects-section">
        <h2>Projects</h2>
        <p>Here's a collection of work showcasing what I’ve built and explored.</p>
        {/* Projects will go here */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
