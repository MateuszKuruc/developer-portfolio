import Image from "next/image";
import Reveal from "../animation-components/Reveal";

const MarketingKeyFeatures = () => {
  return (
    <>
      <div className="padding-container regular-18 py-12">
        <h2 className="bold-32-tight py-4 dark:text-orange-500 text-center md:text-left">
          Project goals
        </h2>
        <p>
          My job was to create graphic design for the website, prepare color
          palette, build the whole application and deploy it. I took this
          project as opportunity to learn Next.js and brush up on my TypeScript
          skills.
        </p>
        <p className="bold-20 py-4">Main requirements:</p>
        <ul className="list-disc p-4">
          <Reveal>
            <li className="ml-6">Website should be stable and fast</li>
          </Reveal>
          <Reveal>
            <li className="ml-6">
              Navigation should be effortless and intuitive
            </li>
          </Reveal>
          <Reveal>
            <li className="ml-6">Focus on mobile design</li>
          </Reveal>
          <Reveal>
            <li className="ml-6">
              Smooth animations included after each action, on page change and
              scrolling
            </li>
          </Reveal>
          <Reveal>
            <li className="ml-6">
              Accessibility should be taken into consideration
            </li>
          </Reveal>
          <Reveal>
            <li className="ml-6">
              Carousel and accordion items used to display key data
            </li>
          </Reveal>
          <Reveal>
            <li className="ml-6">
              Design should be stylish enough for the clients, but not
              overwhelming
            </li>
          </Reveal>
        </ul>
        <Image
          src="/project1_desktop_3.png"
          width={1200}
          height={800}
          alt="project desktop screen"
          className="py-4 md:p-0"
        />
      </div>
    </>
  );
};

export default MarketingKeyFeatures;
