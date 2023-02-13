import { useState, ChangeEvent } from "react";

import { Bio1, Bio2, Bio3, Bio4 } from "../components/BioFragments";

import Resume from "../assets/static/Ionut Cojocaru - Resume.pdf";

import "react-chatbot-kit/build/main.css";
import "../styles/Bio.css";

const Bio = () => {
  const [sliderStep, setSliderStep] = useState(1);
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sliderValue = Number(e.target.value);
    setSliderStep(sliderValue);
  };

  return (
    <div className="bio-container">
      <div className="bio-story-container">
        {sliderStep >= 1 && sliderStep <= 100 && <Bio1 />}
        {sliderStep >= 101 && sliderStep <= 200 && <Bio2 />}
        {sliderStep >= 201 && sliderStep <= 300 && <Bio3 />}
        {sliderStep >= 301 && sliderStep <= 400 && <Bio4 />}
      </div>
      <div className="bio-attribution">
        <p>
          Illustrations by{" "}
          <a href="https://absurd.design/" target="_blank" rel="noreferrer">
            absurd.design
          </a>
        </p>
      </div>

      <input
        className="slider"
        type="range"
        min={1}
        max={400}
        value={sliderStep}
        onChange={(e) => handleSliderChange(e)}
      />
      <h2 className="bio-abstract">
        A former{" "}
        <span
          className={`${
            sliderStep >= 101 && sliderStep <= 300
              ? "bio-highlight"
              : "blank-highlight"
          }`}
        >
          ecommerce business
        </span>{" "}
        owner now moving on to{" "}
        <span
          className={`${
            sliderStep >= 201 && sliderStep <= 400
              ? "bio-highlight"
              : "blank-highlight"
          }`}
        >
          coding
        </span>
        .
      </h2>

      <div className="buttons-container">
        <a href={Resume} target="_blank" rel="noreferrer">
          <button type="button">Resume</button>
        </a>

        <a
          href="https://docs.cojocaru.co.uk/welcome/#my-current-stack"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Stack</button>
        </a>
      </div>
    </div>
  );
};

export default Bio;
