import React from 'react';
import './ExerciseDetails.css';
import profile from '../../profile.jpg';

const ExerciseDetails = () => {
  return (
    <div className='sticky top-0'>
      <div className='flex justify-between lg:block'>
        <div className='flex items-center gap-4 lg:mb-8'>
          <img className='rounded-3xl w-16' src={profile} alt="profile-pic" />
          <div>
            <h3 className='text-xl font-semibold'>Junayid Saki</h3>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className='flex flex-wrap justify-between bg-slate-100 p-6 rounded-lg w-2/5 lg:w-full'>
          <div>
            <h5><span className='text-3xl font-semibold'>78</span><span className='text-slate-500'>kg</span></h5>
            <p className='text-lg text-slate-700'>Weight</p>
          </div>
          <div>
            <h5><span className='text-3xl font-semibold'>5.9</span><span className='text-slate-500'>inch</span></h5>
            <p className='text-lg text-slate-700'>Height</p>
          </div>
          <div>
            <h5><span className='text-3xl font-semibold'>28</span><span className='text-slate-500'>yrs</span></h5>
            <p className='text-lg text-slate-700'>Age</p>
          </div>
        </div>  
      </div>

      
    </div>
  );
};

export default ExerciseDetails;