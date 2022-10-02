import { useEffect, useState } from 'react';
import Banner from './components/Banner/Banner';
import CourseList from './components/CourseList/CourseList';
import TermFilter from './components/TermFilter/TermFilter';
import { useJsonQuery } from './utilities/fetch';

const App = () => {
  const [data, isLoading, error] = useJsonQuery(
    'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'
  );

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div style={{ margin: '2rem' }}>
      <Banner title={data.title} />
      <CourseList courses={data.courses} />
    </div>
  );
};

export default App;
