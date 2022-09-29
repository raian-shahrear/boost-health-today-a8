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

      <div className='mt-8 mb-16 lg:mt-0 lg:mb-0 flex justify-between lg:block'>
        <div className='lg:my-8'>
          <h2 className='text-xl font-semibold mb-4'>Add A Break</h2>
          <div className='bg-slate-100 p-6 rounded-lg flex flex-wrap justify-between gap-3 w-1/2 lg:w-full'>
            <button className='btn bg-white text-black border-none rounded-full lowercase text-base hover:bg-teal-800 hover:text-white '>10min</button>
            <button className='btn bg-white text-black border-none rounded-full lowercase text-base hover:bg-teal-800 hover:text-white'>20min</button>
            <button className='btn bg-white text-black border-none rounded-full lowercase text-base hover:bg-teal-800 hover:text-white'>30min</button>
            <button className='btn bg-white text-black border-none rounded-full lowercase text-base hover:bg-teal-800 hover:text-white'>40min</button>
            <button className='btn bg-white text-black border-none rounded-full lowercase text-base hover:bg-teal-800 hover:text-white'>50min</button>
            <button className='btn bg-white text-black border-none rounded-full lowercase text-base hover:bg-teal-800 hover:text-white'>60min</button>
          </div>
        </div>
        <div className='lg:mb-16 w-1/2 lg:w-full'>
          <h2 className='text-xl font-semibold mb-4'>Exercise Details</h2>
          <div className='bg-slate-100 p-6 mb-4 rounded-lg flex flex-wrap justify-between'>
            <h3 className='text-lg font-semibold'>Exercise time</h3>
            <h3 className='text-lg font-semibold text-slate-500'><span>0</span> minutes</h3>
          </div>
          <div className='bg-slate-100 p-6 rounded-lg flex flex-wrap justify-between'>
            <h3 className='text-lg font-semibold'>Break time</h3>
            <h3 className='text-lg font-semibold text-slate-500'><span>0</span> minutes</h3>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <button className='btn bg-teal-600 hover:bg-teal-800 border-none w-1/2 lg:w-full text-base'>
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default ExerciseDetails;