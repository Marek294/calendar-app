import React from "react";
import "./Timeline.css";

const Timeline = props => {
  const { top, width } = props;
  return (
    <div
      className="timeline"
      style={{ top: `${top}px`, width: `${width}px` }}
    />
  );
};

export default Timeline;
