import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../../../actions/events";
import "./AddEvent.css";

class AddEvent extends Component {
  state = {
    event: {
      doctor: {
        account_id: 7,
        id: 1,
        title: "Blue Walker"
      },
      patient: {
        salutation: "Mrs.",
        firstname: "",
        lastname: "",
        gender: 0
      },
      start_hour: 0,
      day_number: 1
    },
    error: ""
  };

  isValid = newEvent => {
    const { events } = this.props;
    const { start_hour, day_number } = newEvent;

    console.log(
      !events.find(
        event =>
          event.start_hour === start_hour && event.day_number === day_number
      )
    );
    return !events.find(
      event =>
        event.start_hour === start_hour && event.day_number === day_number
    );
  };

  onSubmit = e => {
    e.preventDefault();
    const { addEvent, hideModal, events } = this.props;
    const { event } = this.state;

    const newEvent = { ...event };

    if (this.isValid(newEvent)) {
      newEvent.id = events.length + 1;
      addEvent(newEvent);
      hideModal();
      return;
    } else
      this.setState({
        error: "Termin zajęty"
      });
  };

  handleChangeName = e =>
    this.setState({
      event: {
        ...this.state.event,
        patient: {
          ...this.state.event.patient,
          [e.target.name]: e.target.value
        }
      },
      error: ""
    });

  handleChangeGender = e =>
    this.setState({
      event: {
        ...this.state.event,
        patient: {
          ...this.state.event.patient,
          salutation: e.target.value === 0 ? "Mrs." : "Mr.",
          [e.target.name]: parseInt(e.target.value, 10)
        }
      },
      error: ""
    });

  handleChangeSelect = e =>
    this.setState({
      event: {
        ...this.state.event,
        [e.target.name]: parseInt(e.target.value, 10)
      },
      error: ""
    });

  render() {
    const {
      event: {
        patient: { firstname, lastname, gender },
        day_number,
        start_hour
      },
      error
    } = this.state;

    return (
      <div className="addEvent">
        <h3 className="addEvent__title">Dodaj Wizytę</h3>
        <form onSubmit={this.onSubmit} className="addEvent__form">
          <div className="form__data">
            <fieldset className="form__patientInformation">
              <legend>Informacje pacjenta:</legend>
              <div className="inputDiv">
                <label>Imię:</label> <br />
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={this.handleChangeName}
                  required
                />
              </div>
              <div className="inputDiv">
                <label>Nazwisko:</label> <br />
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={this.handleChangeName}
                  required
                />
              </div>
              <div className="inputDiv">
                <label>Płeć:</label> <br />
                <select
                  name="gender"
                  onChange={this.handleChangeGender}
                  value={gender}
                >
                  {["Kobieta", "Mężczyzna"].map((text, gender) => (
                    <option key={gender} value={gender}>
                      {text}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
            <fieldset className="form__dayAndHour">
              <legend>Wizyta:</legend>
              <div className="inputDiv">
                <label>Dzień:</label> <br />
                <select
                  name="day_number"
                  onChange={this.handleChangeSelect}
                  value={day_number}
                >
                  {[
                    "Mo 9.11",
                    "Di 10.11",
                    "Mi 11.11",
                    "Do 12.11",
                    "Fr 13.11",
                    "Sa 14.11",
                    "So 15.11"
                  ].map((text, day_number) => (
                    <option key={day_number} value={day_number + 1}>
                      {text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputDiv">
                <label>Godzina:</label> <br />
                <select
                  name="start_hour"
                  onChange={this.handleChangeSelect}
                  value={start_hour}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    start_hour => (
                      <option key={start_hour} value={start_hour}>
                        {8 + start_hour}:00
                      </option>
                    )
                  )}
                </select>
              </div>
            </fieldset>
          </div>
          {error ? <p className="error">{error}</p> : null}
          <button type="submit" className="form__submit">
            <p>Zapisz</p>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => ({
  addEvent: newEvent => dispatch(addEvent(newEvent))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent);
