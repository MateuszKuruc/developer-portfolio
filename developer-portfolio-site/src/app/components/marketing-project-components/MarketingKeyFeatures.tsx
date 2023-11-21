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

        <ul className="list-none p-4">
          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Website should be
                stable and fast
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Navigation should
                be effortless and intuitive
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Focus on mobile
                design
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Smooth animations
                included after each action, on page change and scrolling
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Accessibility
                should be taken into consideration
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Carousel and
                accordion items used to display key data
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Design should be
                stylish enough for the clients, but not overwhelming
              </p>
            </Reveal>
          </li>
        </ul>

        <Image
          src="/marketing_desktop_2.png"
          width={1200}
          height={763}
          alt="about me section on desktop"
          className="py-4 md:p-0"
        />
      </div>
    </>
  );
};

export default MarketingKeyFeatures;
