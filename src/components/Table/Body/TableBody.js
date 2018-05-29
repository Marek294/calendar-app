import React from "react";
import TableRow from "./Row/TableRow";

const filterData = (calendarData, start_hour) =>
  calendarData.filter(item => item.start_hour === start_hour);

const TableBody = props => {
  const { calendarData, handleDragEventStart, handleDropEvent } = props;
  return (
    <tbody>
      {[
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00"
      ].map((time, start_hour) => (
        <TableRow
          key={start_hour}
          start_hour={start_hour}
          time={time}
          events={filterData(calendarData, start_hour)}
          handleDragEventStart={handleDragEventStart}
          handleDropEvent={handleDropEvent(start_hour)}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
