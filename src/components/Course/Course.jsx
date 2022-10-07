import React from 'react';
import { useState } from 'react';
import CourseForm from '../CourseForm/CourseForm';
import './Course.css';

const Course = ({ course, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);
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
