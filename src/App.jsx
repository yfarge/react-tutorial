import Banner from './components/Banner/Banner';
import CourseList from './components/CourseList/CourseList';
import { useDbData } from './utilities/firebase';
import { mapValues } from './utilities/schedule-helpers';
import { addCourseTimes } from './utilities/times';

const App = () => {
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  const processedData = mapValues(addCourseTimes, data.courses);
  console.log(processedData);

  return (
    <div
      style={{
        padding: '2rem',
        height: '100%',
        position: 'relative',
      }}
    >
      <Banner title={data.title} />
      <CourseList courses={processedData} />
    </div>
  );
};

export default App;
