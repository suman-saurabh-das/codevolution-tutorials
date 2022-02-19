import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Running an effect once using useEffect hook

- In useEffect() hook, when we want to achieve the effect (function) to run only once and not to depend on anything, we can achieve that by specifying an empty array as the 2nd parameter to the useEffect. We are basically telling react that this effect doesn't depend on any particular props or state.
`;

function HookMouse() {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setXPos(e.clientX);
    setYPos(e.clientY);
  };

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>
        X-pos: {xPos} Y-pos: {yPos}
      </h3>
    </div>
  );
}

export default HookMouse;
