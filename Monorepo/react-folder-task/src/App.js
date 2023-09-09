import React, { useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import './index.css';

function App() {
  const [currentStep, setCurrentStep] = useState('1/2');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setCurrentStep('2/2');
  };

  const handleBackClick = () => {
    setSelectedOption(null);
    setCurrentStep('1/2');
  };

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div className="container">
      <Header currentStep={currentStep} />
      {currentStep === '1/2' ? (
        <Body options={options} handleOptionClick={handleOptionClick} />
      ) : (
        selectedOption && (
          <div className="body">
            <h2>Selected Option:</h2>
            <p>{selectedOption}</p>
          </div>
        )
      )}
      {currentStep === '2/2' && (
        <Footer handleBackClick={handleBackClick} />
      )}
    </div>
  );
}

export default App;
