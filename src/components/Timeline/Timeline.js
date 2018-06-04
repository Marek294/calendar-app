import React from "react";
import "./Timeline.css";

const Timeline = props => {
  return (
    <div className="timeline" style={{ top: [props.top, "px"].join("") }} />
  );
};

export default Timeline;
