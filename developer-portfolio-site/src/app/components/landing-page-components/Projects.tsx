import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Reveal from "../animation-components/Reveal";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Projects = () => {
  return (
    <section
      id="projects"
      className="content-container border-t-2 border-b-2 bg-white dark:bg-gray-950 my-20 rounded-lg"
    >
      <div className="flex flex-col md:flex-row justify-around md:items-center border-b-2 pb-12">
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
                This is a fullstack app I wrote for recruiters to help with
                candidate pipeline management.
              </p>
            </Reveal>

            <ul className="list-disc regular-18 p-2 md:p-0">
              <Reveal>
                <li className="ml-6">
                  Creating, updating and deleting candidate profiles
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">Token-based authentication</li>
              </Reveal>

              <Reveal>
                <li className="ml-6">
                  Uploading, downloading and deleting files on candidate profile
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Displaying, sorting and filtering candidates data
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">Responsive design</li>
              </Reveal>
            </ul>
            <Reveal>
              <Link href="/projects/ats-for-recruiters">
                <p className="p-2 hover:scale-105 ease-out duration-300 bold-24 text-orange-500 py-8 hover:text-orange-700 cursor-pointer max-w-[150px]">
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

        <div className="padding-container flex flex-col justify-center items-center">
          <Reveal>
            <h2 className="bold-40 text-center py-0 pb-4 md:py-4">
              Marketing Portfolio website
            </h2>
          </Reveal>

          <Reveal>
            <p className="regular-18 border-t-2 border-b-2 py-4 max-w-[700px]">
              Next.js ◆ TypeScript ◆ Tailwind ◆ Formik ◆ Yup
            </p>
          </Reveal>

          <div className="max-w-[700px]">
            <Reveal>
              <p className="regular-18 py-8">
                This is a modern portfolio website for online marketing
                specialist. Developed with focus on performance, responsive
                design and clean, futuristic design.
              </p>
            </Reveal>
            <ul className="list-disc regular-18 p-2 md:p-0">
              <Reveal>
                <li className="ml-6">Automated contact form handling</li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Performance-driven, optimized for speed and efficiency
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Focus on intuitive and user-friendly interface
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Excellent performance on mobile devices
                </li>
              </Reveal>
              <Reveal>
                <li className="ml-6">
                  Smooth animations to enhance user experience
                </li>
              </Reveal>
            </ul>
            <Reveal>
              <Link href="/projects/marketing-portfolio">
                <p className="p-2 hover:scale-105 ease-out duration-300 bold-24 text-orange-500 py-8 hover:text-orange-700 cursor-pointer max-w-[150px]">
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
      <Reveal>
        <Link href="/projects/playground">
          <div className="pt-12 md:pt-0 pb-12 pl-12 flex gap-8 items-end max-w-[400px] cursor-pointer">
            <h2 className="hover:scale-105 ease-in-out duration-300 bold-32-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700 drop-shadow-lg">
              View more projects
            </h2>
            <AiOutlineArrowLeft size={30} className="animate-bounce" />
          </div>
        </Link>
      </Reveal>
    </section>
  );
};

export default Projects;
