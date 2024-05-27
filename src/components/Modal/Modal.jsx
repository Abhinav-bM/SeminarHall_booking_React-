// src/components/Modal.jsx
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit, seatNumber, date }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone });
    setName('');
    setPhone('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Book Seat {seatNumber} on {date}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
          <button type="submit">Book</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
