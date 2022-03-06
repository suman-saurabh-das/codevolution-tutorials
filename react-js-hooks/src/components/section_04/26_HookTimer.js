import React, { useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useRef hook (storing a mutable value)

- In this case, the interval variable that we had created previously in the useEffect hook, is no longer accessible inside the onClick event handler hence, we get an error "interval is not defined". Hence, we can clear the interval from useEffect but not from an event handler.

- Although the useRef can hold a reference to the DOM node using the ref attribute, it can also be used to store any mutable value. The value will persist through the re-renders while also not causing any additional renders when its value changes.

- useRef can be used to create a generic container which can hold a mutable value similar to instance properties in a class component. This generic container does not re-render when the data it stores changes. It also remembers the stored data even after other state variables cause a re-render of this component.
`;

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // const interval = setInterval(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevVal) => prevVal + 1);
    }, 1000);
    return () => {
      // clearInterval(interval);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Hook Timer : {timer}</h3>
      {/* <button onClick={() => clearInterval(interval)}> */}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear timer
      </button>
    </div>
  );
}

export default HookTimer;
