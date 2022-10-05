import Banner from './components/Banner/Banner';
import CourseList from './components/CourseList/CourseList';
import { useJsonQuery } from './utilities/fetch';

const App = () => {
  const [data, isLoading, error] = useJsonQuery(
    'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'
  );

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div
      style={{
        padding: '2rem',
        height: '100%',
        position: 'relative',
      }}
    >
      <Banner title={data.title} />
      <CourseList courses={data.courses} />
    </div>
  );
};

export default App;
