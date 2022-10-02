import React, { useState } from 'react';
import Course from '../Course/Course';
import TermFilter from '../TermFilter/TermFilter';
import './CourseList.css';

const CourseList = ({ courses }) => {
  const [term, setTerm] = useState('Fall');
  const [selected, setSelected] = useState([]);
  const termCourses = Object.values(courses).filter(
    (course) => course.term === term
  );

  return (
    <>
      <TermFilter term={term} setTerm={setTerm} />
      <div className="course-list">
        {Object.values(termCourses).map((course, idx) => (
          <Course
            key={idx}
            course={course}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </>
  );
};

export default CourseList;
