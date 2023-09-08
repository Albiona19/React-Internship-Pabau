import React from 'react';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <footer>
      <button onClick={handleBackClick}>Back</button>
    </footer>
  );
};

export default Footer;
