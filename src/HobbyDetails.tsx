import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HobbyDetails.css';

const hobbyData: Record<string, { title: string; description: string; image: string }> = {
  'hiking': {
    title: 'Trail over Towel',
    description: 'While most people prefer to spend their vacations relaxing on a beach, I\'ve always been drawn to national parks. There\'s \
    something about being surrounded by nature—hiking through quiet trails, spotting wildlife, and moving through wide, open landscapes—that \
    makes me feel more at peace than any beach ever could. But it\'s more than just scenery. National parks are wild. They\'re unpredictable. \
    People get lost, weather turns fast, and yes, people die out there. And maybe that\'s part of why I go. It\'s real. Reaching a peak or following \
    a snow-covered trail means something because it\'s not guaranteed. I\'m always trying to push myself—go a little farther, climb a little higher—not \
    to prove anything, but because that edge, that risk, makes everything feel more alive. It\'s a chance to disconnect and reset in a way that comfort never could.',
    image: '/images/teddy_dinosaur.webp',
  },
  'darts': {
    title: 'Professional Wall Denter',
    description: 'I\'ve been playing darts for a while, and while I\'m pretty good, it\'s not about taking the game too seriously. I enjoy it for the challenge \
    and the fun of improving with every throw. I\'ve competed in leagues and tournaments, but what I really love is teaching others the strategy—knowing what \
    to throw at, when to take risks, and how to manage the game. I always play to win, but win or lose, I\'m in it for the fun. Whether it\'s a casual match or \
    a more competitive setting, darts keeps me engaged and always offers something new to learn.',
    image: '/images/darts.webp',
  }, 
  'gaming': {
    title: 'Inventory Full',
    description: 'Gaming\'s been a part of my life since Zelda on the original NES, and over the years, it\'s only grown deeper. I enjoy all kinds of games—whether \
    it\'s diving into an MMO, strategizing in a PvP match, or losing myself in a single-player RPG. Right now, I\'m into Battlefield and Elder Scrolls Online, but I\'ve \
    played across genres—FPS, RPGs, and everything in between. As much as I love gaming, I\'ve also become more aware of how often new titles launch unfinished, buggy, \
    or laggy. It\'s frustrating, but it\'s also a reminder of how important solid testing and user experience really are—something I think about often, both in and out \
    of games.',
    image: '/images/gaming.webp'
  },
  'bartending': {
    title: 'Cool Under Pressure, Warm With People',
    description: 'I\'ve spent nearly my entire career in the service industry—bartending, serving, managing—and it\'s shaped the way I approach life and work. Working in \
    front-of-house roles has taught me how to connect with people quickly, multitask under pressure, and keep things running smoothly, even when everything\'s chaotic. A \
    huge part of the job is being able to read people and anticipate their needs before they even ask. Active listening is key—whether it\'s catching the small details a \
    customer drops or understanding the unspoken needs of the team. The diversity in the industry has broadened my understanding of different perspectives, and patience, \
    especially with language barriers, has become second nature. Whether it\'s managing a difficult customer or keeping a team motivated during a busy shift, the skills \
    I\'ve learned in the service industry translate into everything I do.',
    image: '/images/bartending.webp'
  },
  'baseball': {
    title: 'Take Me Out to the Ball Game',
    description: 'Baseball has been a part of my life for as long as I can remember. I started playing in little league and my love for the game has only grown since.  I\'ve \
    followed the Astros through everything—yes, even the banging trash cans—and they\'re still my team. I catch away games whenever I can and make a habit of touring MLB \
    stadiums in any city I visit. I\'ve even been to spring training in West Palm Beach. What keeps me hooked is how much thinking the game demands. The strategy, the matchups, \
    the stats—it\'s all part of the experience. Every pitch, every situation is its own little equation, and I love watching how it all plays out.',
    image: '/images/baseball.webp'
  },
  'cooking': {
    title: 'No Recipe, No Problem',
    description: 'I\'ve spent plenty of time in restaurant kitchens, and that\'s where I really learned to cook—not just following recipes, but understanding \
    food. I\'ve always believed that to be great in front of house, you need to know what\'s happening behind the scenes. That mindset stuck with me. Now, whether \
    I\'m baking, grilling, smoking, or putting together a meal from scratch, I cook with the same attention to detail I learned on the job. I rarely follow recipes \
    exactly—I\'m always tweaking things to fit my own taste. For me, cooking is part creativity, part skill, and part instinct, and there\'s nothing more satisfying \
    than making something great and sharing it with others.',
    image: '/images/cooking.webp'
  },
  'disc_golf': {
    title: 'Aiming for the Chains',
    description: 'Disc golf is a perfect mix of precision and the outdoors. I\'ve always enjoyed the challenge, and it\'s a great way to get some exercise while having fun. \
    One of the toughest rounds I\'ve played was in Denver, where snow covered the ground. To track our discs, we taped ribbons to them so they\'d stay visible above the snow \
    when they landed. It was a creative solution to a tricky problem, and that\'s what I love about disc golf—the constant mix of strategy, adaptability, and fun.',
    image: '/images/disc_golf.webp'
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
