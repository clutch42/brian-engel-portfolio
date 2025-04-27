import React from "react";
import { Link } from "react-router-dom";
import { Certification } from "../types/Certification";  // Adjust the path to your types if needed

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <Link to={`/certifications/${certification.id}`} className="certification-card">
      <div className="certification-card-content">
        <img 
          src={certification.thumbnail} 
          alt={certification.name} 
          className="certification-thumbnail" 
        />
        <h3>{certification.name}</h3>
      </div>
    </Link>
  );
};

export default CertificationCard;
