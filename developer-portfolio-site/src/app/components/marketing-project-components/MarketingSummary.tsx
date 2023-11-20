/* eslint-disable react/no-unescaped-entities */
import Reveal from "../animation-components/Reveal";

const MarketingSummary = () => {
  return (
    <>
      <div className="padding-container regular-18 py-8">
        <h2 className="bold-32-tight dark:text-orange-500 py-8 text-center md:text-left">
          Summary
        </h2>
        <Reveal>
          <div>
            <p className="">
              The marketing website is already deployed and used{" "}
              <strong>commercially</strong>, you can check this out (especially
              if you are looking for a marketing specialist). The app looks and
              works very well, with no complaints from users' side.
            </p>
            <p className="pt-4">
              This project pushed my understanding of modern web development to
              a new level. These days I am even more aware of notions like
              <strong> accessibility, performance </strong>or{" "}
              <strong>responsive design</strong>.
            </p>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default MarketingSummary;
