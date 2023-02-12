import { useState, useRef } from "react";
import Draggable from "react-draggable";

import Hello from "../components/Hello";
import PortfolioElement from "../components/PortfolioElement";
import ContactElement from "../components/ContactElement";

import "../styles/Home.css";
import "../styles/circle.css";

import github from "../assets/images/github.svg";
import listA from "../assets/images/list_a.svg";
import linkedIn from "../assets/images/linked_in.svg";
import riddleFiddle from "../assets/images/riddle_fiddle.svg";
import stack from "../assets/images/stack.svg";
import ioBot from "../assets/images/io_bot.svg";
import artifices from "../assets/images/artifices.svg";

const Home = () => {
  const [helloText, useHelloText] = useState(0);
  const nodeRef = useRef(null);

  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions, react-hooks/rules-of-hooks
    helloText === 3 ? useHelloText(1) : useHelloText(() => helloText + 1);
  };

  return (
    <div className="home-container">
      <div className="intro-container">
        {/* <Draggable nodeRef={nodeRef}> */}
        <div
          ref={nodeRef}
          className={`circle ${helloText === 0 ? "circle-animate" : ""}`}
          role="button"
          onClick={handleClick}
          tabIndex={0}
          aria-label="Press me"
        />
        {/* </Draggable> */}
        {/* <Draggable nodeRef={nodeRef}> */}
        <div
          ref={nodeRef}
          className={`circle2 ${helloText === 0 ? "circle-animate" : ""}`}
          role="button"
          onClick={handleClick}
          tabIndex={0}
          aria-label="Press me"
        />
        {/* </Draggable> */}

        <Hello helloText={helloText} />

        <div className="portfolio-container">
          <PortfolioElement
            elementLogo={listA}
            title="ListA"
            description="Work in progress..."
            buttonCount={1}
            button1="Coming Soon"
          />

          <PortfolioElement
            elementLogo={github}
            title="GitHub"
            description="My GitHub profile"
            buttonCount={1}
            button1="Visit"
            href1="https://github.com/IonutInit"
          />

          <PortfolioElement
            elementLogo={linkedIn}
            title="LinkedIn"
            description="My LinkedIn Profile"
            buttonCount={1}
            button1="Visit"
            href1="https://www.linkedin.com/in/ionut-cojocaru-dev"
          />

          <PortfolioElement
            elementLogo={riddleFiddle}
            title="The Riddle Fiddle"
            description="A text-based word-guessing game with AI imagery and a custom hints algorithm"
            buttonCount={2}
            button1="Docs"
            href1="https://riddles.cojocaru.co.uk/"
            button2="Visit"
            href2="https://riddles.artifices.xyz/"
          />

          <PortfolioElement
            elementLogo={stack}
            title="My Stack"
            description="Find out more about my current stack and documentation process."
            buttonCount={1}
            button1="Read More"
            href1="https://docs.cojocaru.co.uk"
          />

          <PortfolioElement
            elementLogo={ioBot}
            title="IObot"
            description="An OpenAI model trained to impersonate me. If you want to know... us better, just open the chat below."
            buttonCount={1}
            button1="Docs"
            href1="https://en.wikipedia.org/wiki/Main_Page"
          />

          <ContactElement />

          <PortfolioElement
            elementLogo={artifices}
            title="Artifices"
            description="A long term passion project involving board games and stories"
            buttonCount={1}
            button1="Visit"
            href1="https://www.artifices.xyz/"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
