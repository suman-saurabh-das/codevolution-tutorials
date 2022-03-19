import React from "react";

function Child3() {
  console.log("Child 3 rendered");

  return <h3>Child Component</h3>;
}

// export default Child3
export const MemoizedChild3 = React.memo(Child3);
