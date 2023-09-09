import React from 'react';

function Footer({ handleBackClick }) {
  return (
    <footer className="footer">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
    </footer>
  );
}

export default Footer;
