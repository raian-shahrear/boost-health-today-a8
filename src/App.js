import { useEffect, useState } from 'react';
import './App.css';
import Activity from './Components/Activity/Activity';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    fetch('activities.json')
    .then(res => res.json())
    .then(data => setActivities(data))
  }, [])

  return (
    <div className='App'>
      <div className='main-container'>
        <div className="activities-container">
          <h1 className='text-4xl'>Boost Health Today</h1>
          <div>
            {
              activities.map(activity => <Activity key={activity.id} activity={activity}></Activity>)
            }
          </div>
        </div>
        <div className="exercise-details-container">
          <h1 className='text-4xl'>hello from exercise details</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
