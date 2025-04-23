import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HobbyDetails.css';

const hobbyData: Record<string, { title: string; description: string; image: string }> = {
  'hiking': {
    title: 'Hiking',
    description: 'placeholder for hiking description',
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
    description: 'placeholder for gaming description',
    image: '/images/bartending.jpg'
  },
  'baseball': {
    title: 'baseball',
    description: 'placeholder for gaming description',
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
