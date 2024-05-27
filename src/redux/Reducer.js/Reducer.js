// const initialState = {
//     seats: Array(30).fill(null).map((_, index) => ({
//       id: index,
//       booked: false,
//     })),
//   };

//   const seatReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'BOOK_SEAT':
//         return {
//           ...state,
//           seats: state.seats.map(seat =>
//             seat.id === action.payload ? { ...seat, booked: true } : seat
//           ),
//         };
//       default:
//         return state;
//     }
//   };

//   export default seatReducer;

const initialState = {
  bookings: JSON.parse(localStorage.getItem("bookings")) || {},
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_SEAT":
      const newBookings = {
        ...state.bookings,
        [action.payload.seatNumber]: action.payload.userName,
      };
      localStorage.setItem("bookings", JSON.stringify(newBookings));
      return { ...state, bookings: newBookings };
    default:
      return state;
  }
};

export default bookingReducer;
