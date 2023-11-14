/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const MarketingChallenges = () => {
  return (
    <>
      <div className="padding-container regular-18">
        <h2 className="bold-32-tight py-8 dark:text-orange-500 text-center md:text-left">
          Main Challenges
        </h2>
        <p>
          {/* The ATS project is quite extensive so, as an unexperienced developer,
          I faced plenty of challenges which pushed me in the right direction
          when it comes to further learning. To build the project in the way I
          imagined, I first needed to get solid grasp on{" "}
          <strong>React for state management</strong>, learn enough about
          backend to implement
          <strong> token-based authentication</strong> and handle requests, then
          add non-relational <strong>MongoDB</strong> database to the mix and
          learn about schemas. */}
          I put additional pressure for myself by using tools that I only had
          basic experience with before this project. While I had previously used
          <strong> TypeScript </strong> in one project and I have been working
          with <strong>React </strong> for some time,{" "}
          <strong>Next.js and Tailwind CSS </strong>were the tools that I only
          knew from documentation and tutorials.
        </p>
        {/* <p className="py-4">
          To sprinkle some extra flavour, I decided to implement{" "}
          <strong>AWS cloud</strong> for file management, which was completely
          out of scope for me before the project. To finish the app, I put my{" "}
          <strong>responsive design</strong> knowledge to test, and it was
          especially tricky because mobile apps usually aren't focused on
          displaying data, but I found some solutions to this.
        </p> */}
        {/* Challenge 1 */}
        <h3 className="bold-24 py-4 dark:text-orange-500">
          1. Responsive Design
        </h3>
        <p>
          While I have been following responsive design principles before, this
          time I really needed to do my best and think through all the use
          cases. The website needed to be{" "}
          <strong>fully intuitive and convenient</strong> even when loaded on
          small screen, as most of the client traffic comes from mobile devices.
          This is especially important when creating appplication for marketing
          field, where eye-catching design and{" "}
          <strong>smooth experience </strong>play major role. I have adjusted
          all the app sections for mobile screens by playing around with font
          and image sizes and components layout.
        </p>
        <p className="pt-4">
          Additional difficulty was using <strong>Tailwind CSS </strong>for the
          first time, but I got used to it very quickly and enjoyed the
          developer experience so much that it is now my favourite tool used for
          styling.
        </p>
        {/* Challenge 2 */}
        <div className="flex flex-col md:flex-row md:justify-around py-4">
          <Image
            src="/project1_mobile_3.png"
            alt="mobile screen"
            width={300}
            height={300}
            className="self-center"
          />
          <div className="md:w-[50%]">
            <h3 className="bold-24 py-9 md:py-4 dark:text-orange-500">
              2. Contact form
            </h3>
            Contact form is the central piece of marketing sites and needs to be
            designed flawlessly to:
            <ul className="list-disc p-4">
              <li>
                Validate the text fields even before the user is sending form
              </li>
              <li>Show visual indication of errors</li>
              <li>
                Work quickly and show confirmation of message sent or
                notification about error if it happens
              </li>
            </ul>
            <p>
              I used the combo of Formik and Yup for form management and
              validation to adjust it to the user's and owner's expectations and
              ensure seamless experience and 100% clarity.
            </p>
            <p className="pt-4">
              Another challenge was to design a solution for sending the email
              with user data to the website owner's email address. I decided to
              write <strong>Backend API in Next.js </strong>and implement{" "}
              <strong>Nodemailer </strong> to handle form content, style it and
              send it automatically to a predefined email.
            </p>
            {/* Challenge 3 */}
            <h3 className="bold-24 py-8 md:py-4 dark:text-orange-500">
              3. Animations
            </h3>
            <p>My focus was on providing</p>
            <p className="pt-4">
              Moreover, I studied which design patterns I should follow when
              writing my React components, so I can <strong>reuse</strong> them
              throughout my application and{" "}
              <strong>avoid code duplication</strong>. I am especially proud of
              this part, as some of my React components were responsible for
              rendering <strong>multiple different subpages </strong>
              depending on the data passed to them - this really made me
              understand biggest strength of React.
            </p>
          </div>
        </div>
        {/* Challenge 4 */}
        <h3 className="bold-24 py-8 md:py-4 dark:text-orange-500">
          4. Performance and accessibility
        </h3>
        <p>

        My focus was on providing
        </p>
        <p className="py-4">
          As my styling tools, I chose the combination of{" "}
          <strong>Material UI and Styled Components</strong>. While Material UI
          gives some guidance in terms of theme, styling and general design,
          Styled components make everything easily adjustable on component by
          component basis. All in all, I am happy with the final result and how
          the app looks and works across all screen sizes. It can be comfortably
          used on huge monitors and mobile phones alike.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <Image
            src="/project1_desktop_2.png"
            width={1000}
            height={800}
            alt="project screen"
          />
          <Image
            src="/project1_mobile_4.png"
            width={300}
            height={300}
            alt="mobile screen"
          />
        </div>
      </div>
    </>
  );
};

export default MarketingChallenges;
