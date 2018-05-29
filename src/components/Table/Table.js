import React, { Component } from "react";
import Header from "./Header/TableHeader";
import Body from "./Body/TableBody";
import "./Table.css";

class Table extends Component {
  render() {
    const { calendarData } = this.props;
    return (
      <table className="table">
        <Header />
        <Body calendarData={calendarData} />
      </table>
    );
  }
}

export default Table;
