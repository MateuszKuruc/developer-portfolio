/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { SPAGHETTI_PROJECTS } from "@/app/constants/textConstants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Playground = () => {
  return (
    <section className="content-container py-12">
      <div className="flex flex-col items-center justify-around py-12 gap-8">
        <h2 className="bold-40 ">Playground</h2>
        <Image
          src="/githubInfo.png"
          width={1200}
          height={600}
          alt="github"
          className="rounded-lg border- border-orange-700 dark:border-orange-500"
        />
      </div>
      <div className="flex flex-col items-center gap-8">
        <h3 className="bold-32-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700">
          Spaghetti code section
        </h3>

        <div className="padding-container max-w-[1000px] regular-20">
          <p>
            These are some of my old projects documenting my road to learning
            programming. I have made <strong>many more</strong> - especially
            with React, Redux, Node, Express and MongoDB - but most of them are
            not fit for deployment, as I have been focusing on learning the
            tools and logic, ignoring UI.
          </p>
          <p className="pt-4">
            If you would like to check the code of the projects that weren't
            uploaded, you should check{" "}
            <span className="inline-block">
              <a
                target="_blank"
                href="https://github.com/MateuszKuruc/fullStackOpen"
              >
                <span className="bold-20 text-orange-500 hover:scale-105 hover:text-orange-700 ease-in-out duration-300">
                  this folder
                </span>
              </a>
            </span>{" "}
            with a few hundred hours' worth of coding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {SPAGHETTI_PROJECTS.map((project) => (
            <div
              key={project.name}
              className=" flex flex-col justify-between items-center bg-orange-100 dark:bg-gray-950 mx-4 my-4 border-2 rounded-lg border-orange-700 dark:border-orange-500 shadow-image"
            >
              <Image
                src={project.src}
                width={500}
                height={500}
                alt={project.alt}
              />
              <div className="flex flex-col items-center justify-center rounded-lg gap-4 px-8 pb-8">
                <h3 className="bold-24 text-orange-700 dark:text-orange-500">
                  {project.name}
                </h3>

                <p className="regular-18 border-b-2 border-t-2 border-orange-700 dark:border-orange-500 md:h-[60px] flex items-center">
                  {project.stack}
                </p>

                <p className="regular-20 py-4">{project.description}</p>

                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <a target="_blank" href={project.live}>
                    <button className="btn-about max-w-[200px]">
                      <p className="bold-18">Live</p>
                      <FaExternalLinkAlt size={30} />
                    </button>
                  </a>
                  <a target="_blank" href={project.code}>
                    <button className="btn-about max-w-[200px]">
                      <p className="bold-18">Code</p>
                      <BsGithub size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* projects: patientor? phonebook? blog app? weather app? todo-list? restaurant page? calculator? library? tic tac toe? admin-dashboard? rock-paper-scissors?*/}
      </div>
    </section>
  );
};

export default Playground;
