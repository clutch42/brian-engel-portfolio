import React from 'react';
import { LearningSource } from '../types/LearningSource';
import TopicCard from './TopicCard';

interface LearningSourceCardProps {
  source: LearningSource;
}

const LearningSourceCard: React.FC<LearningSourceCardProps> = ({ source }) => {
  return (
    <div className="learning-source-card">
      <div className="source-title-and-image">
      {/* Add the image */}
        {source.image && (
          <img
            src={source.image}
            alt={source.name}
            className="learning-source-image"
          />
        )}
        <div>
          <h3>{source.name}</h3>
          <p>{source.description}</p>
        </div>
      </div>
      <div className="topics-list">
        {source.topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default LearningSourceCard;
