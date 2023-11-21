/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Reveal from "../animation-components/Reveal";

const MarketingChallenges = () => {
  return (
    <>
      <div className="padding-container regular-18">
        <h2 className="bold-32-tight py-8 dark:text-orange-500 text-center md:text-left">
          Main Challenges
        </h2>
        <p>
          I put additional pressure for myself by using tools that I only had
          basic experience with before this project. While I had previously used
          <strong> TypeScript </strong> in one project and I have been working
          with <strong>React </strong> for some time,{" "}
          <strong>Next.js and Tailwind CSS </strong>were the tools that I only
          knew from documentation and tutorials.
        </p>

        {/* Challenge 1 */}
        <Reveal>
          <div>
            <h3 className="bold-24 py-4 dark:text-orange-500">
              1. Responsive Design
            </h3>
            <p>
              While I have been following responsive design principles before,
              this time I really needed to do my best and think through all the
              use cases. The website needed to be{" "}
              <strong>fully intuitive and convenient</strong> even when loaded
              on small screen, as most of the client traffic comes from mobile
              devices. This is especially important when creating appplication
              for marketing field, where eye-catching design and{" "}
              <strong>smooth experience </strong>play major role. I have
              adjusted all the app sections for mobile screens by playing around
              with font and image sizes and components layout.
            </p>
            <p className="pt-4">
              Additional difficulty was using <strong>Tailwind CSS </strong>for
              the first time, but I got used to it very quickly and enjoyed the
              developer experience so much that it is now my favourite tool used
              for styling.
            </p>
          </div>
        </Reveal>
        {/* Challenge 2 */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:justify-around py-4">
            <Image
              src="/marketing_mobile_3.png"
              alt="contact form validation mobile screen"
              width={300}
              height={598}
              className="self-center"
            />
            <div className="md:w-[50%]">
              <h3 className="bold-24 py-9 md:py-4 dark:text-orange-500">
                2. Contact form
              </h3>
              Contact form is the central piece of marketing sites and needs to
              be designed flawlessly to:
              <ul className="list-none p-4">
                <li>
                  <Reveal>
                    <p>
                      <span className="bold-18 mr-2">&#x2022;</span>Validate the
                      text fields even before the user is sending form
                    </p>
                  </Reveal>
                </li>

                <li>
                  <Reveal>
                    <p>
                      <span className="bold-18 mr-2">&#x2022;</span>Show visual
                      indication of errors
                    </p>
                  </Reveal>
                </li>

                <li>
                  <Reveal>
                    <p>
                      <span className="bold-18 mr-2">&#x2022;</span>Work quickly
                      and show confirmation of message sent
                    </p>
                  </Reveal>
                </li>

                <li>
                  <Reveal>
                    <p>
                      <span className="bold-18 mr-2">&#x2022;</span>Display
                      notification about error if the request fails
                    </p>
                  </Reveal>
                </li>
              </ul>
              <p>
                I used the combo of Formik and Yup for form management and
                validation to adjust it to the user's and owner's expectations
                and ensure seamless experience and 100% clarity.
              </p>
              <p className="pt-4">
                Another challenge was to design a solution for sending the email
                with user data to the website owner's email address. I decided
                to write <strong>Backend API in Next.js </strong>and implement{" "}
                <strong>Nodemailer </strong> to handle form content, style it
                and send it automatically to a predefined email.
              </p>
              {/* Challenge 3 */}
              <h3 className="bold-24 py-8 md:py-4 dark:text-orange-500">
                3. Animations
              </h3>
              <p>
                Animations were key to creating a modern look and positive user
                experience. I made sure to include a few interactive elements in
                the application to present data in a compelling way.
              </p>
              <p className="pt-4">
                {/* <p> */}
                <strong>Image carousel </strong>is used for showcasing the
                client's logos, while <strong>Accordion component </strong>is a
                slick way to <em>hide and show </em>case studies' details on
                click. With <strong>Framer Motion</strong>'s help I have also
                set up consistent page loading animations and text animations on
                scroll.
              </p>
            </div>
          </div>
        </Reveal>
        {/* Challenge 4 */}

        <Reveal>
          <div>
            <h3 className="bold-24 py-8 md:py-4 dark:text-orange-500">
              4. Performance and accessibility
            </h3>
            <p>
              My goal was to build a website that will perform well and
              consistently. Even though the app is not large, I decided to
              appropriately split code into components for both clarity and
              performance.
            </p>
            <p className="py-4">
              This project was the first one where I consciously thought about{" "}
              <strong>semantic HTML</strong> and <strong>Accessibility </strong>
              topics. All the interactive elements have{" "}
              <strong>aria labels </strong>or statuses, and the images have alt
              property with apt content description.
            </p>
            <div className="flex flex-col 2xl:flex-row justify-around items-center">
              <Image
                src="/marketing_desktop_3.png"
                width={1000}
                height={636}
                alt="page contact form desktop screen"
              />
              <Image
                src="/marketing_performance.png"
                width={300}
                height={598}
                alt="page performance results"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default MarketingChallenges;
