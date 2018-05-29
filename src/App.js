import React, { Component } from "react";
import Calendar from "./components/Calendar/Calendar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header__title">Calendar App</h1>
        </header>
        <Calendar />
      </div>
    );
  }
}

export default App;
