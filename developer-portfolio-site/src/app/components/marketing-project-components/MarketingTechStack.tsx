/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Reveal from "../animation-components/Reveal";

const MarketingTechStack = () => {
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
                As I had complete freedom when it comes to technologies used, I
                opted for Next.js framework as the main tool. The first reason
                is that the application is not backend-heavy, I just needed
                simple requests for handling contact form for clients. The
                second reason is that Next provides firm project structure which
                is very intuitive and provides pleasant developer experience.
              </p>
              <p className="py-4">
                Apart from that, I wanted to deepen my understanding of both{" "}
                <strong>Next.js and TypeScript</strong>, and these two tools go
                hand-in-hand and are relatively easy to set up.
              </p>
            </div>
            <div className="flex md:w-[50%] justify-around pt-4 md:pt-0">
              <Image
                src="/nextjs.svg"
                width={100}
                height={30}
                alt="nextjs icon"
                className="dark:invert"
              />
              <Image
                src="/typescript.svg"
                width={100}
                height={30}
                alt="typescript icon"
              />
            </div>
          </div>
        </Reveal>

        {/* Section 2 */}
        <Reveal>
          <div className="flex flex-col-reverse md:flex-row py-8 items-center">
            <div className="md:flex md:w-[50%] md:justify-around grid grid-cols-2 items-center gap-12 pt-8 md:pt-0">
              <Image
                src="/tailwind.svg"
                width={100}
                height={30}
                alt="nodejs icon"
              />
              <Image
                src="/framer-motion.svg"
                width={100}
                height={30}
                alt="express icon"
              />
            </div>
            <div className="md:w-[50%]">
              <p>
                For general styling, I decided to use{" "}
                <strong>Tailwind CSS </strong>for this project. Before that, I
                have mainly worked with Material UI, Styled Components and SASS,
                but I wanted to have exposure to another popular tool. Also,
                Tailwind's integration with Next.js projects is seamless.
              </p>
              <p className="py-4">
                The website uses a lot of animations, so using{" "}
                <strong>Framer Motion </strong>was a no-brainer, as this is the
                most popular tool for creating cohesive animations throughout
                the project.
              </p>
            </div>
          </div>
        </Reveal>
        {/* Section 3 */}
        <Reveal>
          <div className="flex flex-col md:flex-row py-8">
            <div className="md:w-[50%]">
              <p>
                The heart of the website is the <strong>contact form</strong>,
                so I needed to execute it well and provide{" "}
                <strong>clear guidance </strong>to the user who interacts with
                it. My tool of choice was <strong>Formik </strong>library, which
                makes form state management and form validation easier, while
                still allowing customization.
              </p>
              <p className="py-4">
                <strong>Yup </strong>works great with Formik for validation
                purposes and displaying errors, so I decided to pair them.
                Additionally, I used <strong>Nodemailer </strong>on the backend
                to handle contact form data and <strong>automatically </strong>{" "}
                send an email to the website owner whenever the client uses
                contact form.
              </p>
            </div>

            <div className="flex md:w-[50%] justify-around pt-4 md:pt-0">
              <Image
                src="/formik.svg"
                width={100}
                height={30}
                alt="formik icon"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default MarketingTechStack;
