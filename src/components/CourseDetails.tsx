import { useParams, useNavigate } from 'react-router-dom';
import courses from '../data/courses';
import '../styles/CourseDetails.css';

function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="course-detail">
      <h2>{course.id}: {course.name}</h2>
      <p><strong>Description:</strong> {course.description}</p>
      <div className="skills-and-github">
        <div>
          <strong>Skills:</strong>
          <ul>
            {course.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        {/* Add the GitHub Button if a GitHub link exists */}
        {course.github && (
          <div className="github-button-wrapper">
            <a href={course.github} target="_blank" rel="noopener noreferrer">
              <button>View on GitHub</button>
            </a>
          </div>
        )}
      </div>
      <div className="back-button-wrapper">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default CourseDetail;
