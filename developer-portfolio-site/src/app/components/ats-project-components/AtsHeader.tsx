import React from "react";
import Image from "next/image";
import Reveal from "../animation-components/Reveal";

const AtsHeader = () => {
  return (
    <>
      <div className="padding-container regular-18 flex flex-col md:flex-row justify-around">
        <div className="md:w-[50%]">
          <h2 className="bold-40 dark:text-orange-500 text-center md:text-left">
            Applicant Tracking System for IT recruiters
          </h2>
          {/* <Reveal> */}

          <p className="regular-18 py-8">
            This is a full-fledged app which streamlines the recruitment process
            for IT professionals. I have built this project from scratch on my
            own and am responsible for handling graphic design, backend,
            frontend, database and cloud integration. The app was written with
            modern tools and is adjusted to the needs of recruiters based on my
            experience in this position.
          </p>
          {/* </Reveal> */}
          <div className="flex flex-col md:flex-row justify-between">
            <Reveal>
              <div>
                <h3 className="uppercase bold-20 pb-4">Stack</h3>
                <ul className="gap-4 regular-18 grid grid-cols-2 dark:text-orange-500">
                  <li>React</li>
                  <li>Redux</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>AWS</li>
                  <li>MongoDB</li>
                  <li>Styled components</li>
                  <li>Material UI</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="py-6 md:py-0 md:p-2">
                <h3 className="uppercase bold-20">Live</h3>
                <a
                  target="_blank"
                  href="https://ats-mateuszkuruc.onrender.com/"
                  rel="noopener noreferrer"
                  // aria-label="ats project page"
                >
                  <p className="bold-20 text-orange-600 dark:text-orange-500 hover:text-orange-700 hover:scale-105 ease-in-out duration-300">
                    View site
                  </p>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center">
          <Image
            src="/ats_mobile_2.png"
            alt="ats app mobile feedback screen"
            width={300}
            height={598}
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default AtsHeader;
