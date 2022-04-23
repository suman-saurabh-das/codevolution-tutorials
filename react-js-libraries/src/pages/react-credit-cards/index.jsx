import { useState } from "react";
import ReactMarkdown from "react-markdown";
// credit-card
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./index.css"; // adding custom css
import Cards from "react-credit-cards-2";

const notes = `
## React Credit Cards

**Installation:** \`npm i react-credit-cards-2\`

**Documentation:** [react-credit-cards](https://github.com/felquis/react-credit-cards-2)

#### Usage

- Import component: \`import Cards from 'react-credit-cards-2';\`

- Import styles: \`import "react-credit-cards-2/dist/es/styles-compiled.css";\`

- Create a form for taking user input for number, name, expiry, cvc, focus.

- Use the imported Cards component & pass the values number, name, expiry, cvc, focus as props.
`;

function ReactCreditCards() {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "", // needed for styling
  });

  function handleInputChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleInputFocus(e) {
    setFormData((prev) => ({ ...prev, focus: e.target.name }));
  }

  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <Cards
        number={formData.number}
        expiry={formData.expiry}
        cvc={formData.cvv}
        name={formData.name}
        focused={formData.focus}
      /><br /><br />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "fit-content",
        }}
      >
        <input
          name="number"
          placeholder="Card Number"
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          value={formData.number}
          type="tel"
        />
        <input
          name="name"
          placeholder="Name"
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          value={formData.name}
          type="text"
        />
        <input
          name="expiry"
          placeholder="MM/YYYY Expiry"
          maxLength={6}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          value={formData.expiry}
          type="text"
        />
        <input
          name="cvc"
          placeholder="CVV"
          maxLength={3}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          value={formData.cvc}
          type="tel"
        />
      </form>
    </div>
  );
}

export default ReactCreditCards;
