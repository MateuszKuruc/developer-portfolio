import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="content-container border-t-2 border-b-2 bg-white dark:bg-gray-950 my-20">
        <h2 className="bold-40 text-center">Projects</h2>
<div>
    <Image src="/project1_desktop_1.png" alt="ATS project desktop screen" width={500} height={500} />
    <Image src="/project1_mobile_1.png" alt="ATS project mobile screen" width={200} height={200} />
</div>
    </section>
  )
};

export default Projects;
