import React, { Component } from "react";
import { connect } from "react-redux";
import TableRow from "./Row/TableRow";
import { changeEventPosition } from "../../../actions/events";

class TableBody extends Component {
  state = {
    draggedEvent: null
  };

  filterData = (events, start_hour) =>
    events.filter(event => event.start_hour === start_hour);

  isEventExistOnDroppedCell = (start_hour, day_number, events) =>
    !!events.find(
      event =>
        event.start_hour === start_hour && event.day_number === day_number
    );

  handleDragEventStart = draggedEvent => e =>
    this.setState({
      draggedEvent
    });

  handleDropEvent = start_hour => day_number => e => {
    e.preventDefault();
    const { draggedEvent } = this.state;
    const { events } = this.props;

    if (this.isEventExistOnDroppedCell(start_hour, day_number, events)) return;

    this.props.changeEventPosition(draggedEvent, start_hour, day_number);
  };

  render() {
    const { events } = this.props;

    return (
      <tbody>
        {[
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00"
        ].map((time, start_hour) => (
          <TableRow
            key={start_hour}
            start_hour={start_hour}
            time={time}
            events={this.filterData(events, start_hour)}
            handleDragEventStart={this.handleDragEventStart}
            handleDropEvent={this.handleDropEvent(start_hour)}
          />
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => ({
  changeEventPosition: (draggedEvent, start_hour, day_number) =>
    dispatch(changeEventPosition(draggedEvent, start_hour, day_number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableBody);
