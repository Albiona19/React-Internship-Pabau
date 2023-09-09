import React from 'react';

function Footer({ handleBackClick }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      </div>
        <div className="footer-text">
          Not sure consultation type? Please call 02037959063, Powered by Pabau
        </div>
    </footer>
  );
}

export default Footer;
