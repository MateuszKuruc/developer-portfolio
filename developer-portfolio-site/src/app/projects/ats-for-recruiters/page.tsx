import React from "react";

const AtsPage = () => {
  return (
    <section className="content-container">
      {/* main header and stack */}
      <div className="padding-container max-w-[800px]">
        <h2 className="bold-40">Applicant Tracking System for IT recruiters</h2>
        <p className="regular-18 py-8">
          This is a full-fledged app for recruiters working in the IT field. I
          have built this project from scratch on my own and am responsible for
          graphic design, backend, frontend, database and cloud integration. The
          app was written with modern tools and adjusted to the needs of
          recruiters based on my experience in this position.
        </p>
        <div className="flex justify-between">
          <div>
            <h3 className="uppercase bold-20">Stack</h3>
            <ul className="flex flex-col gap-4 regular-18">
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

      {/* project goals */}
      <div className="padding-container">
        <h2 className="bold-32-tight">Project goals</h2>
        <p className="regular-18">
          My intention was to build a complex system, similar to the ones I
          encountered in my work as IT recruiter, that would make it easier to
          control the recruitment stages for the candidates that are currently
          being processed.
        </p>
      </div>

      {/* Project challenges */}

      <div className="padding-container">
        <h2 className="bold-32-tight">Challenges</h2>
        <p className="regular-18">
          During the time I worked on the project I faced multiple problems that
          needed solving, which ultimately forced me to learn a lot about the
          tools I used for the project.
        </p>
        <h3 className="bold-24">1. Real time updates</h3>
        <p className="regular-18">One of the obstacles was that I wanted to make all data in the app easily editable. This was a demanding task, as there are a few different places where separate parts of candidates' profiles are being edited. For example, when the candidate profile is initially created it only includes basic details, but at a later stage the user can provide additional data (like notes, assessment, notice period etc.) or edit the data that already exists and all the fields need to have options to:</p>
        <ul>
            <li>edit existing data and save it</li>
            <li>start editing the data, but cancel and restore previous data</li>
            <li></li>
        </ul>
      </div>

      {/* Tech stack choices */}
    </section>
  );
};

export default AtsPage;
