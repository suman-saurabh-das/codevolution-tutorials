import ReactMarkdown from "react-markdown";
// video player
import ReactPlayer from "react-player";

const notes = `
## React Player (Video player)

ReactPlayer is a popular, highly customizable React component used to play media from various URLs, including file paths and third-party platforms like YouTube, Vimeo, and Twitch.

**Installation:** \`npm i react-player\`

**Documentation:** [react-player](https://github.com/cookpete/react-player)

#### Usage

- Import: \`import ReactPlayer from "react-player"\`

- Pass the url for the video you want to play to the src prop in ReactPlayer.

- Props -
  - src: URL for the video to be played.
  - controls: To enable video player controls.
  - width & height.
  - callback props: To perform an action when certain activity happens.  
    E.g.: onReady, onStart, onPause, onEnded, onError
`;

function ReactVideoPlayer() {
  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <ReactPlayer
        height={320}
        width={575}
        controls
        src="https://youtu.be/WIPV1iwzrzg?si=VpAP3sczqiK6M5nE"
        onReady={() => console.log("onReady called")}
        onStart={() => console.log("onStart called")}
        onPause={() => console.log("onPause called")}
        onEnded={() => console.log("onEnded called")}
        onError={() => console.log("onError called")}
      />
    </div>
  );
}

export default ReactVideoPlayer;
