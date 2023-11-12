import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="content-container border-t-2 border-b-2 bg-white dark:bg-gray-950 my-20">
      <h2 className="bold-40 text-center">Projects</h2>
      <div className="relative max-w-[500px]">
        <Image
          src="/project1_desktop_1.png"
          alt="ATS project desktop screen"
          width={500}
          height={500}
        />
        <Image
          src="/project1_mobile_1.png"
          alt="ATS project mobile screen"
          width={150}
          height={150}
          className="absolute top-1/3 left-3/4"
        />
      </div>
      <div className="relative max-w-[500px]">
        <Image
          src="/project2_desktop_1.png"
          alt="marketing portfolio desktop screen"
          width={500}
          height={500}
        />
        <Image
          src="/project2_mobile_1.png"
          alt="marketing portfolio mobile screen"
          width={150}
          height={150}
          className="absolute top-1/3 left-3/4"
        />
      </div>
    </section>
  );
};

export default Projects;
