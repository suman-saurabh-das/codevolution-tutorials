import React, { useReducer } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useReducer hook (complex state & action)

#### We can also pass an object as a state and action to the reducer function.
  
- For example, in this case the state is an object containing 2 state variables namely firstCount and secondCount. Using a state as an object enables us to maintain multiple states in a single useReducer hook.

- Also the action is an object which enables us to specify different values by which we can increment or decrement the state based on values passed to the action object.

- Using an action as an object enables us to pass additional data to reducer function.

- NOTE: This approach of maintaining variables in a single state object is suited to maintain Global state but for local state we have another method.

- NOTE: When we are having multiple properties in the state object but we are changing only one at a time, then we will have to use the spread operator so that we retain the initial state of both objects and then overwrite the required one. (i.e. we will have to use spread operator to merge the state properties to get the desired output.)
`;

const initialState = {
  firstCount: 0,
  secondCount: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "reset":
      return initialState;
    case "increment2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    default:
      return state;
  }
};

function Counter2() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Count 1 value : {counter.firstCount}</h3>
      <h3>Count 2 value : {counter.secondCount}</h3>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      &emsp;
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
      &emsp;
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        Reset
      </button>
      &emsp;
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      &emsp;
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <br /><br />
      <button onClick={() => dispatch({ type: "increment2", value: 2 })}>
        Increment Count 2
      </button>
      &emsp;
      <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
        Decrement Count 2
      </button>
    </div>
  );
}

export default Counter2;
