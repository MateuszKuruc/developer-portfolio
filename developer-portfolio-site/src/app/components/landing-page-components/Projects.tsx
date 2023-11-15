import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Reveal from "../animation-components/Reveal";

const Projects = () => {
  return (
    <section
      id="projects"
      className="content-container border-t-2 border-b-2 bg-white dark:bg-gray-950 my-20 rounded-lg"
    >
      <div className="flex flex-col md:flex-row justify-around md:items-center border-b-2 pb-12">
        <Reveal>

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
            </Reveal>
        <div className="padding-container flex flex-col justify-center items-center">
          <Reveal>
            <h2 className="bold-40 text-center py-0 pb-4 md:py-4">
              Applicant Tracking System
            </h2>
          </Reveal>
          <Reveal>
            <p className="regular-18 border-t-2 border-b-2 py-4 max-w-[700px]">
              React ◆ Redux ◆ NodeJS ◆ Express ◆ AWS ◆ MongoDB ◆ Material UI ◆
              Styled components
            </p>
          </Reveal>

          <div className="max-w-[700px]">
            <Reveal>
              <p className="regular-18 py-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur efficitur ex sit amet sollicitudin porta.
              </p>
            </Reveal>

            <ul className="list-disc regular-18 p-2 md:p-0">
              <Reveal>
                <li className="ml-6">
                  Nulla quis ex sed dolor iaculis gravida. Curabitur quis turpis
                  diam. Etiam euismod, tellus ut pretium pharetra, sem odio
                  rhoncus ante, sit amet condimentum nunc elit id metus.
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Donec non felis mi. Donec nec nulla vitae lacus efficitur
                  lobortis. Cras malesuada vehicula neque, in dictum nulla
                  porttitor scelerisque.
                </li>
              </Reveal>

              <Reveal>
                <li className="ml-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Maecenas vitae lectus quis
                  risus ultrices malesuada.
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Quisque sollicitudin sit amet est et pellentesque. Etiam
                  lobortis massa vitae velit commodo, sit amet convallis massa
                  commodo.{" "}
                </li>
              </Reveal>
            </ul>
<Reveal>

            <Link href="/projects/ats-for-recruiters">
              <p className="bold-24 text-orange-500 py-8 hover:text-orange-700 cursor-pointer max-w-[150px]">
                Read more...
              </p>
            </Link>
</Reveal>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a target="_blank" href="https://ats-mateuszkuruc.onrender.com/">
                <button className="btn-about">
                  <p className="bold-18">Live</p>
                  <FaExternalLinkAlt size={30} />
                </button>
              </a>
              <a target="_blank" href={process.env.GITHUB_LINK}>
                <button className="btn-about">
                  <p className="bold-18">Code</p>
                  <BsGithub size={30} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-around pb-8 md:pb-12 md:items-center">
<Reveal>
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
            </Reveal>

        <div className="padding-container flex flex-col justify-center items-center">
          <Reveal>
            <h2 className="bold-40 text-center py-0 pb-4 md:py-4">
              Marketing Portfolio website
            </h2>
          </Reveal>
          {/* <p className="regular-18 border-t-2 border-b-2 py-4 w-[auto] md:w-[700px] text-center"> */}
          <Reveal>
            <p className="regular-18 border-t-2 border-b-2 py-4 max-w-[700px]">
              Next.js ◆ TypeScript ◆ Tailwind ◆ Formik ◆ Yup
            </p>
          </Reveal>

          <div className="max-w-[700px]">
            <Reveal>
              <p className="regular-18 py-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur efficitur ex sit amet sollicitudin porta.
              </p>
            </Reveal>
            <ul className="list-disc regular-18 p-2 md:p-0">
              <Reveal>
                <li className="ml-6">
                  Nulla quis ex sed dolor iaculis gravida. Curabitur quis turpis
                  diam. Etiam euismod, tellus ut pretium pharetra, sem odio
                  rhoncus ante, sit amet condimentum nunc elit id metus.
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Donec non felis mi. Donec nec nulla vitae lacus efficitur
                  lobortis. Cras malesuada vehicula neque, in dictum nulla
                  porttitor scelerisque.
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Maecenas vitae lectus quis
                  risus ultrices malesuada.
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Quisque sollicitudin sit amet est et pellentesque. Etiam
                  lobortis massa vitae velit commodo, sit amet convallis massa
                  commodo.{" "}
                </li>
              </Reveal>
            </ul>
            <Reveal>

            <Link href="/projects/marketing-portfolio">
              <p className="bold-24 text-orange-500 py-8 hover:text-orange-700 cursor-pointer max-w-[150px]">
                Read more...
              </p>
            </Link>
            </Reveal>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a target="_blank" href="https://www.reklamyfacebook.pl/">
                <button className="btn-about">
                  <p className="bold-18">Live</p>
                  <FaExternalLinkAlt size={30} />
                </button>
              </a>
              <a target="_blank" href={process.env.GITHUB_LINK}>
                <button className="btn-about">
                  <p className="bold-18">Code</p>
                  <BsGithub size={30} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
