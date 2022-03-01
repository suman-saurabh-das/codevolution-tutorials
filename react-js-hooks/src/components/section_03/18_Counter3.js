import React, { useReducer } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useReducer hook (multiple reducers)

#### Using multiple userReducers having same state transitions

- If we are dealing with multiple state variables that have the same state transitions, then it is a good idea to have multiple useReducers making use of the same reducer function.

- This will avoid the complexity of merging the state in case of objects and it will avoid the duplication of code in reducer function.
`;

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter3() {
  const [count1, dispatch1] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <div>
        <h3>Count 1 : {count1}</h3>
        <button onClick={() => dispatch1("increment")}>Increment</button>&emsp;
        <button onClick={() => dispatch1("reset")}>Reset</button>&emsp;
        <button onClick={() => dispatch1("decrement")}>Decrement</button>&emsp;
      </div>
      <div>
        <h3>Count 2 : {count2}</h3>
        <button onClick={() => dispatch2("increment")}>Increment</button>&emsp;
        <button onClick={() => dispatch2("reset")}>Reset</button>&emsp;
        <button onClick={() => dispatch2("decrement")}>Decrement</button>&emsp;
      </div>
    </div>
  );
}

export default Counter3;
