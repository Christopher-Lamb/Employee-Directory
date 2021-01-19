import React from "react";

function Table(props) {
  return (
    <div>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
      {props.children}
    </div>
  );
}

export default Table;
