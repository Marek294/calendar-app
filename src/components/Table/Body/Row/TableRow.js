import React from "react";

import "./TableRow.css";

const TableRow = props => {
  const { time } = props;
  return (
    <tr className="row">
      <td className="row__hour">{time}</td>
      <td />
      <td />
      <td className="row__active" />
      <td />
      <td />
      <td />
      <td />
    </tr>
  );
};

export default TableRow;
