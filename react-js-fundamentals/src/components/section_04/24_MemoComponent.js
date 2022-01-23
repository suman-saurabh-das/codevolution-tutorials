import React from "react";

function MemoComp(props) {
  console.log("Memo component rendered");
  return (
    <div>
      <h4>Memo Component - {props.name}</h4>
    </div>
  );
}

export default React.memo(MemoComp);
