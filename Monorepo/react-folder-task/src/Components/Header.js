import React from 'react';

function Header({ currentStep }) {
  return (
    <header className="header">
      <h1>Choose Service</h1>
      <div>{currentStep}</div>
    </header>
  );
}

export default Header;
