import React from "react";
import Image from "next/image";

const AtsKeyFeatures = () => {
  return (
    <>
      <div className="padding-container regular-18">
        <h2 className="bold-32-tight py-4 dark:text-orange-500">
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
        <ul className="list-disc p-4">
          <li>Login with token-based authentication</li>
          <li>Adding, updating and deleting candidate profiles</li>
          <li>Uploading, downloading and deleting files</li>
          <li>
            Displaying sorted data related to candidate profiles and statistics
          </li>
          <li>Responsive design</li>
        </ul>
        <Image
          src="/project1_desktop_3.png"
          width={1200}
          height={800}
          alt="project desktop screen"
        />
      </div>
    </>
  );
};

export default AtsKeyFeatures;
