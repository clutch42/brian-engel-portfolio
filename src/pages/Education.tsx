import '../styles/Education.css'
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses';
import CertificationCard from '../components/CertificationCard';  // Adjust path if needed
import certifications from '../data/certifications';  // Adjust based on where you store certifications data
import LearningSourceCard from '../components/LearningSourceCard';
import additionalLearning from '../data/additionalLearning';



function Education() {
  return (
    <section className="education-container">
      <div className="education-section">
        <h2>Degree</h2>
        <div className="degree-details">
          <img
            src="/images/snhu-logo.png"
            alt="SNHU Logo"
            className="school-logo"
          />
          <div className="degree-text">
            <p className="degree-title">B.S. in Computer Science</p>
            <p className="school-name">Southern New Hampshire University</p>
            <p className="honors">
              <em>Summa Cum Laude</em> — <strong>GPA: 4.0</strong>
            </p>
          </div>
        </div>
        
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
        <div className="additional-learning-list">
          {additionalLearning.map(source => (
            <LearningSourceCard key={source.id} source={source} />
          ))}
        </div>
      </div>

    </section>

  )
}
  
  export default Education
  