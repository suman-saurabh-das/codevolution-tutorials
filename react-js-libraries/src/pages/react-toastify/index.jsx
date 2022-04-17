import ReactMarkdown from "react-markdown";
// toast notification
import { ToastContainer, toast } from "react-toastify";

const notes = `
## React Toastify

- **Purpose:** Library that allows us to add lightweight, non-intrusive notification messages (commonly known as toasts) to react apps with minimal configuration.
- **Install:** npm i react-toastify
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction/)

#### Usage

- Import: \`import { ToastContainer, toast } from "react-toastify";\`

- To show a toast notification, we will use the toast() method, which accepts 2 parameters

- Parameter 1: Toast content / Custom component.

- Parameter 2: Configuration object used to customize the notification. It can accept attributes as below
  - position: (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)
  - autoClose: (value in milliseconds (default is 5000) / false)
  - closeButton: (boolean value to show/hide close button)
  - hideProgressBar: (boolean value to show/hide progress bar)

- We can also use a custom component to display a toast. To achieve this, pass the component as first parameter to toast() method. E.g. \`toast(CustomToast, { position: "bottom-right" });\`
`;

function CustomToast({ closeToast }) {
  return (
    <div>
      <p>Custom toast notification!</p>
      <button onClick={closeToast}>Close toast</button>
    </div>
  );
}

function ReactToastify() {
  const notify = () => {
    toast("Default notification !", { position: "top-left", autoClose: 2500 });
    toast.success("Success notification !", { position: "top-center" });
    toast.info("Info notification !", {
      position: "top-right",
      autoClose: false,
    });
    toast.warn("Warn notification !", { position: "bottom-center" });
    toast.error("Error notification !", { position: "bottom-left" });
    toast(CustomToast, { position: "bottom-right", hideProgressBar: true, closeButton: false });
  };

  return (
    <div>
      <ToastContainer />
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <button className="button" onClick={notify}>
        Notify !
      </button>
    </div>
  );
}

export default ReactToastify;
