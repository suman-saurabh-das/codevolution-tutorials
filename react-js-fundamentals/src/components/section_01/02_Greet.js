import React from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
- Simple functions receiving props (properties) and returning JSX.
- Use functional components as much as possible.
- Absence of 'this' keyword.
- Solution without using state.
- Mainly responsible for the UI. (simple logic)
- Stateless/ Dumb/ Presentational components.

#### Note
- Naming convention of components: PascalCase.  

- Steps to create a functional component -
  - Firstly, we need to import React from "react".
  - Create a normal function which will return the HTML (JSX).
  - But it is preferred to use arrow functions instead of normal function.
  - Now we need to export our component and import it in App.js
`;

/* Normal Function */
// function Greet() {
//   return (
//     <div>
//       <h2>Functional Component</h2>
//       <ReactMarkdown>{NOTES}</ReactMarkdown>
//     </div>
//   );
// }

/* Default export */
// export default Greet;

/* Named export along with Arrow function */
export const Greet = () => (
  <div>
    <h2>Functional Component</h2>
    <ReactMarkdown>{NOTES}</ReactMarkdown>
  </div>
);
