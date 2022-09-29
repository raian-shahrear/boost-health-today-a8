import React from 'react';
import './Activity.css';

const Activity = (props) => {
  const {activity, AddToList} = props;
  const {picture, name, details, age, time} = activity;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure className="px-6 pt-6">
          <img src={picture} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details.length>100 ? details.slice(0, 100) + '...' : details}</p>
          <h4 className='font-semibold'>For Age: {age}</h4>
          <h4 className='font-semibold'>Time Require: {time}min</h4>
          <div className="card-actions">
            <button onClick={()=>AddToList(time)} className="btn bg-teal-600 hover:bg-teal-800 border-none w-full text-base">Add To List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;