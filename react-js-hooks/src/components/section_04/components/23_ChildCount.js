import React from "react";

function ChildCount({ text, count }) {
  console.log(`Rendered - ${text}`);
  return <h3>{text} : {count}</h3>;
}

export default React.memo(ChildCount);
