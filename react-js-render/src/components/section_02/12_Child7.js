import React from "react";

function Child7({ children, name, person, clickHandler }) {
  console.log("Child 7 rendered");

  return (
    <div>
      <h4>{children} {name}</h4>
      {/* <h4>{person.fName} {person.lName}</h4> */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export const MemoisedChild7 = React.memo(Child7);
