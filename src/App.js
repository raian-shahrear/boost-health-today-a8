import { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Activity from './Components/Activity/Activity';
import ExerciseDetails from './Components/ExerciseDetails/ExerciseDetails';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    fetch('activities.json')
    .then(res => res.json())
    .then(data => setActivities(data))
  }, [])

  return (
    <div className='App'>
      <div className='flex flex-col-reverse lg:grid grid-cols-5'>
        <div className="activities-container lg:col-span-4">
          <h1 className='text-4xl font-bold text-teal-600 my-16 lg:my-24 flex items-center gap-2'>
            <FontAwesomeIcon icon={faDumbbell} />
            <p>Boost Health Today</p>
            </h1>
          <div className='my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              activities.map(activity => <Activity key={activity.id} activity={activity}></Activity>)
            }
          </div>
        </div>
        <div className="exercise-details-container">
          <ExerciseDetails></ExerciseDetails>
        </div>
      </div>
    </div>
  );
}

export default App;
