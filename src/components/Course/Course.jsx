import React from 'react';
import './Course.css';

const Course = ({ course, selected, setSelected }) => {
  const isSelected = selected.some((element) => element === course);
  const toggle = () =>
    isSelected
      ? setSelected(selected.filter((val) => val != course))
      : setSelected([...selected, course]);

  return (
    <div
      className="container"
      onClick={toggle}
      style={isSelected ? { backgroundColor: 'lightgreen' } : {}}
    >
      <h3 className="course-header">
        {course.term} CS {course.number}
      </h3>
      <p className="course-title">{course.title}</p>
      <p className="course-meets">{course.meets}</p>
    </div>
  );
};

export default Course;
