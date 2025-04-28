import React from 'react';
import { Topic } from '../types/Topic';
import { Link } from 'react-router-dom';

interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  return (
    <div className="topic-card">
        <Link to={`/topics/${topic.id}`} className="topic-card-link">
            <h4>{topic.name}</h4>
        </Link>
    </div>
  );
};

export default TopicCard;
