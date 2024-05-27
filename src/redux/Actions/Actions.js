// src/redux/actions.js
import { bookSeat, setSeats } from '../Reducer.js/Reducer';

export const bookSeatAction = (seatData) => async (dispatch) => {
  try {
    dispatch(bookSeat(seatData));
  } catch (error) {
    console.error('Failed to book seat:', error);
  }
};

export const fetchSeats = (date) => async (dispatch) => {
  try {
    // Normally you would fetch from a server
    const storedSeats = JSON.parse(localStorage.getItem('seats')) || {};
    dispatch(setSeats(storedSeats));
  } catch (error) {
    console.error('Failed to fetch seats:', error);
  }
};
