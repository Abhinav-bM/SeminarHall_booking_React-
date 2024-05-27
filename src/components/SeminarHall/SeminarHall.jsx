import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Seat from '../Seat/Seat';
import Modal from '../Modal/Modal';
import { bookSeat } from '../../redux/Actions/Actions';
import './SeminarHall.css';

const SeminarHall = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const bookings = useSelector((state) => state.booking.bookings);
  const dispatch = useDispatch();

  const handleSeatClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const handleBook = (seatNumber, userName) => {
    dispatch(bookSeat(seatNumber, userName));
  };

  return (
    <div className="seminar-hall">
      {Array.from({ length: 20 }, (_, i) => (
        <Seat
          key={i}
          seatNumber={i + 1}
          isBooked={!!bookings[i + 1]}
          onClick={handleSeatClick}
        />
      ))}
      <Modal
        isOpen={!!selectedSeat}
        onClose={() => setSelectedSeat(null)}
        seatNumber={selectedSeat}
        onBook={handleBook}
      />
    </div>
  );
};

export default SeminarHall;
