import React from "react";
import Backdrop from "./Backdrop/Backdrop";
import AddEvent from "./AddEvent/AddEvent";

import "./Modal.css";

const Modal = props => {
  const { hideModal, showModal } = props;
  return showModal ? (
    <div className="modal">
      <Backdrop hideModal={hideModal} />
      <AddEvent hideModal={hideModal} />
    </div>
  ) : null;
};

export default Modal;
