import React from "react";
import "./TableHeader.css";

const TableHeader = () => {
  return (
    <thead className="tableHeader">
      <tr>
        <td>Uhrzeit</td>
        <td>Mo 09.11.</td>
        <td>Di 10.11.</td>
        <td className="tableHeader__active">Mi 11.11.</td>
        <td>Do 12.11.</td>
        <td>Fr 13.11.</td>
        <td className="tableHeader__free">Sa 14.11.</td>
        <td className="tableHeader__free">So 15.11.</td>
      </tr>
    </thead>
  );
};

export default TableHeader;
