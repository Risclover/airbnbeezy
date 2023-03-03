import React, { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const MyContainer = ({ className, children }) => {
    return (
      <div>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const weeks = [
    { start: new Date(2 / 20 / 23), end: new Date(2 / 23 / 23) },
    { start: new Date(2 / 24 / 23), end: new Date(2 / 26 / 23) },
  ];

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      calendarContainer={MyContainer}
      excludeDateIntervals={weeks}
      placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
      shouldCloseOnSelect={false}
      monthsShown={2}
    />
  );
}

export default Calendar;
