import ReactMarkdown from "react-markdown";
import { useState } from "react";
// modal
import Modal from "react-modal";

const notes = `
## React Modal

Provides accessible modal dialog for react applications. It is designed to provide a flexible foundation for building pop-up dialogs while strictly adhering to WAI-ARIA accessibility.

**Installation:** \`npm install react-modal\`

**Documentation:** [react-modal](https://reactcommunity.org/react-modal/)

#### Usage

- Import: \`import Modal from "react-modal";\`

- Render content inside the \`<Modal>{content}<Modal/>\` tags.

- Modal tag accepts -
  - \`isOpen\` prop (accepts boolean value) which is used to show/hide the modal. (Use a state variable along with a button to toggle the modals isOpen prop.)
  - \`onRequestClose\` prop (accepts a function) which can be used to close the modal when overlay is clicked / escape key is pressed.
  - \`shouldCloseOnOverlayClick\` prop (accepts boolean value) which can be used to stop modal from closing when overlay is clicked but pressing the escape key still closes the modal.

- When we open the modal & inspect, we will see a warning "react-modal: App element is not defined." To fix this we need to set the app element with our root DOM node.

- To provide inline styles we use the style prop in our modal component. It merges the styles that we provide with the default modal styles that react-modal provides.
`;

Modal.setAppElement("#root");

function ReactModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          content: { backgroundColor: "#222", margin: "auto", width: "50%" },
          overlay: { backgroundColor: "#1d1d1dd9" },
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Modal using react-modal</h2>
          <button style={{height: "fit-content"}} onClick={() => setIsModalOpen(false)}>Close Modal</button>
        </div>
        <ul>
          <li>
            Accessibility: Manages focus trapping (keeping keyboard navigation
            inside the modal) and automatically adds appropriate ARIA roles to
            ensure screen reader compatibility.
          </li>
          <li>
            App Element Binding: Uses setAppElement to hide the main application
            when the modal is open preventing background interaction.
          </li>
          <li>
            Customization: Offers extensive styling options via inline styles or
            CSS classes and includes hooks for entrance/exit animations.
          </li>
          <li>
            Event handling: Includes built-in support for closing the modal via{" "}
            <strong>Escape</strong> key or by clicking background overlay.
          </li>
        </ul>
      </Modal>
      <h3>Example</h3>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
    </div>
  );
}

export default ReactModal;
