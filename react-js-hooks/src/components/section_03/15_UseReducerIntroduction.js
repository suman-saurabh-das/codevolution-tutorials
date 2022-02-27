import ReactMarkdown from "react-markdown";

const NOTES = `
## useReducer Hook

- The useReducer hook is used for state management.
- It is an alternative to useState.

- What's the difference ?  
  useState is built using useReducer.

- When to useReducer vs useState ?  
  when we need to group related state variables.  
  and the state variables depends on each other.

- Hooks we have learned so far -
  - useState: state management
  - useEffect: performing side effects
  - useContext: context API (data transfer)
  - useReducer: reducers

- Array.prototype.reduce() -  
  The reduce method executes a reducer function (that we provide) on each element of the array resulting in a single output value.

      e.g.
      const my_array = [1,2,3,4];
      const reducer = (accumulator, currentValue) => accumulator + currentValue;

      // 1 + 2 + 3 + 4
      console.log(my_array.reduce(reducer))
      // expected output : 10

      // 5 + 1 + 2 + 3 + 4
      // passing an initial value to the accumulator
      console.log(my_array.reduce(reducer, 5))
      // expected output : 15

#### reduce vs useReducer

- reduce in JS
  - array.reduce(reducer(), initialValue)
  - singleValue = reducer(accumulator, itemValue) {...}
  - reduce method returns a single value

- useReducer in React
  - useReducer(reducer(), initialState)
  - newState = reducer(currentState, action) {...}
  - useReducer returns a pair of values - [newState, dispatch]

- useReducer Summary
  - The useReducer hook is a hook that is used for state management.
  - useReducer is related to reducer functions.
  - useReducer(reducer, initialState)
  - reducer(currentState, action)
`;

function UseReducerIntroduction() {
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
    </div>
  );
}

export default UseReducerIntroduction;
