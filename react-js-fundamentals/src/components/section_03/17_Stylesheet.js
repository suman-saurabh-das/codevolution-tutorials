import React from "react";
import "./styles/17_myStyles.css";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Adding styles using external CSS files -
    
- We can add a class name and modify the styling's of the HTML tags.
- We can also conditionally add a class based on the props or state of the component.
- To add multiple classes, best way is to used template literals.
`;

function Stylesheet(props) {
  const setTextColor = props.primary ? "primary" : "";
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h2 className={`${setTextColor} font-xl`}>Stylesheet</h2>
    </div>
  );
}

export default Stylesheet;
