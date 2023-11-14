/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const AtsPage = () => {
  return (
    <section className="content-container py-12">
      {/* main header and stack */}
      {/* <div className="flex flex-col justify-around md:flex-row items-center py-4"> */}
      <div className="padding-container regular-18 flex justify-around">
        <div className="w-[50%]">
          <h2 className="bold-40">
            Applicant Tracking System for IT recruiters
          </h2>
          <p className="regular-18 py-8">
            This is a full-fledged app which streamlines the recruitment process
            for IT professionals. I have built this project from scratch on my
            own and am responsible for handling graphic design, backend,
            frontend, database and cloud integration. The app was written with
            modern tools and is adjusted to the needs of recruiters based on my
            experience in this position.
          </p>
          <div className="flex justify-between">
            <div>
              <h3 className="uppercase bold-20 pb-4">Stack</h3>
              <ul className="gap-4 regular-18 grid grid-cols-2">
                <li>React</li>
                <li>Redux</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>AWS</li>
                <li>MongoDB</li>
                <li>Material UI</li>
                <li>Styled components</li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase bold-20">Live</h3>
              <a target="_blank" href="placeholder">
                <p className="bold-20 text-orange-500">View site</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <Image
            src="/project1_mobile_2.png"
            alt="ats app desktop screen"
            width={300}
            height={300}
          />
        </div>
      </div>
      {/* project goals */}
      <div className="padding-container regular-18">
        <h2 className="bold-32-tight py-4">Key features</h2>
        <p>
          My aim was to build a robust recruitment system, similar to the ones I
          encountered in my work as IT recruiter. I wanted the tool to simplify
          the recruitment process on the recruiter side, conveniently divide
          candidates into categories and ensure that each recruiter only has
          only got access to their own candidates and statistics.
        </p>
        <p className="bold-20 py-4">Key features include:</p>
        <ul className="list-disc p-4">
          <li>login with token-based authentication</li>
          <li>adding, updating and deleting candidate profiles</li>
          <li>uploading, downloading and deleting files</li>
          <li>
            displaying sorted data related to candidate profiles and statistics
          </li>
          <li>responsive design</li>
        </ul>
        <Image
          src="/project1_desktop_3.png"
          width={1200}
          height={800}
          alt="project desktop screen"
        />
      </div>
      {/* Tech stack choices */}
      <div className="padding-container regular-18 border-b-2 border-t-2 py-8">
        <h2 className="bold-32-tight">Tech stack choices</h2>

        <div className="flex py-8">
          <div className="w-[50%]">
            <p>
              The selection of tools was deliberate and thought out with the aim
              to write a modern app with the least amount of duplicate code when
              it comes to logic, with responsive design and functionality of
              efficiently handling client state while also allowing for file
              management.
            </p>
            <p className="py-4">
              React came in handy and helped me neatly divide app in logical
              chunks and provide opportunity to
              <strong> reuse a lot of code</strong> with appropriate component
              design. For client-side state management, I relied on{" "}
              <strong>React hooks and Redux store</strong>.
            </p>
          </div>
          <div className="flex w-[50%] justify-around">
            <Image src="/react.svg" width={100} height={30} alt="react icon" />
            <Image src="/redux.svg" width={100} height={30} alt="redux icon" />
          </div>
        </div>

        <div className="flex py-8">
          <div className="flex w-[50%] justify-around">
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
          <div className="w-[50%]">
            <p>
              Backend side was set up with <strong>NodeJS</strong> runtime and{" "}
              <strong>Express</strong> library, which allowed me to stay within
              JavaScript system for both client and server side code. I opted
              for <strong>MongoDB</strong> as non-relational database, which was
              more than enough for the purpose of storing, editing and
              retrieving candidate data.
            </p>
            <p className="py-4">
              On top of that, I learned a state-of-the-art cloud technology in
              <strong> Amazon Web Services</strong>, allowing me to leverage
              their S3 tool to handle file management for my application. It was
              my attempt to add <em>something extra</em> to the application's
              funcitonality and tech stack used.
            </p>
          </div>
        </div>

        <div className="flex py-8">
          <div className="w-[50%]">
            <p>
              The choice of <strong>Material UI</strong> was made in order to
              keep the coherent and harmonious design for the whole app, easily
              manage theme and styling of repetitive elements. Thanks to MUI
              components, putting the layout in place was rather intuitive.
            </p>
            <p className="py-4">
              <strong>Styled components</strong> were added to the mix to allow
              for more freedom and organisation when it comes to styling
              individual components.
            </p>
          </div>

          <div className="flex w-[50%] justify-around">
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
      </div>

      {/* Project challenges */}
      <div className="padding-container regular-18">
        <h2 className="bold-32-tight py-4">Main Challenges</h2>
        <p>
          The ATS project is quite extensive so, as an unexperienced developer,
          I faced plenty of challenges which pushed me in the right direction
          when it comes to further learning. To build the project in the way I
          imagined, I first needed to get solid grasp on React for state
          management, learn enough about backend to implement token-based
          authentication and handle requests, then add non-relational MongoDB
          database to the mix and learn about schemas.
        </p>
        <p className="py-4">
          To sprinkle some extra flavour, I decided to implement AWS cloud for
          file management, which was completely out of scope for me before the
          project. To finish the app, I put my responsive design knowledge to
          test, and it was especially tricky because mobile apps usually aren't
          focused on displaying data, but I found some solutions to this.
        </p>
        {/* Challenge 1 */}
        <h3 className="bold-24 py-4">1. State management</h3>
        <p>
          Of course, I wanted to make all data in the app easily editable. This
          was a demanding task, as there are a few different app sections where
          separate parts of candidates' profiles can be updated. For example,
          when the candidate profile is initially created it only includes basic
          details, but at a later stage the user can provide additional data
          (e.g. extended feedback) or update the data that already exists.
        </p>
        <p className="py-4">All the fields need to present options to:</p>
        <ul className="list-disc p-4">
          <li>edit existing data and save it</li>
          <li>start editing the data, but cancel and restore previous data</li>
          <li>
            upload or delete file on candidate's profile and refresh the state
          </li>
        </ul>
        To make these actions possible, I needed to set up{" "}
        <strong>Redux store</strong>, which let me take control of the state
        management across the components that my application consists of.
        Additionally, I needed to handle request to the backend server (built in
        NodeJS) which then interacted with non-relational database (MongoDB) to
        retrieve, edit or save data accordingly when the user performed actions
        on client-side.
        {/* Challenge 2 */}
        <div className="flex flex-col md:flex-row md:justify-around py-4">
          <Image
            src="/project1_mobile_3.png"
            alt="mobile screen"
            width={300}
            height={300}
            className="self-center"
          />
          <div className="w-[50%]">
            <h3 className="bold-24 py-4">
              2. File upload, download and delete
            </h3>
            Possibly the toughest situation for me was introducing options for
            working on files in each candidate's profile. I decided to make use
            of <strong>AWS</strong> for a few reasons:
            <ul className="list-disc p-4">
              <li>
                I wanted to gain practical experience with cloud solutions
              </li>
              <li>Knowledge about AWS is very in-demand in current market</li>
              <li>It is free if you do not exceed storage limits</li>
            </ul>
            <p>
              Ultimately, I went with <strong>AWS S3</strong> and managed to
              integrate functionalities for instant uploading, downloading and
              deleting pdf and doc files for each profile. On backend side I
              used <strong>Multer</strong> library to handle files sent from
              client side and upload them to my <strong>AWS S3 storage</strong>.
            </p>
            <p className="pt-4">
              On the frontend side, I restricted users to only upload pdf or doc
              files, prepared requests for all actions (upload/download/delete)
              and set up state management to instantly reflect changes to
              candidate's profile.
            </p>
            {/* Challenge 3 */}
            <h3 className="bold-24 py-4">
              3. Project structure and components reusability
            </h3>
            <p>
              Since this is by far the biggest project I worked on, I had to
              learn how to manage project folders, files and components so that
              updates can be made intuitively and the{" "}
              <strong>components are as reusable as possible</strong>. I tried
              to incorporate best practises when it comes to folder structure on
              both backend and frontend side and use universally accepted naming
              conventions for clarity.
            </p>
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
        <h3 className="bold-24 py-4">4. Responsive design and styling</h3>
        My goal was to strike a balance between a <em>
          nice looking app
        </em> and <em>functional, easy to use app</em>. This was especially
        difficult because the ATS app uses tables, forms and text fields
        everywhere, and they are not the easiest to style for mobile phone use.
        I decided to introduce additional switching of display mode in a few
        tabs to make the tables easier to display on the smaller, mobile screen.
        <p className="py-4">
          As my styling tools, I chose the combination of{" "}
          <strong>Material UI and Styled Components</strong>. While Material UI
          gives some guidance in terms of theme, styling and general design,
          Styled components make everything easily adjustable on component by
          component basis. All in all, I am happy with the final result and how
          the app looks and works across all screen sizes. It can be comfortably
          used on huge monitors and mobile phones alike.
        </p>
        <div className="flex justify-around">
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

      <div className="padding-container regular-18">
        <h2 className="bold-32-tight">Summary</h2>
        <p className="py-4">
          The ATS app is now finished and deployed, so you can take it for a
          test drive yourself! This is a project that taught me much more than I
          initially anticipated, as I kept adding new features, rewriting code,
          learning new tools and adjusting the design. Honestly, I enjoyed this
          bumpy development road even, though some technical problems took me
          days to come up with solutions. Hopefully you like the end result!
        </p>
      </div>
    </section>
  );
};

export default AtsPage;
