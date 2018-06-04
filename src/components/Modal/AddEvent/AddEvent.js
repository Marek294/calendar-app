import React, { Component } from "react";
import "./AddEvent.css";

class AddEvent extends Component {
  state = {
    doctor: {
      account_id: 7,
      id: 1,
      title: "Blue Walker"
    },
    patient: {
      salutation: "",
      firstname: "",
      lastname: "",
      gender: 0
    },
    start_hour: null,
    day_number: null
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  handleChangeName = e =>
    this.setState({
      patient: {
        ...this.state.patient,
        [e.target.name]: e.target.value
      }
    });

  handleChangeGender = e =>
    this.setState({
      patient: {
        ...this.state.patient,
        salutation: e.target.value === 0 ? "Mrs." : "Mr.",
        [e.target.name]: parseInt(e.target.value, 10)
      }
    });

  handleChangeSelect = e =>
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10)
    });

  render() {
    const {
      patient: { firstname, lastname, gender }
    } = this.state;

    return (
      <div className="addEvent">
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
                />
              </div>
              <div className="inputDiv">
                <label>Nazwisko:</label> <br />
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={this.handleChangeName}
                />
              </div>
              <div className="inputDiv">
                <label>Płeć:</label> <br />
                <select name="gender" onChange={this.handleChangeGender}>
                  {["Kobieta", "Mężczyzna"].map((text, value) => (
                    <option value={value} selected={value === gender}>
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
                <select name="day_number" onChange={this.handleChangeSelect}>
                  {[
                    "Mo 9.11",
                    "Di 10.11",
                    "Mi 11.11",
                    "Do 12.11",
                    "Fr 13.11",
                    "Sa 14.11",
                    "So 15.11"
                  ].map((text, day_number) => (
                    <option value={day_number + 1}>{text}</option>
                  ))}
                </select>
              </div>
              <div className="inputDiv">
                <label>Godzina:</label> <br />
                <select name="start_hour" onChange={this.handleChangeSelect}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    start_hour => (
                      <option value={start_hour}>{8 + start_hour}:00</option>
                    )
                  )}
                </select>
              </div>
            </fieldset>
          </div>
          <button type="submit" className="form__submit">
            <p>Zapisz</p>
          </button>
        </form>
      </div>
    );
  }
}

export default AddEvent;
