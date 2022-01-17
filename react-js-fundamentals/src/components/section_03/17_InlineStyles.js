import React from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Adding inline styles

- In react, inline styles are not specified as a string, instead they are specified within an object whose key & value are the camelCase version of the style name and the value is usually a string in camelCase.

- In case of Regular style sheets, CSS can be applied to every child component, which might lead to conflicts. But when using CSS modules, the classes are locally scoped by default and cannot be accessed by other components.
`;

function InlineStyles() {
  const heading = {
    fontSize: "72px",
    color: "dodgerBlue",
  };
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h2 style={heading}>Inline Styles</h2>
      <h3 className="error">Error Message</h3>
      {/* <h3 className={styles.success}>Yay ! Success</h3> */}
    </div>
  );
}

export default InlineStyles;
