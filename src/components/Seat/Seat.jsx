import React from 'react';
import './Seat.css';

const Seat = ({ seatNumber, isBooked, onClick }) => {
  return (
    <div
      className={`seat ${isBooked ? 'booked' : ''}`}
      onClick={() => onClick(seatNumber)}
    >
      {seatNumber}
    </div>
  );
};

export default Seat;
