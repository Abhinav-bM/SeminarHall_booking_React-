// src/redux/reducers.js
import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from '../localStorage/LocalStorage';

const initialState = loadState() || {};

const seatsSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    bookSeat: (state, action) => {
      const { date, seatNumber, name, phone } = action.payload;
      if (!state[date]) {
        state[date] = {};
      }
      state[date][seatNumber] = { name, phone };
    },
    setSeats: (state, action) => {
      return action.payload;
    },
  },
});

export const { bookSeat, setSeats } = seatsSlice.actions;

export default seatsSlice.reducer;
