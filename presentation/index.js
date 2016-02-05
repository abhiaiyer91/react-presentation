// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  blaze: require("../assets/blaze.jpg"),
  matt: require("../assets/matt.jpg"),
  abhi: require("../assets/abhi.jpg"),
  nardo: require("../assets/nardo.jpg"),
  redux: require("../assets/redux-2.png"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Welcome to Pop
            </Heading>
            <Heading size={1} fit caps>
              An opinionated way to build UI @ Workpop Inc.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.matt.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Image src={images.abhi.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Image src={images.nardo.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Brought to you by the Ninjaz
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.blaze.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                The Past
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Blaze + Tracker
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Shoot me.
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote size={3}>Managing complexity is the most important technical topic in software development.</Quote>
              <Cite>Steve McConnell in Code Complete</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Lets Talk About State</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  UI State
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Domain State
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Enter React
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Why React?
            </Heading>
            <List>
              <Appear><ListItem>Components</ListItem></Appear>
              <Appear><ListItem>VirtualDOM</ListItem></Appear>
              <Appear><ListItem>JSX</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Components
            </Heading>
            <List>
              <ListItem>Breaking UI into a component hierarchy is logical</ListItem>
              <ListItem>Components are highly reusable</ListItem>
              <ListItem>JSX is the shit</ListItem>
            </List>

                  <aside class="notes">
                    If you think in a React way, the concerns of the application will be small composable components.
                  </aside>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              VirtualDOM
            </Heading>
            <List>
              <ListItem>Efficiency</ListItem>
              <ListItem>It has a full event system</ListItem>
              <ListItem>No direct DOM manipulations</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              This slideshow is one big React component
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              But...
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              What about Data Flow?
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading caps fit size={1} textColor="primary">
              Enter Redux
            </Heading>
            <List>
              <ListItem>Manage state with a minimal but predictable API</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Image src={images.redux.replace("/", "")} margin="0px auto 40px" height="600px"/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              How can I get started?
            </Heading>
            <Heading><Link textColor="secondary" href="https://workpop.gitbooks.io/pop/content/">Pop Book</Link></Heading>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Office Hours
            </Heading>
            <Heading textColor="secondary">Discussions at 4pm</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
