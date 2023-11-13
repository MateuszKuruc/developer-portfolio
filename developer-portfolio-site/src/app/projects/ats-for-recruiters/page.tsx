import Image from "next/image";
import React from "react";

const AtsPage = () => {
  return (
    <section className="content-container py-12">
      {/* main header and stack */}
      <div className="flex flex-col md:flex-row border-2 justify-around items-center py-4">
        <div className="padding-container max-w-[800px]">
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
            <div className="">
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
        <Image
          src="/project1_mobile_2.png"
          alt="ats app desktop screen"
          width={300}
          height={300}
        />
      </div>
      {/* project goals */}
      <div className="padding-container regular-18">
        <h2 className="bold-32-tight py-4">Key features</h2>
        <p>
          My intention was to build a robust system, similar to the ones I
          encountered in my work in the IT recruitment, simplifying the control
          of recruitment stages for all candidates that are being actively
          processed.
        </p>
        <p>Key features include:</p>
        <ul className="list-disc">
          <li>logging in, token-based authentication</li>
          <li>adding, editing and deleting candidate profiles</li>
          <li>uploading, downloading and deleting files</li>
          <li>displaying sorted tables of candidates and their statistics</li>
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
            <p>
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
            />
            <Image src="/aws-icon.svg" width={100} height={30} alt="aws icon" />
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
            <p>
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
            <p>
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
            />
          </div>
        </div>
      </div>

      {/* Project challenges */}
      <div className="padding-container regular-18">
        <h2 className="bold-32-tight py-4">Main Challenges</h2>
        <p>
          During the time I worked on the project I faced multiple problems that
          needed solving, which ultimately forced me to learn a lot about the
          tools I used for the project.
        </p>
        {/* Challenge 1 */}
        <h3 className="bold-24 py-4">1. State management</h3>
        <p>
          One of the obstacles was that I wanted to make all data in the app
          easily editable. This was a demanding task, as there are a few
          different sections where separate parts of candidates' profiles can be
          edited. For example, when the candidate profile is initially created
          it only includes basic details, but at a later stage the user can
          provide additional data (like notes, assessment, notice period etc.)
          or edit the data that already exists and all the fields need to have
          options to:
        </p>
        <ul className="list-disc">
          <li>edit existing data and save it</li>
          <li>start editing the data, but cancel and restore previous data</li>
          <li>
            upload or delete file on candidate's profile and refresh the state
          </li>
        </ul>
        To make these actions possible, I needed to set up Redux store, which
        let me take control of the state management across the components that
        my application consists of. Additionally, I needed to handle request to
        the backend server (written in NodeJS) which then interacted with
        non-relational database (MongoDB) to retrieve, edit or save data
        accordingly when the user performed actions on client-side.
        {/* Challenge 2 */}
        <div className="flex flex-col md:flex-row md:justify-around border-2 py-4">
          <Image
            src="/project1_mobile_3.png"
            alt="mobile screen"
            width={300}
            height={300}
            className="self-center"
          />
          <div className="max-w-[800px]">
            <h3 className="bold-24 py-4">
              2. File upload, download and delete
            </h3>
            Possibly the toughest situation for me was introducing options for
            working on files in each candidate's profile. I decided to make use
            of <strong>AWS</strong> for a few reasons:
            <ul className="list-disc">
              <li>
                I wanted to gain practical experience with cloud solutions
              </li>
              <li>Knowledge about AWS is very in-demand in current market</li>
              <li>It is free if you do not exceed storage limits</li>
            </ul>
            Ultimately, I went with <strong>AWS S3</strong> and managed to
            integrate functionalities for instant uploading, downloading and
            deleting pdf and doc files for each profile. On backend side I used{" "}
            <strong>Multer</strong>library to handle files sent from client side
            and upload them to my <strong>AWS S3 storage</strong>. On the
            frontend side, I restricted users to only upload pdf or doc files,
            prepared requests for all actions (upload/download/delete) and set
            up state management to instantly reflect changes to candidate's
            profile.
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
            <p>
              Moreover, I studied which design patterns I should follow when
              writing my React components, so I can <strong>reuse</strong> them
              throughout my application and{" "}
              <strong>avoid code duplication</strong>. I am especially proud of
              this part, as e.g. one of my React components was responsible for
              rendering <strong>9 different subpages </strong>
              depending on the data that was passed to it - this really made me
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
        <p>
          As my styling tools, I chose the combination of Material UI and Styled
          components. While Material UI gives some guidance in terms of theme,
          styling and general design, Styled components make everything easily
          adjustable on component by component basis.
          <p>
            All in all, I am happy with the final result and how the app looks
            and works across all screen sizes. It can be comfortably used on
            huge monitors and mobile phones alike.
          </p>
        </p>
      </div>
    </section>
  );
};

export default AtsPage;
