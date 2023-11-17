import React from "react";
import Image from "next/image";
import { SPAGHETTI_PROJECTS } from "@/app/constants/textConstants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Playground = () => {
  return (
    <section className="content-container">
      <div className="flex items-center justify-around py-12">
        <h2 className="bold-40 ">Playground</h2>
        <Image
          src="/githubInfo.png"
          width={800}
          height={600}
          alt="github"
          className="rounded-lg border-4 border-orange-700 dark:border-orange-500"
          />
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* <h3 className="bold-32-tight">Spaghetti code section</h3> */}
        <h3 className="bold-32-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700">
          Spaghetti code section
        </h3>
        <p className="max-w-[800px] regular-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          congue pharetra ex id accumsan. Curabitur vel magna in nulla tempor
          pharetra. Nam cursus, quam nec volutpat congue, velit tortor pharetra
          quam, eu porttitor orci urna sit amet orci. Fusce auctor neque lectus,
          quis imperdiet erat dictum vel.
        </p>

        <div className="grid grid-cols-2 2xl:grid-cols-3">
          {SPAGHETTI_PROJECTS.map((project) => (
            <div
              key={project.name}
              className="p-8 flex flex-col justify-between bg-orange-100 dark:bg-gray-950 mx-4 my-4 border-4 rounded-lg border-orange-700 dark:border-orange-500 shadow-image"
            >
              <Image
                src={project.src}
                width={500}
                height={500}
                alt={project.alt}
                // className="border-2"
              />
              <div className="flex flex-col items-center justify-center rounded-lg gap-4">
                <h3 className="bold-24 text-orange-700">{project.name}</h3>

                <p className="regular-18 border-b-2 border-t-2 border-orange-700 h-[60px] flex items-center">
                  {project.stack}
                </p>

                <p className="regular-20">{project.description}</p>

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
