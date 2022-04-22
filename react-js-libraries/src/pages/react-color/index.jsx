import { useState } from "react";
import ReactMarkdown from "react-markdown";
// color picker
import { ChromePicker } from "react-color";

const notes = `
## React Color (Color Picker)

react-color is a widely used collection of color picker components for React applications. It provides pre-built UI widgets inspired by popular design software and platforms.

**Installation:** \`npm i react-color\`

**Documentation:** [react-color](https://github.com/casesandberg/react-color)

#### Usage

- Import: \`import { useIdleTimer } from "react-idle-timer";\`

- We can import AlphaPicker, BlockPicker, ChromePicker, CirclePicker, CompactPicker, GithubPicker, HuePicker, MaterialPicker, PhotoshopPicker, SketchPicker, SliderPicker, SwatchesPicker or TwitterPicker.

- Use the imported ColorPicker as a component.

- Create a state variable color & pass it to color prop of ColorPicker component.

- Pass the setter function to the onChange function of ColorPicker component.
`;

function ReactColor() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <ChromePicker
        color={color}
        onChange={(updatedColor) => setColor(updatedColor.hex)}
      />
      <h4>You have picked: {color}</h4>
    </div>
  );
}

export default ReactColor;
