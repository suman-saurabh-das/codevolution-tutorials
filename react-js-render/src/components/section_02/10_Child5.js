import React from "react";

function Child5({ name }) {
  console.log("Child 5 rendered");

  const date = new Date();
  return (
    <div>
      <h3>Hello {name}</h3>
      <div>
        Currently time is :{" "}
        <strong>
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </strong>
      </div>
    </div>
  );
}

export const MemoizedChild5 = React.memo(Child5);
