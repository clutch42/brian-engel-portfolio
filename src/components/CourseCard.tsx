import React from "react";

interface Course {
  name: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>
    </div>
  );
}

export default CourseCard;
