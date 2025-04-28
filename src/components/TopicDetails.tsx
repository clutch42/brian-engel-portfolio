import React from 'react';
import { useParams } from 'react-router-dom'; // Hook for extracting route parameters
import { additionalLearning } from '../data/additionalLearning'; // Import your data

const TopicDetails: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>(); // Extract topicId from the URL
  const topic = additionalLearning
    .flatMap((source) => source.topics) // Flatten the topics array from each source
    .find((topic) => topic.id === topicId); // Find the topic by ID

  if (!topic) {
    return <p>Topic not found.</p>; // If no topic is found, show an error message
  }

  return (
    <div className="topic-details">
      <h3>{topic.name}</h3>
      <p>{topic.shortDescription}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TopicDetails;
