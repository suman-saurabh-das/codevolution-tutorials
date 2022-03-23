import React from "react";

function Child6({ children, name, person }) {
  console.log("Child 6 rendered");

  return (
    <div>
      <h4>{children} {name}</h4>
      {/* <h4>{person.fName} {person.lName}</h4> */}
    </div>
  );
}

export const MemoisedChild6 = React.memo(Child6);
