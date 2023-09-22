import React from 'react';
import './Page1.css';

const TwoButtons: React.FC = () => {
  const handleButtonClick = (buttonName: string) => {
    console.log(`Button "${buttonName}" clicked!`);
  };

  return (
    <div>
      <img className="logo" src="snapcat.png" />

      <div className="button-container">
        <button className="button" onClick={() => handleButtonClick('Button 1')}>login</button>
        <button className="button"onClick={() => handleButtonClick('Button 2')}>register</button>
      </div>
    </div>
  );
};

export default TwoButtons;
