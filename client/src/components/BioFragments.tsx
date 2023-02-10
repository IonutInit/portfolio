import Bio01 from "../assets/images/bio01.png";
import Bio02 from "../assets/images/bio02.png";
import Bio03 from "../assets/images/bio03.png";
import Bio04 from "../assets/images/bio04.png";

export const Bio1 = () => {
  return (
    <>
      <img
        src={Bio01}
        alt="Illustration of a person having a ligh tbulb instead of a head. Water drips through a faucet in the ligh bulb, watering a plant on the ground."
      />
      <div className="bio-details-container">
        <p>
          Almost a decade ago, I left the linguistics course at the University
          of Manchester to concentrate on Piquaboo, a small family business
          centered around a home decor private label.
        </p>
      </div>
    </>
  );
};

export const Bio2 = () => {
  return (
    <>
      <img
        src={Bio02}
        alt="Illustration of a snail with a helmet heading towards a finish line on a curvy track."
      />
      <div className="bio-details-container">
        <p>
          Things went well, and with the magic of the internet we expanded our
          customer base throughout Europe, and our supply network to Germany and
          China
          <br />
          <br />
          ...while creating relationships with collaborators and associates
          which have outlived the business.
        </p>
      </div>
    </>
  );
};

export const Bio3 = () => {
  return (
    <>
      <img
        src={Bio03}
        alt="Illustration of a fish with legs and arms, holding luggage and talking into a loudspeaker for a couple of ears with wings."
      />
      <div className="bio-details-container">
        <p>
          It was this complexity that drove me to the power and magic of coding.
          {/* eslint-disable-next-line prettier/prettier */}
          What choices do you have when you&apos;re all alone with 100+ column
          csv file?
          <br />
          <br />
          In time, I have devised my own bookkeeping and inventory solutions,
          mostly with Excel and VBA.
          <br />
          <br />
          It was highly addictive. Sometimes, business came in second place...
        </p>
      </div>
    </>
  );
};

export const Bio4 = () => {
  return (
    <>
      <img
        src={Bio04}
        alt="Illustration of a tree-like structure amde of light bulbs branching from each other."
      />
      <div className="bio-details-container">
        <p>
          Sometimes, things have their own way of working out. Some health
          {/* eslint-disable-next-line prettier/prettier */}
          issues convinced that it&apos;s time to review my life choices. So I
          gave up the business with few regrets, and took a well deserved break.
          <br />
          <br />
          Now that I am recovered, I finally pursuing programming and web
          development, something I should have done long ago.
          <br />
          <br />
          Wish me luck :)
        </p>
      </div>
    </>
  );
};
