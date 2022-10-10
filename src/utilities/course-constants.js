export const terms = { F: 'Fall', W: 'Winter', S: 'Spring' };

export const getCourseTerm = (course) => terms[course.term];

export const getCourseNumber = (course) => course.number;
