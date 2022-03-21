import React from "react";

function Child4({ children, name }) {
  console.log("Child 4 rendered");

  return (
    <div>
      {children} {name}
    </div>
  );
}

export const MemoisedChild4 = React.memo(Child4);
