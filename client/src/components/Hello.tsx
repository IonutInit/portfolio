import { FunctionComponent } from "react";
import Typewriter from "typewriter-effect";

import "../styles/Hello.css";

type Props = {
  helloText: number;
};

const Hello: FunctionComponent<Props> = ({ helloText }) => {
  return (
    <div>
      <div className="hello-container">
        {(helloText === 0 || helloText === 3) && (
          <div>
            <h1 className="initial-hello">
              I am<span className="highlight1"> Ionut Cojocaru </span>,
            </h1>
            <h1 className="initial-hello">
              a<span className="highlight2"> webdeveloper</span>
            </h1>
            <h1 className="initial-hello">
              based in<span className="highlight3"> Manchester </span>
              <span className="dot">.</span>
            </h1>
          </div>
        )}

        {helloText === 1 && (
          <h1>
            <Typewriter
              options={{
                delay: 70,
                cursor: ".",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("My aim is to explore, experiment, and create")
                  .pauseFor(2000)
                  .deleteChars(6)
                  .typeString("deliver")
                  .pauseFor(1000)
                  .deleteChars(7)
                  .typeString("excel")
                  .start();
              }}
            />
          </h1>
        )}

        {helloText === 2 && (
          <h1>
            <Typewriter
              options={{
                delay: 70,
                cursor: ".",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `My guiding principle is complexity hidden in simplicity`
                  )
                  .start();
              }}
            />
          </h1>
        )}
      </div>

      <div className="hello-div" />

      <div className="hello-annotation">
        <p>This page is about what I&apos;m about.</p>
      </div>
    </div>
  );
};

export default Hello;
