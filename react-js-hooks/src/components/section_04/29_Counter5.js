import React from "react";
import useCounter from "./hooks/useCounter";

function Counter5() {
  const [count, increment, decrement, reset] = useCounter(10, 10);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={increment}>Increment</button>&emsp;
      <button onClick={decrement}>Decrement</button>&emsp;
      <button onClick={reset}>Reset</button>&emsp;
    </div>
  );
}

export default Counter5;
