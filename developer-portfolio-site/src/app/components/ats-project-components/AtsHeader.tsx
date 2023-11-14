import React from "react";
import Image from "next/image";

const AtsHeader = () => {
  return (
    <>
      <div className="padding-container regular-18 flex flex-col md:flex-row justify-around">
        <div className="md:w-[50%]">
          <h2 className="bold-40 dark:text-orange-500 text-center md:text-left">
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
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="uppercase bold-20 pb-4">Stack</h3>
              <ul className="gap-4 regular-18 grid grid-cols-2 dark:text-orange-500">
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
            <div className="py-6 md:py-0">
              <h3 className="uppercase bold-20">Live</h3>
              <a target="_blank" href="placeholder">
                <p className="bold-20 text-orange-500 hover:text-orange-700">
                  View site
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center">
          <Image
            src="/project1_mobile_2.png"
            alt="ats app desktop screen"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default AtsHeader;
