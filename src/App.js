// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store/Store';
import SeminarHall from './components/SeminarHall/SeminarHall.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Seminar Hall Booking</h1>
        <SeminarHall />
      </div>
    </Provider>
  );
};

export default App;
