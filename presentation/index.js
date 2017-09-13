// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text,
  Markdown
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import App from "./react-demo"

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  react: require("../assets/react.png"),
  reactNative: require("../assets/react-native.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">

        <Slide transition={["zoom"]} bgColor="primary"
          notes={
            <div>
              <ol>
                <li>Who is familiar with React?</li>
                <li>ES6?</li>
              </ol>
            </div>
          }
        >
          <Image src={images.react} width={300} />
          <Heading size={3} lineHeight={1} textColor="secondary" >
            Introduction to React
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary"
          notes={
            <div>
              <ol>
                <li>User interface --> generic, not necessarely DOM based, see:
              <ol>
                    <li>React canvas</li>
                    <li>React Native</li>
                    <li>React Native for Web</li>
                  </ol>
                </li>
                <li>
                  Only the view in the Model View Controller. More flexibility about the architecture but more responsability compare to a Framework.
              </li>
              </ol>
            </div>
          }
        >
          <Heading size={6} textColor="tertiary" caps>What is React?</Heading>
          <List >
            <Appear><ListItem>A JavaScript library for building user interfaces</ListItem></Appear>
            <Appear><ListItem><span style={{ fontWeight: "bold" }}>V</span>iew in the M<span style={{ fontWeight: "bold" }}>V</span>C</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary"
          notes={
            <div>
              <ol>
                <li>The rectangle contains a React component using React Native syntax that describes how the UI is structured.
                   This will render  differently depending on the environment. 
                   If you are using React Native, it can compile into native Android or iOs.
                   If you are using "React Native for Web" library, in your browser, it will render as HTML.
                </li>
              </ol>
            </div>
          }
        >
          <Image src={images.reactNative} width="100%" />
        </Slide>

        <CodeSlide
          notes={
            <div>
              <h4>Present integration of React in an existing HTML page.</h4>
              <ol>
                <li>Easy to integrate</li>
                <li>Mention stateless component => pure JS function, takes as input an object and returns JSX.
                   JSX is syntax extension to JavaScript, it compiles to a JavaScript object.
                   Mention children.

                </li>
                <li>ReactDOM.render => At the root of your tree you still have to write some plumbing code to connect the outer world into React.</li>
              </ol>
            </div>
          }
          transition={["fade"]}
          lang="js"
          showLineNumbers={false}
          code={require("raw-loader!../assets/code.test")}
          ranges={[
            { loc: [0, 1], title: "How to integrate?" },
            { loc: [0, 6] },
            { loc: [21, 30] },
            { loc: [6, 20] },
            { loc: [21, 30] },
          ]} />

        <Slide transition={["fade"]} bgColor="primary" notes={
          <div>
            <h4>Slide notes</h4>
            <ol>
              <li>Virtual DOM compare in memory the DOM</li>
              <li>Component-Based --> compose them to make complex UIs. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation -> compose them to make complex UIs.</li>
              <li>Learn Once, Write anywhere -> Server rendering (SEO), React Native, Render to canvas instead of HTML</li>
              <li>Events behave in a consistent, standards-compliant way in all browsers (including IE8) and automatically use event delegation.</li>
            </ol>
          </div>
        } >
          <Heading size={6} textColor="tertiary" caps>Why React?</Heading>
          <List>
            <Appear><ListItem>Keeps the DOM in sync with your data</ListItem></Appear>
            <Appear><ListItem>Component-Based</ListItem></Appear>
            <Appear><ListItem>Learn Once, Write anywhere</ListItem></Appear>
            <Appear><ListItem>Events behave in a consistent, standards-compliant way in all browsers</ListItem></Appear>
            <Appear><ListItem>Deprecations =>  automatically migrate your code (reactjs/react-codemo)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" >
          <Heading size={6} lineHeight={1} textColor="tertiary" >
            JQuery
          </Heading>
          <div className="container">

            <List >
              <ListItem className="clickable">Task - 1</ListItem>
              <ListItem className="clickable">Task - 2</ListItem>
              <ListItem className="clickable">Task - 3</ListItem>
            </List>
            <span className="counter">Count clicks: 0</span>
            <div>
              <button className="reset">Reset</button>
            </div>
          </div>
        </Slide>

        <CodeSlide
          notes={
            <div>
              <h4>Html Demo</h4>
            </div>
          }
          className="html"
          maxWidth={1200}
          maxHeight={1300}
          transition={["fade"]}
          lang="html"
          code={require("raw-loader!../assets/html")}
          ranges={[
            { loc: [0, 15], title: "Html" },
          ]} />

        <CodeSlide
          notes={
            <div>
              <h4>Jquery code.</h4>
            </div>
          }
          maxWidth={1200}
          transition={["fade"]}
          lang="js"
          showLineNumbers={false}
          code={require("raw-loader!../assets/jquery")}
          ranges={[
            { loc: [0, 1], title: "Naive JQuery" },
            { loc: [1, 3] }, // counterText
            { loc: [3, 15] }, // click li
            { loc: [15, 23] },// click reset
            { loc: [26, 32] }, // find counter
            { loc: [33, 45] }, // switchTextDecoration
          ]} />

        <Slide transition={["fade"]} bgColor="primary" >
          <Heading size={6} lineHeight={1} textColor="tertiary" >
            React
          </Heading>
          <div id="react">
            <App />
          </div>
        </Slide>

        <CodeSlide
          notes={
            <div>
              <h4>Create Components</h4>
            </div>
          }
          maxWidth={1000}
          maxHeight={1300}
          transition={["fade"]}
          className="html"
          lang="html"
          showLineNumbers={false}
          code={require("raw-loader!../assets/html")}
          ranges={[
            { loc: [0, 15], title: "Component hierarchy" },
            { loc: [0, 50], note: "=> App component" },
            { loc: [2, 3], note: "=> Li component" },
            { loc: [6, 9], note: "=> Counter component" },
          ]} />

        <CodeSlide
          notes={
            <div>
              <h4>React code.</h4>
              <ol>
                <li>Mention statefull => here extends ES6 class. State should be managed by higher-level “container” components, or via Flux/Redux/etc</li>
                <li>key to match children in the original tree with children in the subsequent tree.</li>
              </ol>
            </div>
          }
          maxWidth={1200}
          transition={["fade"]}
          className="html"
          lang="js"
          showLineNumbers={false}
          className="bigger"
          code={require("raw-loader!../assets/react")}
          ranges={[
            { loc: [0, 0], title: "React" },
            { loc: [0, 10] }, // li
            { loc: [11, 20] }, // Counter
            { loc: [20, 25] }, // Initial state
            { loc: [25, 26] }, // class
            { loc: [26, 30] },// constructor
            { loc: [30, 37] },// handleLiClick
            { loc: [38, 41] }, // handleCounterClick
            { loc: [41, 43] }, // render
            { loc: [43, 48] }, // resetButton
            { loc: [49, 60] }, // list
            { loc: [60, 80] }, // return App

          ]} />

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes={
            <div>
              <ol>
                <li>Combination the Facebook BSD+Patents license  </li>
                <li>If you sue Facebook for patent infringement, your company loose the right to use React.</li>
              </ol>
            </div>
          }>
          <BlockQuote>
            <Quote textSize={35}>
              The license granted hereunder will terminate, automatically and without notice,
              for anyone that makes any claim (including by filing any lawsuit, assertion or other action) alleging (a) direct, indirect,
               or contributory infringement or inducement to infringe any patent [...] or (b) that any right in any patent claim
               of Facebook is invalid or unenforceable."
              </Quote>
            <Cite>Facebook</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>Demo</Heading>
          <Heading size={10} lineHeight={1} textColor="primary" >
            by Andreas Dimakis
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" className="inline">
          <Heading size={6} textColor="primary">Usefull links</Heading>
          <List >
            <ListItem ><Markdown textColor="primary">{`http://react-athens.surge.sh`}</Markdown></ListItem>
            <ListItem ><Markdown textColor="primary">This [presentation](https://github.com/axsignalocean/react-intro)  in React</Markdown></ListItem>
            <ListItem><Markdown>[Source code](https://webpack.github.io/) of the Demo</Markdown></ListItem>
            <ListItem><Markdown>[Migrate from deprecations](https://github.com/reactjs/react-codemod)</Markdown></ListItem>
            <ListItem><Markdown>[create-react-app](https://github.com/facebookincubator/create-react-app)</Markdown></ListItem>
            <ListItem><Markdown>[Webpack](https://webpack.github.io/)</Markdown></ListItem>
            <ListItem><Markdown>[Babel](https://babeljs.io/)</Markdown></ListItem>
            <ListItem><Markdown>[Jest](https://facebook.github.io/jest/)</Markdown></ListItem>
            <ListItem><Markdown>[PreactJs](https://preactjs.com/)</Markdown></ListItem>
            <ListItem><Markdown>[React license FAQ](https://code.facebook.com/pages/850928938376556)</Markdown></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="white">
          <Heading size={6} textColor="white">Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}