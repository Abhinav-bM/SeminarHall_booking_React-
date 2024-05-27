export const bookSeat = (seatNumber, userName) => ({
    type: 'BOOK_SEAT',
    payload: { seatNumber, userName },
  });
  