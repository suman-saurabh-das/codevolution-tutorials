import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// presentation deck (spectacle)
import {
  Deck,
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  CodePane,
  Markdown,
} from "spectacle";
import "./index.css"; // overwriting default styles

const notes = `
## React Presentation Deck - Spectacle

Spectacle is an open-source, React-based library used to create professional and interactive presentation decks using JSX syntax. Maintained by Formidable, it allows developers to build slides with the same components and logic they use in web applications.

**Installation:** \`npm i spectacle\`

**Documentation:** [spectacle](https://nearform.com/open-source/spectacle/docs/api-reference)

#### Usage

- Import: \`import { Deck, Slide, Heading, Text } from "spectacle";\`

- Create a deck and add slides, use arrow keys to navigate through the slides and press escape key to close the presentation.

- Custom CSS has been used to overwrite default styles.
`;

function ReactPresentationDeck() {
  const [showDeck, setShowDeck] = useState(false);

  function startPresentation() {
    window.history.replaceState(null, "", window.location.pathname);
    setShowDeck(true);
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        window.history.replaceState(null, "", window.location.pathname);
        setShowDeck(false);
      }
    };

    if (showDeck) {
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [showDeck]);

  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      {!showDeck && (
        <button onClick={startPresentation}>Start Presentation</button>
      )}
      {showDeck && (
        <div
          onKeyDown={(e) => e.key === "Escape" && setShowDeck(false)}
          tabIndex={0}
        >
          <Deck>
            {/* Title Slide */}
            <Slide>
              <Heading>Spectacle</Heading>
              <Text>
                Spectacle is a React-based library for building presentation
                decks using JSX. It allows you to create slides as React
                components and supports features like live code demos. In
                Spectacle, presentations are composed using a set of core
                components, which can be grouped into three categories: Main
                components, Typography components, and Layout components.
              </Text>
              <UnorderedList>
                <ListItem>
                  Main components: These form the foundation of a Spectacle
                  presentation. The primary components are Deck and Slide, which
                  are required to build a slideshow.
                </ListItem>
                <ListItem>
                  Typography components: These are used to display textual
                  content, such as headings, paragraphs, and inline text.
                </ListItem>
                <ListItem>
                  Layout components: These help structure and organize content
                  within a slide. Layout components can be used inside slides or
                  via templates to control overall slide layout.
                </ListItem>
              </UnorderedList>
            </Slide>

            {/* Installation */}
            <Slide>
              <Heading>Installation</Heading>
              <CodePane language="bash">{`npm install spectacle`}</CodePane>
              <Heading>Basic Usage</Heading>
              <CodePane language="jsx">
                {`
import { Deck, Slide, Heading, Text } from "spectacle";
<Deck>
  <Slide>
    <Heading>Hello 👋</Heading>
    <Text>This is a slide</Text>
  </Slide>
</Deck>`}
              </CodePane>
            </Slide>

            {/* Core Components */}
            <Slide>
              <Heading>Core Components</Heading>
              <UnorderedList>
                <ListItem>
                  Deck → Container that manages the presentation
                </ListItem>
                <ListItem>Slide → Represents an individual slide</ListItem>
                <ListItem>Heading & Text → Used to display content</ListItem>
              </UnorderedList>
              <Heading>Deck Props</Heading>
              <UnorderedList>
                <ListItem>
                  transition → Defines slide transition effects
                </ListItem>
                <ListItem>
                  transitionDuration → Controls animation duration
                </ListItem>
                <ListItem>theme → Applies custom styling to the deck</ListItem>
              </UnorderedList>
            </Slide>

            {/* Markdown */}
            <Slide>
              <Markdown>
                {`
# Markdown syntax support
- Spectacle supports layout containers that can be used within Markdown slides to create more structured layouts.
- Slides in Markdown are separated using --- (three dashes).
- A JSON-based configuration can be provided along with the delimiter to define slide layout, such as "center" or "columns".
---
# Code Display
\`\`\`
const a = 10;
console.log(a);
\`\`\`
`}
              </Markdown>
            </Slide>

            {/* Features */}
            <Slide>
              <Heading>Features</Heading>
              <UnorderedList>
                <ListItem>Keyboard navigation</ListItem>
                <ListItem>Fullscreen and presenter mode support</ListItem>
                <ListItem>PDF export</ListItem>
              </UnorderedList>
              <Heading>When to Use</Heading>
              <UnorderedList>
                <ListItem>Developer presentations</ListItem>
                <ListItem>Live coding demonstrations</ListItem>
                <ListItem>React-based slide decks</ListItem>
              </UnorderedList>
            </Slide>

            {/* Summary */}
            <Slide>
              <Heading>Summary</Heading>
              <UnorderedList>
                <ListItem>Deck + Slide = presentation structure</ListItem>
                <ListItem>JSX is used to build slides</ListItem>
                <ListItem>Supports themes, layouts, and animations</ListItem>
              </UnorderedList>
              <Heading>Thank You 🙌</Heading>
            </Slide>
          </Deck>
        </div>
      )}
    </div>
  );
}

export default ReactPresentationDeck;
