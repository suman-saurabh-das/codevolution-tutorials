import React, { useContext } from "react";
import { CountContext } from "../19_CounterContainer";

function ComponentF() {
  const counter = useContext(CountContext);
  return (
    <div>
      ComponentF : {counter.countValue}&emsp;
      <button onClick={() => counter.countDispatch("increment")}>
        Increment
      </button>&emsp;
      <button onClick={() => counter.countDispatch("decrement")}>
        Decrement
      </button>&emsp;
      <button onClick={() => counter.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
