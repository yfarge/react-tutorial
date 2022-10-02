import React from "react";
import Course from "../Course/Course";
import "./CourseList.css";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {Object.values(courses).map((course, idx) => (
        <Course course={course} key={idx} />
      ))}
    </div>
  );
};

export default CourseList;
