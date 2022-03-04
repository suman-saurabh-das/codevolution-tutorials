import React from "react";

function ChildTitle() {
  console.log("Rendered title");
  return <h3>useCallback Hook</h3>;
}

export default React.memo(ChildTitle);
