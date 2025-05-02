import React from "react";
import { Link } from "react-router-dom";
import { Hobby } from "../types/Hobby";

interface HobbyCardProps {
  hobby: Hobby;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ hobby }) => {
  return (
    <Link to={`/hobby/${hobby.id}`} className="hobby-card">
      <img
        src={hobby.image}
        alt={hobby.title}
        className={`hobby-image hobby-image-${hobby.objectPosition || "middle"}`}
      />
    </Link>
  );
};

export default HobbyCard;
