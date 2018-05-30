import React, { Component } from "react";
import Header from "./Header/CalendarHeader";
import Body from "./Body/CalendarBody";
import Modal from "../Modal/Modal";
import "./Calendar.css";

class Calendar extends Component {
  state = {
    showModal: false
  };

  showModal = () =>
    this.setState({
      showModal: true
    });

  hideModal = () =>
    this.setState({
      showModal: false
    });

  render() {
    const { showModal } = this.state;
    return (
      <div className="calendar">
        <Header showModal={this.showModal} />
        <Body />
        <Modal hideModal={this.hideModal} showModal={showModal} />
      </div>
    );
  }
}

export default Calendar;
