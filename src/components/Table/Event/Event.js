import React from "react";
import "./Event.css";

const getHour = hour => {
  const timeHour = hour + 8;
  const from = timeHour >= 10 ? `${timeHour}:00` : `0${timeHour}:00`;
  const to = timeHour + 1 >= 10 ? `${timeHour + 1}:00` : `0${timeHour + 1}:00`;

  return `${from} - ${to}`;
};

const Event = props => {
  const { patient, start_hour, handleDragEventStart } = props;

  return (
    <a href="" draggable onDragStart={handleDragEventStart}>
      <div className="event past">
        <p className="hours">{getHour(start_hour)}</p>
        <p className="description">
          {patient.salutation} {patient.firstname} {patient.lastname}
        </p>
        <span className="icon" />
      </div>
    </a>
  );
};

export default Event;
