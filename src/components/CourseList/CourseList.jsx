import React, { useState } from 'react';
import Course from '../Course/Course';
import TermFilter from '../TermFilter/TermFilter';
import './CourseList.css';
import Modal from '../Modal/Modal';
import { getCourseTerm } from '../../utilities/course-constants';

const CourseList = ({ courses }) => {
  const [term, setTerm] = useState('Fall');
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const openSchedule = () => setOpen(true);
  const closeSchedule = () => setOpen(false);
  const termCourses = Object.values(courses).filter(
    (course) => getCourseTerm(course) === term
  );

  return (
    <div>
      <nav className="course-navigator">
        <TermFilter term={term} setTerm={setTerm} />
        <button className="course-planner-button" onClick={openSchedule}>
          Course Plan
        </button>
      </nav>
      <Modal title="Course Plan" open={open} close={closeSchedule}>
        <div
          style={{
            flex: '1 1 auto',
            overflowY: 'auto',
          }}
        >
          {selected.length ? (
            selected.map((course) => (
              <div
                key={course.term.at(0) + course.number}
                style={{
                  padding: '15px 30px',
                  fontSize: '16px',
                  borderBottom: 'solid 1px lightgrey',
                }}
              >
                <div>
                  <b> CS {course.term.at(0) + course.number}: </b>
                  {course.title}
                </div>
                <div>{course.meets}</div>
              </div>
            ))
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20%',
                textAlign: 'center',
              }}
            >
              <b style={{ fontSize: '20px' }}>No courses selected...</b>
              <p style={{ color: 'grey' }}>
                Click on a course to add it to your planner!
              </p>
            </div>
          )}
        </div>
      </Modal>
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
    </div>
  );
};

export default CourseList;
