import React from 'react';

function Body({ options, handleOptionClick }) {
  return (
    <div className="body">
      <h2>Select an Option:</h2>
      <ul className="options">
        {options.map((option, index) => (
          <li
            key={index}
            className="option"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;

