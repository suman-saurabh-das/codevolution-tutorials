import ReactMarkdown from "react-markdown";
// loading indicators
import { BounceLoader, BeatLoader, BarLoader } from "react-spinners";

const notes = `
## React Spinners (loading indicator)

React spinners are UI components used to provide visual feedback during asynchronous operations, such as data fetching or page transitions. There are several popular libraries available for implementing these indicators.

**Installation:** \`npm i react-spinners\`

**Documentation:** [react-spinners](https://github.com/davidhu2000/react-spinners)

#### Usage

- Import: \`import ReactPlayer from "react-spinners"\`

- Use the imported spinner component and pass a boolean value to loading prop.

- If the loading prop is true only then we will see a spinner.

- Props -
  - loading: boolean value to show/hide the loader.
  - size: set size of loader.
  - color: set color of loader.
`;

function ReactSpinners() {
  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <BounceLoader loading size={24} color="yellow" />
      <br />
      <BeatLoader loading color="orange" />
      <br />
      <BarLoader loading color="red" />
    </div>
  );
}

export default ReactSpinners;
