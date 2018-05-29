import React from "react";
import Table from "../../Table/Table";
import "./CalendarBody.css";

const CalendarBody = props => {
  const { calendarData, handleDragEventStart, handleDropEvent } = props;
  return (
    <div className="calendarBody">
      <Table
        calendarData={calendarData}
        handleDragEventStart={handleDragEventStart}
        handleDropEvent={handleDropEvent}
      />
    </div>
  );
};

export default CalendarBody;
