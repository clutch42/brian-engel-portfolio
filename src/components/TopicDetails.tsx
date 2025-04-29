import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Hook for extracting route parameters
import { additionalLearning } from '../data/additionalLearning'; // Import your data
import '../styles/TopicDetails.css';

const TopicDetails: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>(); // Extract topicId from the URL
  const navigate = useNavigate();

  const topic = additionalLearning
    .flatMap((source) => source.topics) // Flatten the topics array from each source
    .find((topic) => topic.id === topicId); // Find the topic by ID

  if (!topic) {
    return <p>Topic not found.</p>; // If no topic is found, show an error message
  }

  return (
    <div className="topic-detail">
        <h2>{topic.name}</h2>
        <p><strong>Description:</strong> {topic.shortDescription}</p>
        <div className="skills-and-github">           
            {topic.skills && topic.skills?.length > 0 && (
                <div>
                    <strong>Topics Covered</strong>
                    <div className="skills-section">
                        <ul className="skills-list">
                            {topic.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {topic.link && (
            <div className="github-button-wrapper">
                <a href={topic.link} target="_blank" rel="noopener noreferrer">
                    <button>View</button>
                </a>
            </div>
            )}
        </div>
        <div className="back-button-wrapper">
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    </div>
  );
};

export default TopicDetails;
