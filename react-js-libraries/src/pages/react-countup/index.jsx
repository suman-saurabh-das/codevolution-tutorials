import { useRef } from "react";
import ReactMarkdown from "react-markdown";
// count-up
import CountUp, { useCountUp } from "react-countup";

const notes = `
## React countup

react-countup is a React component wrapper for CountUp.js, a lightweight JavaScript library used to create animations that display numerical values counting up (or down) to a specific target.

**Installation:** \`npm i react-countup\`

**Documentation:** [react-countup](https://github.com/glennreyes/react-countup)

#### Usage

- Import: \`import CountUp from "react-countup";\`

- Props -
  - end: Value till which count should animate upto and then stop. 
  - duration: Time it takes to reach till final value (default is 2 seconds), prop accepts value in seconds.
  - start: Value from which counting starts (default is 0).
  - prefix: Used to add prefix to the number.
  - suffix: Used to add suffix to the number.
  - decimals: Used to add decimal places after number.

- Using useCountUp hook to control the counter -
  - Create a ref to store the counter reference.
  - Use this in the UI to render the the count.
  - Call the useCountUp() hook by passing the ref, start, startOnMount, end, duration properties.
  - Hook will return the countUp value, start, pauseResume, reset & update functions.
`;

function ReactCountUp() {
  const countUpRef = useRef(null);
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    duration: 5,
    end: 10000,
    start: 0,
    startOnMount: false,
  });

  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <CountUp end={100} />
      &emsp;
      <CountUp duration={5} end={500} />
      &emsp;
      <CountUp duration={5} start={500} end={1000} />
      &emsp;
      <CountUp duration={5} decimals={2} prefix="$" start={1000} end={2000} />
      &emsp;
      <CountUp
        duration={5}
        decimals={2}
        suffix=" USD"
        start={1000}
        end={2000}
      />
      <hr />
      <h3>Controlling the countup value using useCountUp hook</h3>
      <h4>
        Count Up value: <span ref={countUpRef}>{countUp}</span>
      </h4>
      <button onClick={start}>Start</button>&emsp;
      <button onClick={reset}>Reset</button>&emsp;
      <button onClick={pauseResume}>Pause/Resume</button>&emsp;
      <button onClick={() => update(2000)}>Update to 2000</button>
    </div>
  );
}

export default ReactCountUp;
