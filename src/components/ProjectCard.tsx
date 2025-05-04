import { useState } from 'react';
import { Project } from '../types/Project';  // We'll create this type next

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(prev => !prev);
    };

    // Helper function to handle image rendering
    const renderFullDescription = (fullDescription: (string | { type: 'image'; src: string })[]) => {
        const elements: React.ReactNode[] = [];
        let imageBuffer: string[] = [];
    
        const flushImages = (key: number) => {
        if (imageBuffer.length > 0) {
            elements.push(
            <div className="image-row" key={`image-row-${key}`}>
                {imageBuffer.map((src, idx) => (
                <img src={src} alt={`Project image ${key}-${idx}`} className="project-image" key={idx} />
                ))}
            </div>
            );
            imageBuffer = [];
        }
        };
    
        fullDescription.forEach((item, index) => {
        if (typeof item === 'string') {
            flushImages(index);
            elements.push(<p key={`text-${index}`}>{item}</p>);
        } else {
            imageBuffer.push(item.src);
        }
        });
    
        flushImages(fullDescription.length); // flush any leftover images
    
        return elements;
    };
  

    return (
        <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>

        {isExpanded && (
            <div className="full-description expanded">
            {renderFullDescription(project.fullDescription)}
            </div>
        )}
        {/* Display GitHub and Demo buttons only when expanded */}
        {isExpanded && (
            <div className="project-buttons">
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <button className="project-button">View on GitHub</button>
                    </a>
                )}

                {project.liveDemoLink && (
                    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                        <button className="project-button">View Live Demo</button>
                    </a>
                )}

                {project.downloadLink && (
                    <a href={project.downloadLink} download>
                        <button className="project-button">Download Installer</button>
                    </a>
                )}
            </div>
        )}
        {isExpanded && (
            <div className="what-i-learned">
                {project.whatILearned && (
                    <p>{project.whatILearned}</p>
                )}
            </div>
        )}
        <button onClick={handleExpandClick}>
            {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        </div>
    );
};

export default ProjectCard;
