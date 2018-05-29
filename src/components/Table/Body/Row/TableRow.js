import React from "react";
import Event from "../../Event/Event";

import "./TableRow.css";

const TableRow = props => {
  const { time, events } = props;
  console.log(events);
  return (
    <tr className="row">
      <td className="row__hour">{time}</td>

      {[1, 2, 3, 4, 5, 6, 7].map(day_number => {
        const event = events.find(event => event.day_number === day_number);

        const displayEvent = event ? <Event event={event} /> : null;

        if (day_number === 3)
          return <td key={day_number} className="bodyCell row__active" />;
        return (
          <td className="bodyCell" key={day_number}>
            {displayEvent}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
