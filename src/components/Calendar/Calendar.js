import React, { Component } from "react";
import Header from "./Header/CalendarHeader";
import Body from "./Body/CalendarBody";
import "./Calendar.css";

class Calendar extends Component {
  state = {
    calendarData: [
      {
        id: 1,
        doctor: {
          account_id: 7,
          id: 1,
          title: "Blue Walker"
        },
        patient: {
          id: 2,
          salutation: "Mrs.",
          firstname: "Anna",
          lastname: "A.",
          gender: 0,
          notify_email: false,
          notify_sms: false,
          language: "de"
        },
        start_time: "2015-11-11 09:00:00",
        end_time: "2015-11-11 10:00:00",
        start_hour: 0,
        day_number: 1
      },
      {
        id: 2,
        doctor: {
          account_id: 7,
          id: 1,
          title: "Blue Walker"
        },
        patient: {
          id: 2,
          salutation: "Mr.",
          firstname: "Test",
          lastname: "B.",
          gender: 0,
          notify_email: false,
          notify_sms: false,
          language: "de"
        },
        start_time: "2015-11-11 09:00:00",
        end_time: "2015-11-11 10:00:00",
        start_hour: 1,
        day_number: 2
      }
    ],
    draggedEvent: null
  };

  isEventExistOnDroppedCell = (start_hour, day_number, calendarData) =>
    !!calendarData.find(
      item => item.start_hour === start_hour && item.day_number === day_number
    );

  handleDragEventStart = event => e =>
    this.setState({
      draggedEvent: event
    });

  handleDropEvent = start_hour => day_number => e => {
    e.preventDefault();
    const { draggedEvent, calendarData } = this.state;

    if (this.isEventExistOnDroppedCell(start_hour, day_number, calendarData))
      return;

    let newCalendarData = [...calendarData];

    const element = newCalendarData.find(item => item.id === draggedEvent.id);
    const index = newCalendarData.findIndex(
      item => item.id === draggedEvent.id
    );

    element.start_hour = start_hour;
    element.day_number = day_number;

    newCalendarData = [
      ...newCalendarData.slice(0, index),
      element,
      ...newCalendarData.slice(index + 1)
    ];

    this.setState({
      calendarData: newCalendarData
    });
  };

  render() {
    const { calendarData } = this.state;

    return (
      <div className="calendar">
        <Header />
        <Body
          calendarData={calendarData}
          handleDragEventStart={this.handleDragEventStart}
          handleDropEvent={this.handleDropEvent}
        />
      </div>
    );
  }
}

export default Calendar;
