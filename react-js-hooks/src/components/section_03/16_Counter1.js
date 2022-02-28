import React, { useReducer } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useReducer hook (simple state & action)

#### Steps to use useReducer Hook

- import useReducer from react.

- useReducer hook takes 2 parameters as input
  - reducer function: it is a function that takes 2 parameters currentState and action.
  - reducer function: it uses switch statements to return the currentState based on the action parameter. Basically action is used to select the switch statement that will be executed and based on the code that we write, the currentState will be modified and returned.
  - initialState: this will be the initial state of our state variable. (e.g. count)

- useReducer hook returns 2 parameters which can be obtained via array destructuring -
  - newState: it is the final modified state that we get after currentState is modified.
  - dispatch: it is a method, which is used to specify the action parameter which should be triggered to modify the currentState.
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

function Counter1() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Count : {count}</h3>
      <button onClick={() => dispatch("increment")}>Increment</button>
      &emsp;
      <button onClick={() => dispatch("reset")}>Reset</button>
      &emsp;
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
}

export default Counter1;
