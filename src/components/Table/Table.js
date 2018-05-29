import React, { Component } from "react";
import Header from "./Header/TableHeader";
import Body from "./Body/TableBody";
import "./Table.css";

class Table extends Component {
  render() {
    return (
      <table className="table">
        <Header />
        <Body />
      </table>
    );
  }
}

export default Table;