import React from "react";
import GrandChildComponent from "./03_GrandChildComponent";

function ChildComponent() {
  return (
    <div>
      <GrandChildComponent />
    </div>
  );
}

export default ChildComponent;
