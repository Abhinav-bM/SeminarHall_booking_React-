// src/components/DatePicker.jsx
import React, { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    onDateChange(format(date, 'yyyy-MM-dd'));
  };

  return <DatePicker selected={selectedDate} onChange={handleChange} />;
};

export default CustomDatePicker;
