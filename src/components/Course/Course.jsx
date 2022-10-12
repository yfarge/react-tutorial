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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
          onClick={openForm}
          id="course-edit"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </h3>
      <p className="course-title">{course.title}</p>
      <p className="course-meets">{course.meets}</p>
      <CourseForm course={course} open={open} close={closeForm} />
    </div>
  );
};

export default Course;
