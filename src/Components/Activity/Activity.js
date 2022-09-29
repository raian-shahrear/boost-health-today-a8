import React from 'react';
import './Activity.css';

const Activity = (props) => {
  const {activity} = props;
  const {picture, name, details, age, time} = activity;
  return (
    <div>
      <img src={picture} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{details}</p>
        <h4>For Age: {age}</h4>
        <h4>Time require: {time}</h4>
      </div>
    </div>
  );
};

export default Activity;