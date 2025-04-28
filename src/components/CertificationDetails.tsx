import { useParams, useNavigate } from "react-router-dom";
import certifications from "../data/certifications";
import '../styles/CertificationDetails.css';

function CertificationDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const certification = certifications.find(cert => cert.id === id);

  if (!certification) {
    return <div>Certification not found.</div>;
  }

  return (
    <section className="certification-details-container">
      <div className="certification-details-card">
        <img
          src={certification.thumbnail}
          alt={`${certification.name} thumbnail`}
          className="certification-thumbnail-large"
        />
        <h2>{certification.name}</h2>
        <p><strong>Issuing Authority:</strong> {certification.issuingAuthority}</p>
        <p><strong>Issued:</strong> {certification.issueDate}</p>
        <p><strong>Expires:</strong> {certification.expirationDate}</p>
        <p><strong>Certificate Number:</strong> {certification.certificateNumber}</p>
        <p>{certification.description}</p>
        <a href={certification.link} target="_blank" rel="noopener noreferrer" className="certification-link">
          View Certification
        </a>
        <button onClick={() => navigate(-1)} className="back-button">Back</button>
      </div>
    </section>
  );
}

export default CertificationDetails;
