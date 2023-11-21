import React from "react";
import Image from "next/image";
import Reveal from "../animation-components/Reveal";

const AtsKeyFeatures = () => {
  return (
    <>
      <div className="padding-container regular-18 py-12">
        <h2 className="bold-32-tight py-4 dark:text-orange-500 text-center md:text-left">
          Key features
        </h2>
        <p>
          My aim was to build a robust recruitment system, similar to the ones I
          encountered in my work as IT recruiter. I wanted the tool to simplify
          the recruitment process on the recruiter side, conveniently divide
          candidates into categories and ensure that each recruiter only has
          only got access to their own candidates and statistics.
        </p>
        <p className="bold-20 py-4">Key features include:</p>

        <ul className="list-none p-4">
          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Login with
                token-based authentication
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Adding, updating
                and deleting candidate profiles
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Uploading,
                downloading and deleting files
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Displaying sorted
                data related to candidate profiles and statistics
              </p>
            </Reveal>
          </li>

          <li>
            <Reveal>
              <p>
                <span className="bold-18 mr-2">&#x2022;</span>Responsive design
              </p>
            </Reveal>
          </li>
        </ul>
        <Image
          src="/ats_desktop_2.png"
          width={1200}
          height={763}
          alt="ats desktop candidate details page"
          className="py-4 md:p-0"
        />
      </div>
    </>
  );
};

export default AtsKeyFeatures;
