import React from 'react';
import './QueAns.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

const QueAns = () => {
  return (
    <div className='my-16 p-6'>
      <h2 className='text-3xl font-bold flex items-center gap-2'>
        <FontAwesomeIcon icon={faCircleQuestion} />
        <p>Frequently Asked Question</p>
      </h2>
      <div className='my-8'>
        <h3 className='text-xl font-semibold mb-3'>Q1. How does React Work?</h3>
        <p className='text-base'>React is a Javascript library that mainly deals with user interface (UI). In React, JavaScript XML (JSX) provides syntactic sugar for HTML inside react function that will be converted in JS object by transpiler like Babel.</p>
        <p className='text-base'>React works with Virtual DOM through Diff algorithm. On the first run, both Virtual DOM and Real DOM tree are created. React works on observable patterns, hence, whenever there is any changes in the state, it updates the nodes in the Virtual DOM. Then, React compares Virtual DOM with the Real DOM and updates the changes. This process is called Reconciliation.</p>
      </div>

      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-3'>Q2. What is the difference between Props and State?</h3>
        <div className="overflow-x-auto">
          <table className="table w-full text-black">
            <thead>
              <tr>
                <th></th>
                <th>React State</th>
                <th>Props</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>React state is mutable and its value can be changed as per requirement</td>
                <td>Props are immutable means, content cannot be changed once assigned</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Set by parent component</td>
                <td>Set by event handlers that is completely managed by component itself</td>
              </tr>
              <tr>
                <th>3</th>
                <td>State is local to a component and cannot be used in other components</td>
                <td>Props allows child components to read values from parent component</td>
              </tr>
              <tr>
                <th>4</th>
                <td>State changes are asynchronous</td>
                <td>Props are synchronous and read-only</td>
              </tr>
              <tr>
                <th>5</th>
                <td>State performs in parent component</td>
                <td>State value can be passed through Props to child components as like other values</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className='text-xl font-semibold mb-3'>Q3. What are the other uses of useEffect hook except data loading?</h3>
        <p className='text-base mb-1'>useEffect actually controls the side effect in ReactJS with or without dependency. One of the most common use of useEffect is data loading from fetch, but also there are some important uses of useEffect which are:</p>
        <ol className='list-decimal pl-4'>
          <li>To validating input field.</li>
          <li>To live filtering.</li>
          <li>To trigger animation on new array value.</li>
          <li>To get data from database with dependency.</li>
          <li>To update list on fetched API data update.</li>
        </ol>
      </div>
    </div>
  );
};

export default QueAns;