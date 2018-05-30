import React from "react";
import Event from "../../Event/Event";

import "./TableRow.css";

const dragOverCell = e => e.preventDefault();

const drawCell = (day_number, handleDropEvent, displayEvent) => {
  if (day_number === 3)
    return (
      <td
        key={day_number}
        className="bodyCell row__active"
        onDragOver={dragOverCell}
        onDrop={handleDropEvent(day_number)}
      >
        {displayEvent}
      </td>
    );
  else
    return (
      <td
        className="bodyCell"
        key={day_number}
        onDragOver={dragOverCell}
        onDrop={handleDropEvent(day_number)}
      >
        {displayEvent}
      </td>
    );
};

const TableRow = props => {
  const { time, events, handleDragEventStart, handleDropEvent } = props;
  return (
    <tr className="row">
      <td className="row__hour">{time}</td>

      {[1, 2, 3, 4, 5, 6, 7].map(day_number => {
        const event = events.find(event => event.day_number === day_number);

        const displayEvent = event ? (
          <Event
            start_hour={event.start_hour}
            patient={event.patient}
            handleDragEventStart={handleDragEventStart(event)}
          />
        ) : null;

        return drawCell(day_number, handleDropEvent, displayEvent);
      })}
    </tr>
  );
};

export default TableRow;
