import React, { Component } from "react";
import Table from "../../Table/Table";
import Timeline from "../../Timeline/Timeline";
import "./CalendarBody.css";

class CalendarBody extends Component {
  state = {
    top: 30,
    width: 0
  };

  componentDidMount() {
    const { calendarBody } = this.refs;
    const currentTime = new Date();
    const headerHeight = 30;

    const timeObject = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes()
    };

    const rowHeight = (calendarBody.scrollHeight - headerHeight) / 13;

    const mapHourTop = (timeObject.hours - 8) * rowHeight;
    const mapMinutesTop = (timeObject.minutes * rowHeight) / 60;

    const top = mapHourTop + headerHeight + mapMinutesTop;
    const width = calendarBody.scrollWidth;

    this.setState({
      top,
      width
    });
  }

  render() {
    const { top, width } = this.state;
    return (
      <div className="calendarBody" ref="calendarBody">
        <Table />
        <Timeline top={top} width={width} />
      </div>
    );
  }
}

export default CalendarBody;
