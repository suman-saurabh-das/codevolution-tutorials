import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
- Just like useState, useEffect is also a function.

- useEffect accepts a parameter, which is a function that gets executed after every render of the component.

- When we specify useEffect, we are basically requesting react to execute the function that is passed as an argument every time the component renders. i.e. useEffect runs after every render.

- useEffect is placed inside the component, by doing this we can easily access the components state and props without having to write any additional code.
`;

function HookCounter5() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h4>Update document title using useEffect hook</h4>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count}
      </button>
    </div>
  );
}

export default HookCounter5;
