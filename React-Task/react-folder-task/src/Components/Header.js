import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isMainStep = location.pathname === '/';

  return (
    <header>
      Current Step: {isMainStep ? '1/2' : '2/2'}
    </header>
  );
};

export default Header;
