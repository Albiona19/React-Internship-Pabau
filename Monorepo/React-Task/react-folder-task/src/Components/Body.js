import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <Link to={`/selection/${option}`}>{option}</Link>
        </div>
      ))}
    </div>
  );
};

export default Body;
