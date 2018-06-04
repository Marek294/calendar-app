import React from "react";
import "./CalendarHeader.css";

const CalendarHeader = props => {
  const { handleShowModal } = props;
  return (
    <div className="calendarHeader">
      <div className="calendarHeader__upperContent">
        <h2 className="calendarHeader__title">Terminplaner</h2>
        <button className="calendarHeader__addEvent" onClick={handleShowModal}>
          <span className="addEvent__content">+</span>
        </button>
      </div>
      <div className="calendarHeader__control">
        <span className="control__prev">&lt;</span>
        <span className="control__date">9 &mdash; 15. November 2015 </span>
        <span className="conrol__next">&gt;</span>
      </div>
    </div>
  );
};

export default CalendarHeader;
