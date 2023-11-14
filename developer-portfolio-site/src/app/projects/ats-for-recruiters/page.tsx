/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AtsHeader from "@/app/components/ats-project-components/AtsHeader";
import AtsKeyFeatures from "@/app/components/ats-project-components/AtsKeyFeatures";
import AtsTechStack from "@/app/components/ats-project-components/AtsTechStack";
import AtsChallenges from "@/app/components/ats-project-components/AtsChallenges";
import AtsSummary from "@/app/components/ats-project-components/AtsSummary";

const AtsPage = () => {
  return (
    <section className="content-container py-12">
      {/* main header and stack */}
      {/* <div className="flex flex-col justify-around md:flex-row items-center py-4"> */}

      <AtsHeader />

      {/* <div className="padding-container regular-18 flex justify-around">
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
      </div> */}

      <AtsKeyFeatures />

      {/* project goals */}
      {/* <div className="padding-container regular-18">
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
      </div> */}
      {/* Tech stack choices */}
      {/* <div className="padding-container regular-18 border-b-2 border-t-2 py-8">
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
      </div> */}

      <AtsTechStack />

      <AtsChallenges />
      <AtsSummary />

      {/* <div className="padding-container regular-18">
        <h2 className="bold-32-tight">Summary</h2>
        <p className="py-4">
          The ATS app is now finished and deployed, so you can take it for a
          test drive yourself! This is a project that taught me much more than I
          initially anticipated, as I kept adding new features, rewriting code,
          learning new tools and adjusting the design. Honestly, I enjoyed this
          bumpy development road even, though some technical problems took me
          days to come up with solutions. Hopefully you like the end result!
        </p>
      </div> */}
    </section>
  );
};

export default AtsPage;
