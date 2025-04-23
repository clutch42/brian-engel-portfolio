import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HobbyDetails.css';

const hobbyData: Record<string, { title: string; description: string; image: string }> = {
  'hiking': {
    title: 'Hiking Adventures',
    description: 'I love hiking up weird hills and pretending I’m being chased by dinosaurs.',
    image: '/images/teddy_dinosaur.jpg',
  },
  'darts': {
    title: 'Throwing Sharp Things',
    description: 'Sometimes I hit the bullseye. Most of the time, I hit the wall.',
    image: '/images/darts.jpg',
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
