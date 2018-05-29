import React from "react";
import "./CalendarHeader.css";

const CalendarHeader = () => {
  return (
    <div className="calendarHeader">
      <h2 className="calendarHeader__title">Terminplaner</h2>
      <div className="calendarHeader__control">
        <span className="control__prev">&lt;</span>
        <span className="control__date">9 &mdash; 15. November 2015 </span>
        <span className="conrol__next">&gt;</span>
      </div>
      <span className="calendarHeader__month" />
      <span className="calendarHeader__slider" />
    </div>
  );
};

export default CalendarHeader;
