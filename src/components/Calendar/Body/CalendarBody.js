import React from "react";
import Table from "../../Table/Table";
import "./CalendarBody.css";

const CalendarBody = props => {
  const { calendarData } = props;
  return (
    <div className="calendarBody">
      <Table calendarData={calendarData} />
    </div>
  );
};

export default CalendarBody;
