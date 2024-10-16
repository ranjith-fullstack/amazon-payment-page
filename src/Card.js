import React, { useState } from 'react';
import './Card.css'; // Import CSS file for styling

const Card = () => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Start with popup closed

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send data wherever it's needed
    console.log("Form submitted with value: ", inputValue);
    // For demonstration, clearing input value after submission
    setInputValue('');
    // Close the popup after submission
    handleClose();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open Popup</button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-header">
              <h2>Popup</h2>
              <button className="close-button" onClick={handleClose}>X</button>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                Input:
                <input type="text" value={inputValue} onChange={handleChange} />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
