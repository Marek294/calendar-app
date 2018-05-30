import React from "react";
import Header from "./Header/CalendarHeader";
import Body from "./Body/CalendarBody";
import "./Calendar.css";

const Calendar = () => {
  return (
    <div className="calendar">
      <Header />
      <Body />
    </div>
  );
};

export default Calendar;
