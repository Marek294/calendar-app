import React from "react";
import "./Backdrop.css";

const Backdrop = props => {
  const { handleHideModal } = props;
  return <div className="backdrop" onClick={handleHideModal} />;
};

export default Backdrop;
