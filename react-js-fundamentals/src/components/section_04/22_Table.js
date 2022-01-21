import React from "react";
import Columns from "./22_Columns";
import ReactMarkdown from "react-markdown";

const NOTES = `
- In Columns component, if we use a <div> tag to enclose the <td> element, we will get an error.
- Instead we can make use of the React.fragment, which will not affect the DOM tree.

- NOTE: Fragments can accept the key attribute when rendering list of items.  
  \`<React.Fragment></React.Fragment>\` shorthand notation : \`<></>\`
- NOTE: If we use the shorthand notation, we cannot use the key attribute.
`;

function Table() {
  return (
    <>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
