import React from "react";
import { Link } from 'react-router-dom';

interface Course {
  id: string;
  name: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="course-card">
      <h3>{course.name}</h3>
    </Link>
  );
}

export default CourseCard;
