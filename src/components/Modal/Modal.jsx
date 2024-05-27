import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, seatNumber, onBook }) => {
  const [userName, setUserName] = useState('');

  if (!isOpen) return null;

  const handleBook = () => {
    onBook(seatNumber, userName);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Book Seat {seatNumber}</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleBook}>Book</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
