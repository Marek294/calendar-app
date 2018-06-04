import React from "react";
import Header from "./Header/TableHeader";
import Body from "./Body/TableBody";
import "./Table.css";

const Table = () => {
  return (
    <table className="table">
      <Header />
      <Body />
    </table>
  );
};

export default Table;
