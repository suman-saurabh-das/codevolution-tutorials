import React from "react";

function ChildButton({ handleClick, children }) {
  console.log(`Rendered - ${children}`);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(ChildButton);
