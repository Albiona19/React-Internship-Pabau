import React from 'react';

function Header({ currentStep }) {
  return (
    <header className="header">
      <h1>My App</h1>
      <div>{currentStep}</div>
    </header>
  );
}

export default Header;
