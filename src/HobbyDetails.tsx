import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HobbyDetails.css';

const hobbyData: Record<string, { title: string; description: string; image: string }> = {
  'hiking': {
    title: 'Hiking',
    description: 'While most people prefer to spend their vacations relaxing on a beach, I\'ve always been drawn to national parks. There\'s \
    something about being surrounded by nature—hiking through quiet trails, spotting wildlife, and moving through wide, open landscapes—that \
    makes me feel more at peace than any beach ever could. But it\'s more than just scenery. National parks are wild. They\'re unpredictable. \
    People get lost, weather turns fast, and yes, people die out there. And maybe that\'s part of why I go. It\'s real. Reaching a peak or following \
    a snow-covered trail means something because it\'s not guaranteed. I\'m always trying to push myself—go a little farther, climb a little higher—not \
    to prove anything, but because that edge, that risk, makes everything feel more alive. It\'s a chance to disconnect and reset in a way that comfort never could.',
    image: '/images/teddy_dinosaur.jpg',
  },
  'darts': {
    title: 'Darts',
    description: 'placeholder for darts description',
    image: '/images/darts.jpg',
  }, 
  'gaming': {
    title: 'Gaming',
    description: 'place holder for gaming description',
    image: '/images/gaming.jpg'
  },
  'bartending': {
    title: 'bartending',
    description: 'placeholder for bartending description',
    image: '/images/bartending.jpg'
  },
  'baseball': {
    title: 'baseball',
    description: 'placeholder for baseball description',
    image: '/images/baseball.jpg'
  },
  'cooking': {
    title: 'cooking',
    description: 'placeholder for cooking description',
    image: '/images/cooking.jpg'
  },
  'disc_golf': {
    title: 'disc golf',
    description: 'placeholder for disc golf description',
    image: '/images/disc_golf.jpg'
  }
};

const HobbyDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hobby = id ? hobbyData[id] : null;

  if (!hobby) {
    return <p>Hobby not found. Go back?</p>;
  }

  return (
    <div className="hobby-detail-container">
      <h1>{hobby.title}</h1>
      <img src={hobby.image} alt={hobby.title} style={{ width: '300px', borderRadius: '12px' }} />
      <p>{hobby.description}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default HobbyDetails;
