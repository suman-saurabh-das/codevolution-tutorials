import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useRef hook (accessing DOM nodes)

- useRef hook allows us to access DOM nodes directly within components.

- In this e.g. we are creating a reference variable inputRef, which will initially hold a null value. Then we are assigning the inputRef to the ref attribute of input element, now the current attribute of inputRef will hold the input element and we can use the focus method.
`;
function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    // focus the input using useRef
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h4>Using useRef hook, the input element is focused on render</h4>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
