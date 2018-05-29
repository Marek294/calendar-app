import React, { Component } from "react";
import Header from "./Header/CalendarHeader";
import Body from "./Body/CalendarBody";
import "./Calendar.css";

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <Header />
        <Body />
      </div>
    );
  }
}

export default Calendar;
