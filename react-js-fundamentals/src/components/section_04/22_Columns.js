import React from "react";

function Columns() {
  const items = [
    { id: 1, title: "saurabh" },
    { id: 2, title: "das" },
  ];
  return (
    <>
      <td>Name : </td>
      <td>suman</td>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <td>{item.title}</td>
        </React.Fragment>
      ))}
    </>
  );
}

export default Columns;
