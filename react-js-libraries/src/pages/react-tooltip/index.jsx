import ReactMarkdown from "react-markdown";
import { forwardRef } from "react";
// tooltip
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional for styling

const notes = `
## React Tooltip - Tippy.js

Tippy.js is a versatile, lightweight JavaScript library used to create tooltips, popovers, dropdowns, and menus. It is powered by Popper, a positioning engine that ensures floating elements stay correctly aligned with their target elements even during scrolling or window resizing.

**Installation:** \`npm i @tippyjs/react\`

**Documentation:** [tippy.js](https://github.com/atomiks/tippyjs-react)

#### Usage

- Import: \`import Tippy from '@tippyjs/react';\`

- Use \`Tippy\` as a component and wrap the component on hovering over which the tooltip should show. Pass a \`content prop to Tippy\` with data to display when user hovers over the component.

- The content prop can also accept custom component, which will get displayed on hover.

- To use a Custom component as a child inside the Tippy component, we need to forward a ref to the DOM node, we can do this using the forwardRef technique.

- Props -
  - arrow (determines if tooltip has an arrow)
  - delay (adds a delay in showing & hiding the tooltip, value should be in milliseconds)
  - placement (location where to display the tooltip possible values are top, bottom, left & right, default value is top)
`;

const CustomComponent = forwardRef((props, ref) => {
  return <span ref={ref}>Hover over me to see tooltip!</span>;
});

function ReactTooltip() {
  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <Tippy arrow={false} content="Basic tooltip" delay={500} placement="bottom">
        <button>Basic tooltip</button>
      </Tippy>
      &emsp;
      <Tippy
        content={
          <span style={{ color: "skyblue" }}>Custom component as tooltip</span>
        }
        placement="bottom"
      >
        <button>Custom tooltip</button>
      </Tippy>
      &emsp;
      <Tippy
        content={
          <span style={{ color: "coral" }}>
            Custom child component as tooltip
          </span>
        }
      >
        <CustomComponent />
      </Tippy>
      <br />
      <br />
    </div>
  );
}

export default ReactTooltip;
