import '../styles/Education.css'
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses';

function Education() {
  return (
    <section className="education-container">
      <div className="education-section">
        <h2>Degree</h2>
        <p>Southern New Hampshire University (SNHU) — Bachelor's Degree in Computer Science</p>
        {/* Display Course Cards in the Degree section */}
        <div className="courses-list">
            {coursesData.map(course => (
                <CourseCard key={course.name} course={course} />
            ))}
        </div>
      </div>

      <div className="education-section">
        <h2>Certifications</h2>
        <ul>
          <li>AWS Certified Cloud Practitioner</li>
          <li>CompTIA A+ </li>
        </ul>
      </div>

      <div className="education-section">
        <h2>Additional Learning</h2>
        <p>Completed courses and projects on Codecademy.com in [Technologies/Topics]</p>
      </div>
    </section>

  )
}
  
  export default Education
  