import React from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Event handling

- React events are named in camelCase instead of lowercase.
  - e.g. onclick will become onClick.
- In JSX, we will pass a function as an event handler rather than a string.
  - e.g. "clickHandler()" will become {clickHandler}
- We need to pass the function definition and not the function call.
  - i.e. we should not use the parenthesis after the functionName.
  event handler is a function and not a function call.
`;

function FunctionClick() {
  function clickHandler() {
    alert("Button clicked from functional component");
  }
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <button onClick={clickHandler}>Function Click</button>
    </div>
  );
}

export default FunctionClick;
