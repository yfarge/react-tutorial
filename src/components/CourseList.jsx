import React from "react";

const CourseList = ({ courses }) => {
  return Object.values(courses).map((course) => (
    <p key={course.term + course.number}>
      {course.term} CS {course.number}: {course.title}
    </p>
  ));
};

export default CourseList;
