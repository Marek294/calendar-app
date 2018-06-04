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

  const currentHour = new Date().getHours();

  const eventType =
    currentHour > start_hour + 8
      ? "past"
      : currentHour === start_hour + 8
        ? "present"
        : "future";

  return (
    <a href="" onDragStart={handleDragEventStart}>
      <div className={["event", eventType].join(" ")} draggable>
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
