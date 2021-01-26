import React from "react";
import "./style.css";

function Table(props) {
  return (
    <div>
      <tr>
        <th className="table-header">Name</th>
        <th className="table-header">Image</th>
        <th className="table-header">Location</th>
        <th className="table-header">Phone Number</th>
        <th className="table-header">Email</th>
      </tr>
      {props.children}
    </div>
  );
}

export default Table;
