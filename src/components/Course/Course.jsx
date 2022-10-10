import React, { useState } from 'react';
import { hasConflict } from '../../utilities/times';
import CourseForm from '../CourseForm/CourseForm';
import './Course.css';

const Course = ({ course, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);
  const isSelected = selected.includes(course);
  const isDisabled = !isSelected && hasConflict(course, selected);
  const toggle = () =>
    isSelected
      ? setSelected(selected.filter((val) => val != course))
      : setSelected([...selected, course]);

  const style = {
    backgroundColor: isDisabled
      ? 'lightgrey'
      : isSelected
      ? '#B0E5A4'
      : 'white',
  };

  return (
    <div
      className="container"
      onClick={() => !isDisabled && toggle()}
      style={style}
    >
      <h3
        style={{ display: 'flex', justifyContent: 'space-between' }}
        className="course-header"
      >
        {course.term} CS {course.number}
        <button onClick={openForm}>Edit</button>
      </h3>
      <p className="course-title">{course.title}</p>
      <p className="course-meets">{course.meets}</p>
      <CourseForm course={course} open={open} close={closeForm} />
    </div>
  );
};

export default Course;
