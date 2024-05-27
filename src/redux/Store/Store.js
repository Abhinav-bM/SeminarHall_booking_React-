import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../Reducer.js/Reducer';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export default store;
