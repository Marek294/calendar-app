import React from "react";
import Backdrop from "./Backdrop/Backdrop";
import AddEvent from "./AddEvent/AddEvent";

import "./Modal.css";

const Modal = props => {
  const { handleHideModal, isModalVisible } = props;
  return isModalVisible ? (
    <div className="modal">
      <Backdrop handleHideModal={handleHideModal} />
      <AddEvent handleHideModal={handleHideModal} />
    </div>
  ) : null;
};

export default Modal;
