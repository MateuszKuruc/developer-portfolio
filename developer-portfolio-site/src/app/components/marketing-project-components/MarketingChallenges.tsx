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
              click. With <strong>Framer Motion</strong>'s help I have also set
              up consistent page loading animations and text animations on
              scroll.
            </p>
          </div>
        </div>
        {/* Challenge 4 */}
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