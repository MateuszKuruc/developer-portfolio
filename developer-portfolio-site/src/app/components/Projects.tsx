import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="content-container border-t-2 border-b-2 bg-white dark:bg-gray-950 my-20">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="max-w-[400px] md:max-w-[600px] relative">
          <Image
            src="/project1_desktop_1.png"
            alt="ATS project desktop screen"
            width={600}
            height={600}
          />
          <Image
            src="/project1_mobile_1.png"
            alt="ATS project mobile screen"
            width={150}
            height={150}
            className="absolute top-1/3 md:left-3/4 left-3/4 w-[100px] md:w-[150px]"
          />
        </div>
        <div className="padding-container">
          <h2 className="bold-40">Applicant Tracking System</h2>
          <p className="regular-16 border-t-2 border-b-2 py-4">
            React ◆ Redux ◆ Material UI ◆ NodeJS ◆ Express ◆ MongoDB ◆{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around">
        <div className="max-w-[400px] md:max-w-[600px] relative">
          <Image
            src="/project2_desktop_1.png"
            alt="marketing portfolio desktop screen"
            width={600}
            height={600}
          />
          <Image
            src="/project2_mobile_1.png"
            alt="marketing portfolio mobile screen"
            width={150}
            height={150}
            className="absolute top-1/3 md:left-3/4 left-3/4 w-[100px] md:w-[150px]"
          />
        </div>
        <div className="padding-container">
          <h2 className="bold-40">Marketing portfolio site</h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
