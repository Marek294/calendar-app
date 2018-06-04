import React, { Component } from "react";
import Header from "./Header/CalendarHeader";
import Body from "./Body/CalendarBody";
import Modal from "../Modal/Modal";
import "./Calendar.css";

class Calendar extends Component {
  state = {
    isModalVisible: false
  };

  handleShowModal = () =>
    this.setState({
      isModalVisible: true
    });

  handleHideModal = () =>
    this.setState({
      isModalVisible: false
    });

  render() {
    const { isModalVisible } = this.state;
    return (
      <div className="calendar">
        <Header handleShowModal={this.handleShowModal} />
        <Body />
        <Modal
          handleHideModal={this.handleHideModal}
          isModalVisible={isModalVisible}
        />
      </div>
    );
  }
}

export default Calendar;
