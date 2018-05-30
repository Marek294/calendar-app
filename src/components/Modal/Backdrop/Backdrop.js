import React from "react";
import "./Backdrop.css";

const Backdrop = props => {
  const { hideModal } = props;
  return <div className="backdrop" onClick={hideModal} />;
};

export default Backdrop;
