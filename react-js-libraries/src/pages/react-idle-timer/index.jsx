import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
// idle timer & modal
import { useIdleTimer } from "react-idle-timer";
import Modal from "react-modal";

const notes = `
## React Idle Timer

Library designed for React applications to detect user activity, such as mouse movements, keyboard presses, or touches, and trigger actions (like logging out) after a set period of inactivity.

**Installation:** \`npm i react-idle-timer\`

**Documentation:** [react-idle-timer](https://idletimer.dev/docs/features/confirm-prompt)

#### Usage

- Import: \`import { useIdleTimer } from "react-idle-timer";\`

- useIdleTimer hook accepts below parameters -
  - timeout: Time (in milliseconds) after which component informs that there is no activity in tab.
  - promptBeforeIdle: Time (in milliseconds) for which the prompt will be displayed.
  - onIdle: Function to call when user is idle.
  - onActive: Function to call when user is active.
  - onPrompt: Function to display a confirm prompt. If the prompt timeout is reached, onIdle is then called.

- useIdleTimer hook returns below values -
  - getRemainingTime: Time (in milliseconds) remainingTime before idle or prompt.
  - activate(): Function to restore initial state & emit onActive if the user was prompted or idle.
  - pause(): Function to stop idle timer from running internally.
`;

const timeout = 15000;
const promptBeforeIdle = 10000;

function ReactIdleTimer() {
  const [state, setState] = useState("Active"); // Active, Prompted, Idle
  const [remainingTime, setRemainingTime] = useState(timeout / 1000); // In seconds
  const [showModal, setShowModal] = useState(false);

  const intervalRef = useRef(null);

  // ---- Idle handler ----
  const onIdle = () => {
    setState("Idle");
    setShowModal(false);

    setRemainingTime(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    pause(); // Stops idle timer running internally
  };

  // ---- Active handler ----
  const onActive = () => {
    setState("Active");
    setShowModal(false);
  };

  // ---- Prompt handler ----
  const onPrompt = () => {
    setState("Prompted");
    setShowModal(true);
  };

  const { getRemainingTime, activate, pause } = useIdleTimer({
    onIdle,
    onActive,
    onPrompt,
    timeout,
    promptBeforeIdle,
    // crossTab: true, // prevents logout if app is open in other tabs.
  });

  // ---- Interval logic (FIXED) ----
  useEffect(() => {
    // Don't run timer if idle
    if (state === "Idle") return;

    intervalRef.current = setInterval(() => {
      const time = Math.ceil(getRemainingTime() / 1000);
      setRemainingTime(time);
    }, 500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [state, getRemainingTime]);

  // ---- Actions ----
  const handleStillHere = () => {
    activate(); // resets idle timer
  };

  const handleCloseModal = () => {
    activate();
    setShowModal(false);
  };

  const handleLogout = () => {
    onIdle(); // centralize logout logic
  };

  // ---- Derived values ----
  const timeTillPrompt = Math.max(remainingTime - promptBeforeIdle / 1000, 0);
  const seconds = timeTillPrompt === 1 ? "second" : "seconds";

  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <button onClick={() => activate()}>Activate</button>
      <p>Current State: {state}</p>
      <p>Remaining Time: {remainingTime}s</p>
      {timeTillPrompt > 0 && (
        <p>
          {timeTillPrompt} {seconds} until prompt
        </p>
      )}
      {showModal && (
        <Modal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          style={{
            content: { backgroundColor: "#222", margin: "auto", width: "50%" },
            overlay: { backgroundColor: "#1d1d1dd9" },
          }}
        >
          <h3>Are you still here?</h3>
          <p>Logging out in {remainingTime} seconds</p>
          <button onClick={handleStillHere}>Keep me logged in</button>
          &emsp;
          <button onClick={handleLogout}>Logout</button>
        </Modal>
      )}
    </div>
  );
}

export default ReactIdleTimer;
