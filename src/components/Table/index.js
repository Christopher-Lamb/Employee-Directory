import React from "react";

function Table(props) {
  return (
    <div>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Location</th>
        <th>Phone Number</th>
        <th>Email</th>
      </tr>
      {props.children}
    </div>
  );
}

export default Table;
