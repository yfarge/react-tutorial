import React from 'react';
import './Course.css';

const Course = ({ course }) => {
  return (
    <div className="container">
      <h3 className="course-header">
        {course.term} CS {course.number}
      </h3>
      <p className="course-title">{course.title}</p>
      <p className="course-meets">{course.meets}</p>
    </div>
  );
};

export default Course;
