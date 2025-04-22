import './Projects.css'; 

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>This is a description of the first project. Explain what it does and why it's awesome!</p>
          <a href="#" target="_blank" rel="noopener noreferrer">See Project</a>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>This is a description of the second project. Share some cool features here.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">See Project</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
