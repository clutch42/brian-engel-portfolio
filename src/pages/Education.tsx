import '../styles/Education.css'
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses';
import CertificationCard from '../components/CertificationCard';  // Adjust path if needed
import certifications from '../data/certifications';  // Adjust based on where you store certifications data
import additionalLearningData from '../data/additionalLearning';
import { Link } from "react-router-dom";


function Education() {
  return (
    <section className="education-container">
      <div className="education-section">
        <h2>Degree</h2>
        <p>Southern New Hampshire University (SNHU) — Bachelor's Degree in Computer Science</p>
        {/* Display Course Cards in the Degree section */}
        <div className="courses-list">
            {coursesData.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
      </div>

      <div className="education-section">
        <h2>Certifications</h2>
        <div className="certifications-list">
          {certifications.map(certification => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>

      <div className="education-section">
        <h2>Additional Learning</h2>
        {/* List of learning platforms */}
        {additionalLearningData.map((source) => (
          <div key={source.id} className="learning-source-section">
            <h3>{source.name}</h3>
            <p>{source.description}</p>

            <div className="topics-list">
              {source.topics.map((topic) => (
                <Link to={`/learning/${topic.id}`} key={topic.id} className="learning-card">
                  <div className="learning-card-content">
                    <h4>{topic.name}</h4>
                    <p>{topic.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}
  
  export default Education
  