import { useState } from "react";
import ReactMarkdown from "react-markdown";
// date-picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const notes = `
## React Date Picker

react-datepicker is a popular, lightweight, and reusable date picker component for React.

**Installation:** \`npm i react-datepicker\`

**Documentation:** [react-datepicker](https://github.com/Hacker0x01/react-datepicker)

#### Usage

- Import component: \`import DatePicker from "react-datepicker";\`

- Import styles: \`import "react-datepicker/dist/react-datepicker.css";\`

- Use the imported DatePicker component which can accept below props -
  
  - selected: Date that is selected (default is today's date).
  
  - onChange: Function to set the date selected by user.
  
  - dateFormat: Default is MM/dd/yyyy (months must be uppercase i.e. MM)  
    e.g. dd/MM/yyyy, yyyy/MM/dd
  
  - minDate: Minimum allowed date. e.g. minDate={new Date()}
  
  - maxDate: Maximum allowed date.

  - filterDate: Allow selective dates. e.g. For allowing only weekdays -  
    filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}

  - isClearable: Provides a button to clear currently selected date.

  - showYearDropdown & scrollableYearDropdown: Provides a dropdown to select year.
`;

function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        // maxDate={new Date()}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}

export default ReactDatePicker;
