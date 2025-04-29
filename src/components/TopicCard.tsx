import React from 'react';
import { Topic } from '../types/Topic';
import { Link } from 'react-router-dom';

interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  return (
    <Link to={`/topics/${topic.id}`} className="topic-card-link">
      <div className="topic-card">
              <h4>{topic.name}</h4>
      </div>
    </Link>
  );
};

export default TopicCard;
