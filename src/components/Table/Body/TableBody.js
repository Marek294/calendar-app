import React from "react";
import TableRow from "./Row/TableRow";

const TableBody = () => {
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
      ].map((time, i) => <TableRow key={i} time={time} />)}
    </tbody>
  );
};

export default TableBody;
