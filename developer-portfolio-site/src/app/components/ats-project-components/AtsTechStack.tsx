/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Reveal from "../animation-components/Reveal";

const AtsTechStack = () => {
  return (
    <>
      <div className="padding-container regular-18 border-b-2 border-t-2 py-8">
        <h2 className="bold-32-tight dark:text-orange-500 text-center md:text-left">
          Tech stack choices
        </h2>

        {/* Section 1 */}
        <Reveal>
          <div className="flex flex-col md:flex-row py-8">
            <div className="md:w-[50%]">
              <p>
                The selection of tools was deliberate and thought out with the
                aim to write a modern app with the least amount of duplicate
                code when it comes to logic, with responsive design and
                functionality of efficiently handling client state while also
                allowing for file management.
              </p>
              <p className="py-4">
                React came in handy and helped me neatly divide app in logical
                chunks and provide opportunity to
                <strong> reuse a lot of code</strong> with appropriate component
                design. For client-side state management, I relied on{" "}
                <strong>React hooks and Redux store</strong>.
              </p>
            </div>
            <div className="flex md:w-[50%] justify-around pt-4 md:pt-0">
              <Image
                src="/react.svg"
                width={100}
                height={30}
                alt="react icon"
              />
              <Image
                src="/redux.svg"
                width={100}
                height={30}
                alt="redux icon"
              />
            </div>
          </div>
        </Reveal>

        {/* Section 2 */}
        <Reveal>
          <div className="flex flex-col-reverse md:flex-row py-8 items-center">
            <div className="md:flex md:w-[50%] md:justify-around grid grid-cols-2 items-center gap-12 pt-8 md:pt-0">
              <Image
                src="/nodejs.svg"
                width={100}
                height={30}
                alt="nodejs icon"
              />
              <Image
                src="/express.svg"
                width={100}
                height={30}
                alt="express icon"
                className="dark:invert"
              />
              <Image
                src="/aws-icon.svg"
                width={100}
                height={30}
                alt="aws icon"
                className="dark:invert"
              />
              <Image
                src="/mongodb.svg"
                width={100}
                height={30}
                alt="mongodb icon"
              />
            </div>
            <div className="md:w-[50%]">
              <p>
                Backend side was set up with <strong>NodeJS</strong> runtime and{" "}
                <strong>Express</strong> library, which allowed me to stay
                within JavaScript system for both client and server side code. I
                opted for <strong>MongoDB</strong> as non-relational database,
                which was more than enough for the purpose of storing, editing
                and retrieving candidate data.
              </p>
              <p className="py-4">
                On top of that, I learned a state-of-the-art cloud technology in
                <strong> Amazon Web Services</strong>, allowing me to leverage
                their S3 tool to handle file management for my application. It
                was my attempt to add <em>something extra</em> to the
                application's funcitonality and tech stack used.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Section 3 */}
        <Reveal>
          <div className="flex flex-col md:flex-row py-8">
            <div className="md:w-[50%]">
              <p>
                The choice of <strong>Material UI</strong> was made in order to
                keep the coherent and harmonious design for the whole app,
                easily manage theme and styling of repetitive elements. Thanks
                to MUI components, putting the layout in place was rather
                intuitive.
              </p>
              <p className="py-4">
                <strong>Styled components</strong> were added to the mix to
                allow for more freedom and organisation when it comes to styling
                individual components.
              </p>
            </div>

            <div className="flex md:w-[50%] justify-around pt-4 md:pt-0">
              <Image src="/mui.svg" width={100} height={30} alt="mui icon" />
              <Image
                src="/styled-components.svg"
                width={100}
                height={30}
                alt="styled components icon"
                className="dark:invert"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default AtsTechStack;
