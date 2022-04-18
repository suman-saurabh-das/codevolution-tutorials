import ReactMarkdown from "react-markdown";
// icons
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiReactrouter, SiRedux, SiMongodb, SiExpress } from "react-icons/si";
import { IconContext } from "react-icons/lib";

const notes = `
## React Icons

Single unified library that allows us to easily use popular icons in React via ES6 imports. (only loads icons that we use)

**Installation:** \`npm install react-icons\`

**Documentation:** [react-icons](https://react-icons.github.io/react-icons/)

#### Usage

- Import needed icons: import { FaReact } from "react-icons/fa";

- Use as a component: <FaReact />

- Props: color ("dodgerBlue"), size ("4rem")

- Global styling using IconContext.
  \`\`\`jsx
  import { IconContext } from "react-icons";

  <IconContext.Provider value={{ color: "blue", size: "2rem" }}>
    <FaBeer />
  </IconContext.Provider>
  \`\`\`

- Note: Individual props override global settings.
`;

function ReactIcons() {
  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <div>
        <h3>Example</h3>
        <IconContext.Provider value={{ color: "dodgerBlue", size: "4rem" }}>
          <BiLogoJavascript color="yellow" size={"5rem"} />
          &emsp;&emsp;
          <BiLogoTypescript size={"5rem"} />
          &emsp;&emsp;
          <FaReact color="dodgerBlue" size="4rem" />
          &emsp;&emsp;
          <SiRedux color="purple" />
          &emsp;&emsp;
          <SiReactrouter color="red" size="4rem" />
          &emsp;&emsp;
          <SiMongodb color="green" />
          &emsp;&emsp;
          <FaNodeJs color="lime" />
          &emsp;&emsp;
          <SiExpress color="white" />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ReactIcons;
